'use client'

import { HelpCircle, MessageCircleQuestion } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { faqs, clinicInfo } from '@/lib/site-data'

export function FaqSection() {
  return (
    <section id="faq" className="relative scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gradient-brand">answered</span>
            </>
          }
          description="Everything you need to know before your visit. Still curious? Our team is one call away."
        />

        <Reveal className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl border border-border/70 bg-card px-5 shadow-soft data-[state=open]:border-primary/40 data-[state=open]:shadow-glow"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  <span className="flex items-center gap-3 pr-4">
                    <HelpCircle className="h-5 w-5 shrink-0 text-primary" />
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pt-0 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                  <span className="pl-8">{faq.a}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-6 text-center sm:flex-row sm:gap-6">
          <MessageCircleQuestion className="h-8 w-8 text-primary" />
          <div className="flex-1">
            <p className="font-display text-lg font-semibold text-foreground">
              Still have questions?
            </p>
            <p className="text-sm text-muted-foreground">
              Chat with our AI assistant or call us — we're happy to help.
            </p>
          </div>
          <a
            href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Call {clinicInfo.phone}
          </a>
        </Reveal>
      </div>
    </section>
  )
}
