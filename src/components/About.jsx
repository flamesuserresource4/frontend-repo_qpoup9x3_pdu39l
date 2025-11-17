export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-indigo-50/30 dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            I’m a product‑minded full‑stack developer with a focus on crafting performant, accessible interfaces and resilient backends. I enjoy shipping end‑to‑end features, leading from concept to production.
          </p>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            My toolkit includes React, TypeScript, Node/FastAPI, and cloud platforms. I care about DX, testing, CI/CD, and thoughtful design systems.
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 gap-4">
          {[
            { k: 'Experience', v: '5+ years' },
            { k: 'Projects Shipped', v: '40+' },
            { k: 'Mentorship', v: '8 mentees' },
            { k: 'Location', v: 'Remote / Worldwide' },
          ].map((stat) => (
            <li key={stat.k} className="rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 p-5">
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{stat.k}</p>
              <p className="mt-1 text-xl font-semibold text-neutral-900 dark:text-white">{stat.v}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
