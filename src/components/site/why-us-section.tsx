'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from './section-heading'
import { StaggerGroup, staggerItem, Reveal } from './reveal'
import { features, galleryImages } from '@/lib/site-data'

export function WhyUsSection() {
  return (
    <section id="why-us" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Lumière"
          title={
            <>
              Dentistry, reimagined around <span className="text-gradient-brand">your comfort</span>
            </>
          }
          description="We've redesigned every detail of the dental experience — from the moment you walk in to the moment you leave smiling."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          {/* Gallery collage */}
          <Reveal className="relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-border/60">
                  <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-border/60">
                  <img
                    src={galleryImages[5].src}
                    alt={galleryImages[5].alt}
                    className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="space-y-3 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-border/60">
                  <img
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-border/60">
                  <img
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl border border-border/60 bg-card/95 px-5 py-3 text-center shadow-glow backdrop-blur-md">
              <p className="font-display text-2xl font-semibold text-gradient-brand">15+ yrs</p>
              <p className="text-xs text-muted-foreground">of award-winning care</p>
            </div>
          </Reveal>

          {/* Features list */}
          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="group rounded-2xl border border-border/70 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-glow"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
