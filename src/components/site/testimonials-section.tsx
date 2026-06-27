'use client'

import * as React from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'
import { testimonials } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const avatarColors = [
  'from-primary to-brand',
  'from-brand to-primary',
  'from-gold to-amber-500',
  'from-primary to-teal-600',
  'from-brand to-emerald-600',
  'from-amber-500 to-gold',
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      <div className="absolute right-0 top-20 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl" aria-hidden />
      <div className="absolute left-0 bottom-20 -z-10 h-72 w-72 rounded-full bg-primary/15 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Stories"
          title={
            <>
              Loved by <span className="text-gradient-brand">25,000+ smiles</span>
            </>
          }
          description="Real reviews from real patients who found their confidence at Lumière Dental."
        />

        <Reveal className="mt-14">
          <Carousel
            opts={{ align: 'start', loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, i) => (
                <CarouselItem key={t.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <article className="flex h-full flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-all duration-300 hover:shadow-glow">
                    <div className="flex items-center justify-between">
                      <Quote className="h-8 w-8 text-primary/25" />
                      <div className="flex items-center gap-0.5 text-gold">
                        {Array.from({ length: t.rating }).map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-foreground/90 text-pretty">
                      “{t.quote}”
                    </p>
                    <div className="mt-2 flex items-center gap-3 border-t border-border/70 pt-4">
                      <span
                        className={cn(
                          'flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-primary-foreground',
                          avatarColors[i % avatarColors.length]
                        )}
                      >
                        {t.avatar}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.treatment}</p>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden h-11 w-11 rounded-full border-primary/30 bg-card text-primary sm:flex" />
            <CarouselNext className="hidden h-11 w-11 rounded-full border-primary/30 bg-card text-primary sm:flex" />
          </Carousel>
        </Reveal>

        {/* Trust row */}
        <Reveal className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          <div className="flex flex-col">
            <span className="font-display text-2xl font-semibold text-gradient-brand">4.9/5</span>
            <span className="text-xs text-muted-foreground">Google · 1,240 reviews</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col">
            <span className="font-display text-2xl font-semibold text-gradient-brand">4.9/5</span>
            <span className="text-xs text-muted-foreground">Yelp · 890 reviews</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col">
            <span className="font-display text-2xl font-semibold text-gradient-brand">5.0/5</span>
            <span className="text-xs text-muted-foreground">Healthgrades · 1,070</span>
          </div>
          <div className="h-10 w-px bg-border" />
          <div className="flex flex-col">
            <span className="font-display text-2xl font-semibold text-gradient-brand">98%</span>
            <span className="text-xs text-muted-foreground">would recommend</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
