'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, ArrowRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, staggerItem } from './reveal'
import { pricingPlans } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function PricingSection() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 mesh-bg opacity-60" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Membership Plans"
          title={
            <>
              Simple, transparent <span className="text-gradient-brand">care plans</span>
            </>
          }
          description="No insurance? No problem. Our in-house membership plans cover preventive care and unlock exclusive savings — no deductibles, no annual maximums."
        />

        <StaggerGroup className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              className={cn(
                'relative flex flex-col rounded-3xl border p-7 transition-all duration-300',
                plan.highlighted
                  ? 'border-primary/40 bg-card shadow-glow lg:-translate-y-3 lg:scale-[1.02]'
                  : 'border-border/70 bg-card/70 shadow-soft hover:-translate-y-1 hover:border-primary/30'
              )}
            >
              {plan.highlighted ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-soft">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </span>
              ) : null}

              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-semibold text-foreground">{plan.name}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground text-pretty">{plan.description}</p>

              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-semibold tracking-tight text-foreground">
                  {plan.price}
                </span>
                <span className="mb-1 text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <a
                href="#booking"
                className={cn(
                  'mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all',
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground shadow-glow hover:scale-[1.03]'
                    : 'border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground'
                )}
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>

              <ul className="mt-7 space-y-3 border-t border-border/70 pt-6">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/90">
                    <span
                      className={cn(
                        'mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                        plan.highlighted ? 'bg-gold text-gold-foreground' : 'bg-primary/15 text-primary'
                      )}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </StaggerGroup>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          All plans include free emergency phone access · Cancel anytime · Family discounts available
        </p>
      </div>
    </section>
  )
}
