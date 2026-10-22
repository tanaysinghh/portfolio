import { AnimatePresence, m } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { ThemeToggle } from './ThemeToggle'

const sectionIds = ['top', ...navLinks.map((link) => link.id)]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const media = window.matchMedia('(min-width: 768px)')
    const onResize = () => media.matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    media.addEventListener('change', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      media.removeEventListener('change', onResize)
    }
  }, [open])

  const linkClass = (id: string) =>
    `relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      active === id ? 'text-fg' : 'text-muted hover:text-fg'
    }`

  return (
    <header
      className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-200 ${
        scrolled || open ? 'border-line bg-bg/85' : 'border-transparent bg-bg/0'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-mono text-base font-semibold tracking-tight text-fg"
          aria-label={`${profile.name}, back to top`}
        >
          {profile.shortName}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={linkClass(link.id)}
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                  {active === link.id && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="border-t border-line md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className={`flex min-h-12 items-center rounded-md px-3 text-base font-medium transition-colors duration-200 ${
                      active === link.id ? 'text-accent' : 'text-fg hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
