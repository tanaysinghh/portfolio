import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionProps = {
  id: string
  index: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
}

export function Section({ id, index, eyebrow, title, intro, children }: SectionProps) {
  const headingId = `${id}-heading`
  return (
    <section id={id} aria-labelledby={headingId} className="scroll-mt-16 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 font-mono text-sm text-accent">
            <span aria-hidden="true">{index} / </span>
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="text-3xl font-bold tracking-tight text-balance text-fg sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
