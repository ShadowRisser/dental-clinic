'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, Phone, CalendarCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from '@/components/ui/sheet'
import { ThemeToggle } from './theme-toggle'
import { navLinks, clinicInfo } from '@/lib/site-data'
import { cn } from '@/lib/utils'

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-2.5" aria-label="Lumière Dental home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand text-primary-foreground shadow-glow transition-transform group-hover:scale-105">
        <Sparkles className="h-5 w-5" />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold ring-2 ring-background" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-semibold tracking-tight text-foreground">
          Lumière
        </span>
        <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-muted-foreground">
          Dental
        </span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-soft'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 md:h-20">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`}
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent xl:flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {clinicInfo.phone}
          </a>
          <ThemeToggle />
          <Button
            asChild
            className="hidden h-10 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] sm:flex"
          >
            <a href="#booking">
              <CalendarCheck className="mr-2 h-4 w-4" />
              Book Appointment
            </a>
          </Button>

          {/* Mobile */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-full lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm border-l border-border p-0">
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border px-6 py-5">
                  <Logo />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <div className="flex flex-col gap-1 px-4 py-6">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </div>
                <div className="mt-auto space-y-3 border-t border-border px-6 py-6">
                  <a
                    href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`}
                    className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
                  >
                    <Phone className="h-4 w-4 text-primary" />
                    {clinicInfo.phone}
                  </a>
                  <SheetClose asChild>
                    <Button asChild className="h-12 w-full rounded-full bg-primary text-primary-foreground shadow-glow">
                      <a href="#booking">
                        <CalendarCheck className="mr-2 h-4 w-4" />
                        Book Appointment
                      </a>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
