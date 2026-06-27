'use client'

import * as React from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { stats } from '@/lib/site-data'

function AnimatedValue({ value }: { value: string }) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  // Parse numeric part and suffix
  const match = value.match(/([\d.]+)(.*)/)
  const target = match ? parseFloat(match[1]) : 0
  const suffix = match ? match[2] : ''
  const hasDecimal = match ? match[1].includes('.') : false

  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    hasDecimal ? latest.toFixed(1) : Math.round(latest).toString()
  )

  React.useEffect(() => {
    if (!inView) return
    const controls = animate(count, target, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    })
    return () => controls.stop()
  }, [inView, target, count])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center gap-1 rounded-2xl border border-border/60 bg-card/60 p-5 text-center shadow-soft backdrop-blur-sm md:p-7"
            >
              <span className="font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                <span className="text-gradient-brand">
                  <AnimatedValue value={stat.value} />
                </span>
              </span>
              <span className="mt-1 text-sm font-semibold text-foreground md:text-base">
                {stat.label}
              </span>
              <span className="text-xs text-muted-foreground">{stat.sublabel}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
