'use client'

import { motion } from 'framer-motion'
import { Quote, Sparkles, HeartHandshake, Microscope } from 'lucide-react'
import { Reveal } from './reveal'
import { heroImages } from '@/lib/site-data'

const pillars = [
  {
    icon: Sparkles,
    title: 'Artistry',
    text: 'Every smile is hand-designed for facial harmony and natural beauty.',
  },
  {
    icon: Microscope,
    title: 'Precision',
    text: 'Digital workflows and 3D imaging drive predictable, superior outcomes.',
  },
  {
    icon: HeartHandshake,
    title: 'Compassion',
    text: 'Gentle, judgment-free care that respects your time and your comfort.',
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image side */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-border/60">
              <img
                src={heroImages.treatment}
                alt="Dentist providing gentle, modern treatment to a relaxed patient"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            </div>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -right-2 max-w-xs rounded-2xl border border-border/60 bg-card p-5 shadow-glow backdrop-blur-md sm:-right-6"
            >
              <Quote className="h-6 w-6 text-gold" />
              <p className="mt-2 text-sm font-medium leading-relaxed text-foreground text-pretty">
                “We don't just fix teeth — we restore confidence, one smile at a time.”
              </p>
              <p className="mt-2 text-xs font-semibold text-primary">
                Dr. Elena Vasquez · Founder
              </p>
            </motion.div>

            {/* Decorative ring */}
            <div
              className="absolute -left-6 -top-6 -z-10 h-24 w-24 rounded-full border-2 border-dashed border-gold/40 animate-float-soft"
              aria-hidden
            />
          </Reveal>

          {/* Text side */}
          <div className="order-1 flex flex-col gap-6 lg:order-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Our Story
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.85rem] text-balance">
                A new standard of <span className="text-gradient-brand">dental excellence</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Founded in 2009 by Dr. Elena Vasquez, Lumière Dental began with a simple conviction:
                that visiting the dentist should feel luxurious, calming, and genuinely delightful.
                We blended the precision of modern digital dentistry with the warmth of true
                hospitality — and redefined what a dental practice could be.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Today, our six in-house specialists treat every generation under one roof, using
                3D imaging, guided surgery, and digital smile design to deliver results that look
                and feel completely natural. Over 25,000 smiles later, our promise remains the same:
                pain-free, artistry-led care built entirely around you.
              </p>
            </Reveal>

            <div className="mt-2 grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => {
                const Icon = p.icon
                return (
                  <Reveal key={p.title} delay={0.2 + i * 0.08}>
                    <div className="flex h-full flex-col gap-2 rounded-2xl border border-border/70 bg-card p-4 shadow-soft">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                      <p className="text-xs leading-relaxed text-muted-foreground text-pretty">{p.text}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
