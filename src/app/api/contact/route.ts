import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { name, email, phone, subject, message } = body

    if (!name || String(name).trim().length < 2) {
      return NextResponse.json({ error: 'Name is required' }, { status: 422 })
    }
    if (!email || !emailRe.test(String(email))) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 422 })
    }
    if (!message || String(message).trim().length < 5) {
      return NextResponse.json({ error: 'Please include a message' }, { status: 422 })
    }

    const entry = await db.contactMessage.create({
      data: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: phone ? String(phone).trim() : null,
        subject: subject ? String(subject).slice(0, 200) : 'Website enquiry',
        message: String(message).slice(0, 2000),
      },
    })

    return NextResponse.json({
      success: true,
      id: entry.id,
      message: 'Message received',
    })
  } catch (err) {
    console.error('[contact] POST error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
