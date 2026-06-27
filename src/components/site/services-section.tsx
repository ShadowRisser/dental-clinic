'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Check, Clock } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal, StaggerGroup, staggerItem } from './reveal'
import { services, type Service } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const accentMap: Record<Service['accent'], string> = {
  brand: 'from-primary/15 to-brand/10 text-primary group-hover:from-primary group-hover:to-brand group-hover:text-primary-foreground',
  gold: 'from-gold/20 to-gold/5 text-gold-foreground group-hover:from-gold group-hover:to-gold group-hover:text-gold-foreground',
  teal: 'from-brand/15 to-primary/10 text-brand group-hover:from-brand group-hover:to-primary group-hover:text-primary-foreground',
}

const dotMap: Record<Service['accent'], string> = {
  brand: 'bg-primary',
  gold: 'bg-gold',
  teal: 'bg-brand',
}

export function ServicesSection() {
  return (
    <section id="services" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Comprehensive care, <span className="text-gradient-brand">crafted to perfection</span>
            </>
          }
          description="From routine cleanings to full smile makeovers, every service is delivered with precision, comfort, and an artist's eye for detail."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.slug}
                variants={staggerItem}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow md:p-7"
              >
                {/* gradient glow on hover */}
                <div
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                <div className="flex items-start justify-between gap-4">
                  <span
                    className={cn(
                      'flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br transition-all duration-300',
                      accentMap[service.accent]
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                    from {service.priceFrom}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{service.short}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {service.description}
                </p>

                <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs text-foreground/80">
                      <Check className={cn('h-3.5 w-3.5 shrink-0', dotMap[service.accent])} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {service.duration}
                  </span>
                  <a
                    href="#booking"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2"
                  >
                    Book
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </StaggerGroup>

        <Reveal className="mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center sm:flex-row sm:gap-6 sm:text-left">
          <p className="text-sm text-muted-foreground sm:text-base">
            Not sure which treatment is right for you?
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Get a free personalized assessment
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
