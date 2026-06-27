'use client'

import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { processSteps } from '@/lib/site-data'

export function ProcessSection() {
  return (
    <section className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Your journey to a <span className="text-gradient-brand">radiant smile</span>
            </>
          }
          description="A calm, transparent, four-step experience designed around your comfort and confidence."
        />

        <div className="relative mt-16">
          {/* Connecting line */}
          <div
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block"
            aria-hidden
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon
              return (
                <Reveal key={step.step} delay={i * 0.1} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-card p-4 shadow-soft">
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[0.7rem] font-bold text-gold-foreground shadow-soft">
                        {step.step}
                      </span>
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground text-pretty">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
