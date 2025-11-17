import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-white/70 dark:bg-neutral-900/60 border-b border-white/20 dark:border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-neutral-900 dark:text-white text-lg">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Full‑Stack Dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
            <div className="flex items-center gap-4">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"><Linkedin size={18} /></a>
              <a aria-label="Email" href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"><Mail size={18} /></a>
            </div>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200/70 dark:border-neutral-800">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white">
                {item.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-4">
              <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"><Github size={18} /></a>
              <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"><Linkedin size={18} /></a>
              <a aria-label="Email" href="#contact" className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
