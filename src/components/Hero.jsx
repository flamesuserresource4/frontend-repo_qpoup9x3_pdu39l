import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-24 overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="absolute inset-0">
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-purple-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-purple-500/10 via-fuchsia-500/10 to-indigo-500/10 blur-3xl pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for freelance work
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-neutral-900 dark:text-white">
            Building delightful web apps from front to back.
          </h1>
          <p className="mt-5 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
            I’m a full‑stack developer specializing in modern React, Node, and cloud‑native backends. I craft polished user experiences with robust, scalable APIs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3 text-sm font-semibold shadow-sm hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-transparent border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white px-5 py-3 text-sm font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">Get in Touch</a>
          </div>
          <div className="mt-8 flex items-center gap-4 text-neutral-500 dark:text-neutral-400 text-sm">
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Node</span>
            <span>•</span>
            <span>FastAPI</span>
            <span>•</span>
            <span>MongoDB</span>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20 dark:border-neutral-800 shadow-[0_10px_50px_-15px_rgba(79,70,229,.35)] bg-white/30 dark:bg-neutral-900/40 backdrop-blur">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
