'use client'

import { motion } from 'framer-motion'
import { Star, GraduationCap, Briefcase, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { StaggerGroup, staggerItem } from './reveal'
import { doctors } from '@/lib/site-data'

export function DoctorsSection() {
  return (
    <section id="doctors" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-secondary/40" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Meet the Team"
          title={
            <>
              Specialists who genuinely <span className="text-gradient-brand">care about you</span>
            </>
          }
          description="Six board-certified specialists, one roof, zero referrals. Meet the doctors behind your smile."
        />

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {doctors.map((doc) => (
            <motion.article
              key={doc.id}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.role} at Lumière Dental`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                {/* Experience badge */}
                <span className="absolute right-3 top-3 rounded-full bg-card/90 px-2.5 py-1 text-[0.7rem] font-bold text-primary shadow-soft backdrop-blur">
                  {doc.experience}
                </span>

                {/* Rating */}
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-gold/95 px-2.5 py-1 text-[0.7rem] font-bold text-gold-foreground shadow-soft backdrop-blur">
                  <Star className="h-3 w-3 fill-current" />
                  {doc.rating.toFixed(1)}
                </span>

                {/* Name overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    {doc.specialty}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-foreground">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{doc.role}</p>
                </div>
              </div>

              {/* Expandable bio */}
              <div className="border-t border-border/70 p-5">
                <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
                  {doc.bio}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {doc.credentials.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-xs text-foreground/80">
                      <GraduationCap className="h-3.5 w-3.5 shrink-0 text-primary" />
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                  href="#booking"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  Book with {doc.name.split(' ').slice(-2, -1)[0] || doc.name.split(' ')[0]}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  )
}
