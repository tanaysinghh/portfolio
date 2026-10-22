import { LazyMotion, MotionConfig } from 'framer-motion'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { Hackathons } from './sections/Hackathons'
import { Hero } from './sections/Hero'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'

const loadFeatures = () => import('./lib/motionFeatures').then((mod) => mod.default)

export default function App() {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only z-50 rounded-lg bg-accent px-4 py-3 font-semibold text-accent-fg focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" tabIndex={-1} className="outline-none">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Hackathons />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
