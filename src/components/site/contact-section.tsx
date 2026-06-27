'use client'

import * as React from 'react'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Loader2,
  Gift,
  Navigation,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Reveal } from './reveal'
import { clinicInfo } from '@/lib/site-data'
import { toast } from 'sonner'

export function ContactSection() {
  const [contactSubmitting, setContactSubmitting] = React.useState(false)
  const [newsSubmitting, setNewsSubmitting] = React.useState(false)

  async function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      subject: String(data.get('subject') || 'Website enquiry'),
      message: String(data.get('message') || ''),
    }
    if (!payload.name || !payload.email || !payload.message) {
      toast.error('Please fill in your name, email, and message.')
      return
    }
    setContactSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Request failed')
      toast.success('Message sent!', {
        description: "We'll get back to you within one business day.",
      })
      form.reset()
    } catch {
      toast.error('Could not send message', { description: 'Please call us instead.' })
    } finally {
      setContactSubmitting(false)
    }
  }

  async function handleNewsletter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = String(new FormData(form).get('email') || '')
    if (!email) return
    setNewsSubmitting(true)
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')
      toast.success('Welcome to the Lumière family!', {
        description: 'Check your inbox for a 10% welcome offer.',
      })
      form.reset()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Could not subscribe')
    } finally {
      setNewsSubmitting(false)
    }
  }

  const contactCards = [
    {
      icon: MapPin,
      label: 'Visit us',
      lines: [clinicInfo.address, clinicInfo.city],
      href: '#map',
    },
    {
      icon: Phone,
      label: 'Call us',
      lines: [clinicInfo.phone, `Emergency: ${clinicInfo.emergencyPhone}`],
      href: `tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`,
    },
    {
      icon: Mail,
      label: 'Email us',
      lines: [clinicInfo.email, 'Replies within 24 hours'],
      href: `mailto:${clinicInfo.email}`,
    },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: contact info */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Get in Touch
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.85rem] text-balance">
                We'd love to <span className="text-gradient-brand">hear from you</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Whether you're ready to book or just have a question, our friendly team is here to
                help you feel at home.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((c, i) => {
                const Icon = c.icon
                return (
                  <Reveal key={c.label} delay={i * 0.08}>
                    <a
                      href={c.href}
                      className="group flex h-full flex-col gap-2 rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {c.label}
                      </p>
                      {c.lines.map((l) => (
                        <p key={l} className="text-sm font-medium text-foreground">{l}</p>
                      ))}
                    </a>
                  </Reveal>
                )
              })}
            </div>

            {/* Hours */}
            <Reveal delay={0.16}>
              <div className="rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-base font-semibold text-foreground">Office Hours</h3>
                </div>
                <ul className="mt-3 space-y-2">
                  {clinicInfo.hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between border-b border-border/50 pb-2 text-sm last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Map placeholder */}
            <Reveal delay={0.2}>
              <div id="map" className="relative overflow-hidden rounded-2xl border border-border/70 shadow-soft">
                <div className="mesh-bg grid-pattern relative flex h-48 items-center justify-center bg-secondary">
                  <div className="flex flex-col items-center gap-2 text-center">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-glow animate-pulse-ring">
                      <Navigation className="h-6 w-6" />
                    </span>
                    <p className="font-display text-base font-semibold text-foreground">{clinicInfo.address}</p>
                    <p className="text-sm text-muted-foreground">{clinicInfo.city}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: forms */}
          <div className="flex flex-col gap-6">
            {/* Contact form */}
            <Reveal>
              <div className="rounded-3xl border border-border/70 bg-card p-6 shadow-glow sm:p-8">
                <h3 className="font-display text-xl font-semibold text-foreground">Send us a message</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  We typically respond within one business day.
                </p>
                <form onSubmit={handleContact} className="mt-5 flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="c-name">Name</Label>
                      <Input id="c-name" name="name" placeholder="Your name" className="h-11 rounded-xl" required />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="c-phone">Phone</Label>
                      <Input id="c-phone" name="phone" placeholder="Optional" className="h-11 rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-email">Email</Label>
                    <Input id="c-email" name="email" type="email" placeholder="you@email.com" className="h-11 rounded-xl" required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-subject">Subject</Label>
                    <Input id="c-subject" name="subject" placeholder="How can we help?" className="h-11 rounded-xl" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="c-message">Message</Label>
                    <Textarea id="c-message" name="message" placeholder="Tell us a bit more…" className="min-h-[110px] rounded-xl resize-none" required />
                  </div>
                  <Button
                    type="submit"
                    disabled={contactSubmitting}
                    className="h-12 rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
                  >
                    {contactSubmitting ? (
                      <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending…</>
                    ) : (
                      <><Send className="mr-2 h-4 w-4" /> Send Message</>
                    )}
                  </Button>
                </form>
              </div>
            </Reveal>

            {/* Newsletter */}
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary to-brand p-6 text-primary-foreground shadow-glow sm:p-8">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/30 blur-2xl" aria-hidden />
                <div className="relative">
                  <div className="flex items-center gap-2">
                    <Gift className="h-5 w-5 text-gold" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                      Smile Insider
                    </span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">
                    Join & get 10% off your first visit
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/85">
                    Oral health tips, exclusive offers, and smile stories — once a month, never spam.
                  </p>
                  <form onSubmit={handleNewsletter} className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="h-12 flex-1 rounded-full border-0 bg-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/40"
                    />
                    <Button
                      type="submit"
                      disabled={newsSubmitting}
                      className="h-12 rounded-full bg-gold px-6 font-semibold text-gold-foreground hover:bg-gold/90 disabled:opacity-70"
                    >
                      {newsSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Subscribe'}
                    </Button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
