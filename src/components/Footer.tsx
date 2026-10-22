import { ArrowUp } from 'lucide-react'
import { profile } from '../data/profile'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:px-8">
        <p>
          © {year} {profile.name}. Built with React, Tailwind CSS, and Framer Motion.
        </p>
        <a
          href="#top"
          className="-ml-3 inline-flex min-h-11 items-center gap-2 rounded-lg px-3 font-medium transition-colors duration-200 hover:text-accent sm:ml-0"
        >
          <ArrowUp size={16} aria-hidden="true" />
          Back to top
        </a>
      </div>
    </footer>
  )
}
