import { Code2, Server, Database, Boxes } from 'lucide-react'

const groups = [
  {
    icon: Code2,
    title: 'Frontend',
    items: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Framer Motion', 'Radix UI'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['Node', 'FastAPI', 'GraphQL', 'REST', 'Auth', 'Stripe'],
  },
  {
    icon: Database,
    title: 'Data & Cloud',
    items: ['MongoDB', 'Postgres', 'Redis', 'Docker', 'CI/CD', 'AWS/GCP'],
  },
  {
    icon: Boxes,
    title: 'Patterns',
    items: ['Design Systems', 'Monorepos', 'Microservices', 'Testing', 'Observability'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">Skills</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 p-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                {items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
