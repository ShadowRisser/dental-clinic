'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Star, ShieldCheck, CalendarCheck, Phone, Play, Award, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroImages, clinicInfo } from '@/lib/site-data'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 mesh-bg" aria-hidden />
      <div
        className="absolute inset-0 -z-10 grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        aria-hidden
      />
      <div
        className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -right-16 top-48 -z-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:px-8">
        {/* Left content */}
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary shadow-soft backdrop-blur"
          >
            <span className="flex -space-x-1.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand text-[0.55rem] font-bold text-primary-foreground ring-2 ring-card"
                >
                  ★
                </span>
              ))}
            </span>
            Rated 4.9 · 3,200+ happy patients
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:text-6xl lg:text-[4.1rem] text-balance"
          >
            Your{' '}
            <span className="relative whitespace-nowrap">
              <span className="text-gradient-brand">dream smile</span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-gold"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 9C50 3 150 3 198 9"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{' '}
            crafted with artistry
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
          >
            Award-winning cosmetic, implant & family dentistry in a spa-like setting.
            Experience pain-free care, digital smile design, and specialists under one roof —
            all designed around <span className="font-medium text-foreground">you</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="h-13 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <a href="#booking">
                <CalendarCheck className="mr-2 h-5 w-5" />
                Book Free Consultation
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-13 rounded-full border-border bg-card/60 px-7 text-base font-semibold backdrop-blur hover:bg-accent"
            >
              <a href="#services">
                <Play className="mr-2 h-4 w-4 text-primary" />
                Explore Services
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Pain-free promise
            </span>
            <span className="inline-flex items-center gap-2">
              <Award className="h-4 w-4 text-gold" />
              15+ years experience
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              All insurance accepted
            </span>
          </motion.div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-border/60">
            <img
              src={heroImages.primary}
              alt="Happy patient with a bright, confident smile after treatment at Lumière Dental"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>

          {/* Floating rating card */}
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute -left-3 top-10 w-44 rounded-2xl border border-border/60 bg-card/90 p-4 shadow-glow backdrop-blur-md sm:-left-6 animate-float-soft"
          >
            <div className="flex items-center gap-1 text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1.5 text-2xl font-bold tracking-tight text-foreground">4.9 / 5.0</p>
            <p className="text-xs text-muted-foreground">3,200+ verified reviews</p>
          </motion.div>

          {/* Floating appointment card */}
          <motion.div
            initial={{ opacity: 0, x: 20, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="absolute -right-3 bottom-10 w-52 rounded-2xl border border-border/60 bg-card/90 p-4 shadow-glow backdrop-blur-md sm:-right-6"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <CalendarCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Same-day</p>
                <p className="text-xs text-muted-foreground">emergency slots</p>
              </div>
            </div>
            <div className="mt-3 h-px bg-border" />
            <a
              href={`tel:${clinicInfo.emergencyPhone.replace(/[^+\d]/g, '')}`}
              className="mt-3 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              {clinicInfo.emergencyPhone}
            </a>
          </motion.div>

          {/* Decorative dot ring */}
          <div
            className="absolute -right-8 -top-8 -z-10 h-24 w-24 rounded-full border-2 border-dashed border-primary/30 animate-float-soft"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  )
}
