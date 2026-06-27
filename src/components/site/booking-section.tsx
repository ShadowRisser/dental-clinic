'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { format } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  MapPin,
  Loader2,
  Calendar as CalendarIcon,
  ShieldCheck,
  HeartPulse,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { services, doctors, timeSlots, clinicInfo } from '@/lib/site-data'
import { toast } from 'sonner'

const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email address'),
  phone: z.string().min(7, 'Enter a valid phone number'),
  service: z.string().min(1, 'Please choose a service'),
  doctor: z.string().optional(),
  date: z.date({ required_error: 'Please pick a date' }),
  time: z.string().min(1, 'Please choose a time'),
  notes: z.string().max(500).optional(),
})

type BookingValues = z.infer<typeof bookingSchema>

const benefits = [
  { icon: ShieldCheck, title: 'Pain-free care', text: 'Gentle, sedation options for total comfort.' },
  { icon: Clock, title: 'On-time visits', text: 'We respect your schedule — no long waits.' },
  { icon: HeartPulse, title: 'Free first consult', text: 'Meet your doctor, see your options, zero pressure.' },
]

export function BookingSection() {
  const [submitted, setSubmitted] = React.useState<BookingValues | null>(null)
  const [submitting, setSubmitting] = React.useState(false)

  const form = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { name: '', email: '', phone: '', notes: '' },
  })

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = form

  const selectedDate = watch('date')
  const selectedService = watch('service')
  const selectedDoctor = watch('doctor')
  const selectedTime = watch('time')

  const onSubmit = async (values: BookingValues) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          date: format(values.date, 'yyyy-MM-dd'),
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Something went wrong')
      setSubmitted(values)
      toast.success('Appointment requested!', {
        description: `We'll confirm your ${values.service} visit by email shortly.`,
      })
      reset()
    } catch (err) {
      toast.error('Could not submit request', {
        description: err instanceof Error ? err.message : 'Please try again or call us.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  const handleNewBooking = () => {
    setSubmitted(null)
  }

  return (
    <section id="booking" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" aria-hidden />
      <div className="absolute -left-20 top-1/3 -z-10 h-80 w-80 rounded-full bg-primary/15 blur-3xl" aria-hidden />
      <div className="absolute -right-20 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* Left: info */}
          <div className="flex flex-col gap-7">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Book Your Visit
              </span>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-[2.85rem] text-balance">
                Your brighter smile starts <span className="text-gradient-brand">here</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Reserve your appointment in under a minute. New patients receive a complimentary
                consultation and 3D smile assessment.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((b) => {
                const Icon = b.icon
                return (
                  <div key={b.title} className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{b.title}</p>
                      <p className="text-sm text-muted-foreground">{b.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-2 rounded-2xl border border-border/70 bg-card p-5 shadow-soft">
              <p className="text-sm font-semibold text-foreground">Prefer to talk?</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Our front desk team is ready to help, 7 days a week.
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 font-medium text-primary hover:underline">
                  <Phone className="h-4 w-4" /> {clinicInfo.phone}
                </a>
                <a href={`mailto:${clinicInfo.email}`} className="flex items-center gap-2 font-medium text-primary hover:underline">
                  <Mail className="h-4 w-4" /> {clinicInfo.email}
                </a>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" /> {clinicInfo.address}
                </span>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="relative rounded-3xl border border-border/70 bg-card p-6 shadow-glow sm:p-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary"
                  >
                    <CheckCircle2 className="h-12 w-12" />
                  </motion.span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground">
                      Request received, {submitted.name.split(' ')[0]}!
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground text-pretty">
                      We've received your <span className="font-semibold text-foreground">{submitted.service}</span> request
                      for <span className="font-semibold text-foreground">{format(submitted.date, 'EEEE, MMM d')}</span> at{' '}
                      <span className="font-semibold text-foreground">{submitted.time}</span>. A confirmation email is on its way to{' '}
                      <span className="font-semibold text-foreground">{submitted.email}</span>.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <Button
                      onClick={handleNewBooking}
                      variant="outline"
                      className="rounded-full"
                    >
                      Book another visit
                    </Button>
                    <Button asChild className="rounded-full bg-primary text-primary-foreground shadow-glow">
                      <a href="#services">Explore more services</a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4"
                  noValidate
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Full name *</Label>
                      <Input
                        id="name"
                        placeholder="Jane Doe"
                        className="h-11 rounded-xl"
                        aria-invalid={!!errors.name}
                        {...register('name')}
                      />
                      {errors.name ? (
                        <p className="text-xs text-destructive">{errors.name.message}</p>
                      ) : null}
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        placeholder="(415) 555-0192"
                        className="h-11 rounded-xl"
                        aria-invalid={!!errors.phone}
                        {...register('phone')}
                      />
                      {errors.phone ? (
                        <p className="text-xs text-destructive">{errors.phone.message}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@email.com"
                      className="h-11 rounded-xl"
                      aria-invalid={!!errors.email}
                      {...register('email')}
                    />
                    {errors.email ? (
                      <p className="text-xs text-destructive">{errors.email.message}</p>
                    ) : null}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label>Service *</Label>
                      <Select
                        value={selectedService}
                        onValueChange={(v) => setValue('service', v, { shouldValidate: true })}
                      >
                        <SelectTrigger className={cn('h-11 rounded-xl', errors.service && 'border-destructive')}>
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.title}>
                              {s.title} · from {s.priceFrom}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.service ? (
                        <p className="text-xs text-destructive">{errors.service.message}</p>
                      ) : null}
                    </div>
                    <div className="space-y-1.5">
                      <Label>Preferred doctor</Label>
                      <Select
                        value={selectedDoctor}
                        onValueChange={(v) => setValue('doctor', v)}
                      >
                        <SelectTrigger className="h-11 rounded-xl">
                          <SelectValue placeholder="No preference" />
                        </SelectTrigger>
                        <SelectContent>
                          {doctors.map((d) => (
                            <SelectItem key={d.id} value={d.name}>
                              {d.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label>Preferred date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            type="button"
                            variant="outline"
                            className={cn(
                              'h-11 justify-start rounded-xl text-left font-normal',
                              !selectedDate && 'text-muted-foreground',
                              errors.date && 'border-destructive'
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                            {selectedDate ? format(selectedDate, 'EEE, MMM d, yyyy') : 'Pick a date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(d) => d && setValue('date', d, { shouldValidate: true })}
                            disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.date ? (
                        <p className="text-xs text-destructive">{errors.date.message}</p>
                      ) : null}
                    </div>
                    <div className="space-y-1.5">
                      <Label>Preferred time *</Label>
                      <Select
                        value={selectedTime}
                        onValueChange={(v) => setValue('time', v, { shouldValidate: true })}
                      >
                        <SelectTrigger className={cn('h-11 rounded-xl', errors.time && 'border-destructive')}>
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent className="max-h-72">
                          {timeSlots.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.time ? (
                        <p className="text-xs text-destructive">{errors.time.message}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="notes">Notes (optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Tell us about your smile goals, dental history, or any anxiety we should know about…"
                      className="min-h-[88px] rounded-xl resize-none"
                      {...register('notes')}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 h-12 rounded-full bg-primary text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        <CalendarCheck className="mr-2 h-5 w-5" />
                        Request Appointment
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to our friendly reminder policy. We'll never share your info.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
