import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Chat Platform',
    description: 'Websocket powered messaging with rooms, presence, and file sharing. React + FastAPI + MongoDB.',
    tags: ['React', 'FastAPI', 'MongoDB', 'WebSockets'],
    link: '#',
    repo: '#',
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'Multi-tenant dashboard with role-based access, Stripe billing, and charts.',
    tags: ['Next.js', 'Node', 'Postgres', 'Stripe'],
    link: '#',
    repo: '#',
  },
  {
    title: 'AI Image Studio',
    description: 'Image transforms and generation with background removal and fine-tuning workflows.',
    tags: ['React', 'Python', 'Workers', 'OpenAI'],
    link: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Featured Projects</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">A snapshot of things I’ve built recently.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-indigo-500/[0.06] group-hover:via-blue-500/[0.06] group-hover:to-purple-500/[0.06] transition pointer-events-none" />
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-neutral-700">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.link} className="inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-1 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                  <Github size={16} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
