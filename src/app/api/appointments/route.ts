import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { name, email, phone, service, doctor, date, time, notes } = body

    const errors: Record<string, string> = {}
    if (!name || String(name).trim().length < 2) errors.name = 'Name is required'
    if (!email || !emailRe.test(String(email))) errors.email = 'Valid email is required'
    if (!phone || String(phone).trim().length < 7) errors.phone = 'Valid phone is required'
    if (!service) errors.service = 'Service is required'
    if (!date) errors.date = 'Date is required'
    if (!time) errors.time = 'Time is required'

    if (Object.keys(errors).length) {
      return NextResponse.json({ error: 'Validation failed', errors }, { status: 422 })
    }

    // Prevent double-booking on same date+time for the same doctor (if specified)
    const conflict = await db.appointment.findFirst({
      where: {
        date: String(date),
        time: String(time),
        status: { not: 'cancelled' },
        ...(doctor ? { doctor: String(doctor) } : {}),
      },
    })
    if (conflict) {
      return NextResponse.json(
        { error: 'That time slot was just booked. Please choose another time.', code: 'SLOT_TAKEN' },
        { status: 409 }
      )
    }

    const appointment = await db.appointment.create({
      data: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone).trim(),
        service: String(service),
        doctor: doctor ? String(doctor) : null,
        date: String(date),
        time: String(time),
        notes: notes ? String(notes).slice(0, 500) : null,
        status: 'pending',
      },
    })

    return NextResponse.json({
      success: true,
      id: appointment.id,
      message: 'Appointment request received',
    })
  } catch (err) {
    console.error('[appointments] POST error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

export async function GET() {
  try {
    const upcoming = await db.appointment.findMany({
      where: { status: { not: 'cancelled' } },
      orderBy: { createdAt: 'desc' },
      take: 25,
      select: {
        id: true,
        name: true,
        service: true,
        date: true,
        time: true,
        status: true,
        createdAt: true,
      },
    })
    return NextResponse.json({ success: true, appointments: upcoming })
  } catch (err) {
    console.error('[appointments] GET error', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
