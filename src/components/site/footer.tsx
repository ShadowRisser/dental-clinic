'use client'

import * as React from 'react'
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook, Twitter, Youtube, ArrowUp, Clock } from 'lucide-react'
import { clinicInfo, services, navLinks } from '@/lib/site-data'

export function Footer() {
  const year = new Date().getFullYear()
  const topRef = React.useRef<HTMLAnchorElement>(null)

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border bg-foreground text-background">
      <div className="absolute inset-0 -z-10 opacity-30" aria-hidden>
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand text-primary-foreground">
                <Sparkles className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-foreground" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold tracking-tight">Lumière</span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-background/60">
                  Dental
                </span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-background/70 text-pretty">
              {clinicInfo.tagline}. Award-winning cosmetic, implant & family dentistry in a
              spa-like setting since 2009.
            </p>
            <div className="flex items-center gap-2">
              {[
                { icon: Instagram, href: clinicInfo.socials.instagram, label: 'Instagram' },
                { icon: Facebook, href: clinicInfo.socials.facebook, label: 'Facebook' },
                { icon: Twitter, href: clinicInfo.socials.twitter, label: 'Twitter' },
                { icon: Youtube, href: clinicInfo.socials.youtube, label: 'YouTube' },
              ].map((s) => {
                const Icon = s.icon
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 text-background/70 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-background/90">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-background/70 transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-background/90">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a href="#services" className="text-sm text-background/70 transition-colors hover:text-gold">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-background/90">
              Visit Lumière
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {clinicInfo.address}
                  <br />
                  {clinicInfo.city}
                </span>
              </li>
              <li>
                <a href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  {clinicInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${clinicInfo.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  {clinicInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  Mon–Fri 8am–6pm
                  <br />
                  Sat 9am–3pm
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-6 sm:flex-row">
          <p className="text-xs text-background/60">
            © {year} {clinicInfo.name}. All rights reserved. Crafted with care.
          </p>
          <div className="flex items-center gap-5 text-xs text-background/60">
            <a href="#" className="transition-colors hover:text-gold">Privacy</a>
            <a href="#" className="transition-colors hover:text-gold">Terms</a>
            <a href="#" className="transition-colors hover:text-gold">Accessibility</a>
            <a
              ref={topRef}
              href="#top"
              className="flex items-center gap-1.5 rounded-full border border-background/15 px-3 py-1.5 transition-colors hover:border-gold hover:text-gold"
            >
              Back to top <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
