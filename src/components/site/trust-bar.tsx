'use client'

import { ShieldCheck } from 'lucide-react'

const insurers = [
  'Delta Dental',
  'Cigna',
  'Aetna',
  'MetLife',
  'Guardian',
  'Blue Cross',
  'UnitedHealth',
  'CareCredit',
]

export function TrustBar() {
  return (
    <section aria-label="Accepted insurance providers" className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-4 py-7 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <ShieldCheck className="h-4 w-4 text-primary" />
          In-network with major insurers &amp; flexible financing
        </p>
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-10">
            {[...insurers, ...insurers].map((name, i) => (
              <span
                key={i}
                className="font-display text-xl font-semibold tracking-tight text-foreground/45 whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
