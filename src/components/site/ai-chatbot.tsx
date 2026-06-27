'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, Send, Loader2, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

type Message = { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  'Do you offer payment plans?',
  'How much do veneers cost?',
  'I have dental anxiety — can you help?',
  'What insurance do you accept?',
]

const WELCOME: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Lumi, your Lumière Dental assistant. I can help with services, pricing, the team, or booking a visit. How can I help your smile today?",
}

export function AiChatbot() {
  const [open, setOpen] = React.useState(false)
  const [messages, setMessages] = React.useState<Message[]>([WELCOME])
  const [input, setInput] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [unread, setUnread] = React.useState(true)
  const scrollRef = React.useRef<HTMLDivElement>(null)
  const sessionId = React.useMemo(
    () => `web-${Math.random().toString(36).slice(2, 10)}`,
    []
  )

  React.useEffect(() => {
    if (open) {
      setUnread(false)
      // scroll to bottom on open/new message
      requestAnimationFrame(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
      })
    }
  }, [open, messages, loading])

  async function send(text: string) {
    const trimmed = text.trim()
    if (!trimmed || loading) return
    const next: Message[] = [...messages, { role: 'user', content: trimmed }]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, sessionId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data?.error || 'Failed')
      setMessages((m) => [...m, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          role: 'assistant',
          content:
            "I'm having trouble connecting right now. Please call us at +1 (415) 555-0192 and our team will help you right away.",
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close assistant' : 'Open AI dental assistant'}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-brand text-primary-foreground shadow-glow transition-transform hover:scale-105 sm:bottom-6 sm:right-6"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>
        {!open && unread ? (
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-4 w-4 rounded-full bg-gold ring-2 ring-background" />
          </span>
        ) : null}
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-3 z-50 flex h-[min(560px,75vh)] w-[min(380px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-3xl border border-border/70 bg-card shadow-glow sm:right-6"
          >
            {/* Header */}
            <div className="relative flex items-center gap-3 overflow-hidden bg-gradient-to-br from-primary to-brand p-4 text-primary-foreground">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/25 blur-2xl" aria-hidden />
              <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/15 ring-1 ring-primary-foreground/25">
                <Sparkles className="h-5 w-5" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-400 ring-2 ring-primary" />
              </span>
              <div className="relative flex-1">
                <p className="font-display text-base font-semibold leading-tight">Lumi · AI Assistant</p>
                <p className="text-xs text-primary-foreground/80">Online · typically replies instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="relative flex h-8 w-8 items-center justify-center rounded-full text-primary-foreground/80 transition-colors hover:bg-primary-foreground/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="scroll-elegant flex-1 space-y-3 overflow-y-auto bg-secondary/30 p-4"
            >
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                  <div
                    className={cn(
                      'max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-soft',
                      m.role === 'user'
                        ? 'rounded-br-md bg-primary text-primary-foreground'
                        : 'rounded-bl-md bg-card text-foreground'
                    )}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {loading ? (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1 rounded-2xl rounded-bl-md bg-card px-4 py-3 shadow-soft">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="h-2 w-2 rounded-full bg-primary/60"
                        style={{ animation: `pulse 1.2s ${i * 0.18}s ease-in-out infinite` }}
                      />
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Suggestions (only at start) */}
              {messages.length <= 1 && !loading ? (
                <div className="flex flex-col gap-1.5 pt-1">
                  <p className="px-1 text-xs font-medium text-muted-foreground">Quick questions:</p>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-xl border border-border/70 bg-card px-3 py-2 text-left text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                send(input)
              }}
              className="flex items-center gap-2 border-t border-border/70 bg-card p-3"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Lumi anything…"
                className="h-11 flex-1 rounded-full bg-secondary"
                disabled={loading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={loading || !input.trim()}
                className="h-11 w-11 shrink-0 rounded-full bg-primary text-primary-foreground shadow-glow"
                aria-label="Send message"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </Button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
