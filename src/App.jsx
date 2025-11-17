import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="py-10 border-t border-neutral-200/70 dark:border-neutral-800 text-center text-sm text-neutral-600 dark:text-neutral-400">
        © {new Date().getFullYear()} Full‑Stack Developer — Crafted with React & love.
      </footer>
    </div>
  )
}

export default App
