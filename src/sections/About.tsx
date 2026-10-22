import { CalendarCheck, GraduationCap, MapPin, Star } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { profile } from '../data/profile'

const factIcons = [GraduationCap, Star, CalendarCheck, MapPin]

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="Engineer first, student for one more year.">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal className="space-y-6">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <h3 className="mb-6 font-mono text-xs font-medium tracking-widest text-muted uppercase">
              Quick facts
            </h3>
            <dl className="space-y-5">
              {profile.facts.map((fact, i) => {
                const Icon = factIcons[i % factIcons.length]
                return (
                  <div key={fact.label} className="relative min-h-10 pl-13">
                    <dt className="text-sm text-muted">
                      <span className="absolute top-0.5 left-0 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      {fact.label}
                    </dt>
                    <dd className="font-semibold text-fg">{fact.value}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
