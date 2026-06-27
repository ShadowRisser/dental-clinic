import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { email } = body
    if (!email || !emailRe.test(String(email))) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 422 })
    }

    const clean = String(email).trim().toLowerCase()

    const existing = await db.newsletterSubscriber.findUnique({ where: { email: clean } })
    if (existing) {
      return NextResponse.json({
        success: true,
        alreadySubscribed: true,
        message: "You're already on the list!",
      })
    }

    await db.newsletterSubscriber.create({
      data: { email: clean, source: 'website' },
    })

    return NextResponse.json({ success: true, message: 'Subscribed' })
  } catch (err) {
    console.error('[newsletter] POST error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
