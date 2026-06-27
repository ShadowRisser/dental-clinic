import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'
import { db } from '@/lib/db'

const SYSTEM_PROMPT = `You are "Lumi", the friendly AI dental assistant for Lumière Dental, an award-winning cosmetic & family dental clinic in San Francisco (founded 2009).

YOUR ROLE:
- Help website visitors understand services, pricing, the team, and booking.
- Answer dental questions in a warm, reassuring, professional tone.
- Gently guide anxious patients and encourage them to book a consultation.

CLINIC FACTS YOU CAN SHARE:
- Phone: +1 (415) 555-0192 · Emergency: +1 (415) 555-0911 · Email: hello@lumieredental.com
- Address: 248 Marina Boulevard, Suite 500, San Francisco, CA 94123
- Hours: Mon–Fri 8am–6pm, Sat 9am–3pm, Sun emergency only
- In-network with Delta Dental, Cigna, Aetna, MetLife, Guardian, Blue Cross, UnitedHealth. Offers CareCredit & Sunbit 0% financing.
- 6 in-house specialists, no referrals needed. 25,000+ smiles, 4.9★ rating, 99.2% implant success.

SERVICES & STARTING PRICES:
- Cosmetic Dentistry (veneers, bonding) — from $450
- Teeth Whitening (Zoom in-office & take-home) — from $299
- Dental Implants (single & All-on-4) — from $1,900
- Invisible Aligners (Invisalign/ClearCorrect) — from $3,200
- General Dentistry (exams, cleanings, fillings, root canals) — from $89
- Pediatric Dentistry — from $79
- Emergency Dental (same-day) — from $120
- Protective Care (night/sports guards) — from $189

DOCTORS:
- Dr. Elena Vasquez — Founder & Lead Cosmetic Dentist
- Dr. Marcus Chen — Implant & Oral Surgeon (99.2% success rate)
- Dr. Sofia Rahman — Orthodontist (Invisalign Diamond+)
- Dr. James Okonkwo — General & Family Dentist (gentle/sedation)
- Dr. Amelia Park — Pediatric Dentist
- Dr. Liam Anderson — Endodontist (painless root canals)

MEMBERSHIP PLANS (no insurance needed):
- Essential Care — $29/mo: 2 cleanings/yr, 20% off, priority emergency
- Complete Smile — $59/mo (most popular): 4 cleanings, free whitening, 30% off, night guard
- Elite Dental — $129/mo: unlimited cleanings, 2 whitening, 40% off cosmetic, concierge

RULES:
- Keep replies concise (2–5 sentences) unless the user asks for detail.
- Never give a definitive medical diagnosis; recommend an in-person visit for specific concerns.
- Always encourage booking via the website's booking form or by phone for anything requiring treatment.
- If asked about something outside dentistry, politely steer back to how Lumière can help their smile.
- Do not invent prices or services not listed above.`

// Simple in-memory conversation store (per session)
const conversations = new Map<string, { role: string; content: string }[]>()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { message, sessionId } = body
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message is required' }, { status: 422 })
    }
    if (message.length > 800) {
      return NextResponse.json({ error: 'Message too long' }, { status: 422 })
    }

    const sid = sessionId || 'anon'

    // Build history
    let history = conversations.get(sid)
    if (!history) {
      history = [{ role: 'assistant', content: SYSTEM_PROMPT }]
      conversations.set(sid, history)
    }
    history.push({ role: 'user', content: message })

    // Keep history bounded (system prompt + last 10 turns)
    if (history.length > 21) {
      history = [history[0], ...history.slice(-20)]
      conversations.set(sid, history)
    }

    const zai = await ZAI.create()
    const completion = await zai.chat.completions.create({
      messages: history as any,
      thinking: { type: 'disabled' },
    })

    const reply = completion.choices[0]?.message?.content?.trim() || ''
    if (reply) {
      history.push({ role: 'assistant', content: reply })
    }

    // Persist to DB (fire-and-forget, non-blocking)
    db.chatLog.create({
      data: { sessionId: sid, role: 'user', content: message },
    }).catch(() => {})
    if (reply) {
      db.chatLog.create({
        data: { sessionId: sid, role: 'assistant', content: reply },
      }).catch(() => {})
    }

    return NextResponse.json({ success: true, reply })
  } catch (err) {
    console.error('[chat] POST error', err)
    return NextResponse.json(
      { error: 'The assistant is unavailable right now. Please call us instead.' },
      { status: 500 }
    )
  }
}
