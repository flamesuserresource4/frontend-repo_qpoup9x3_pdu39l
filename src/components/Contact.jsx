import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    await new Promise(r => setTimeout(r, 700))
    setStatus('Thanks! I will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/30 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s build something great</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Tell me about your project and I’ll reach out.</p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4 max-w-2xl">
          <input required placeholder="Name" className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          <input required type="email" placeholder="Email" className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          <textarea required placeholder="Project details" rows={6} className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/70 dark:bg-neutral-900/60 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50" />
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-semibold hover:bg-indigo-700 transition">
              <Send size={18} /> Send Message
            </button>
            <span className="text-sm text-neutral-600 dark:text-neutral-300">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
