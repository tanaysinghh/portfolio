import { ArrowUpRight, Trophy } from 'lucide-react'
import { Placeholder } from '../components/Placeholder'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { alsoParticipated, hackathons } from '../data/hackathons'
import { isPlaceholder } from '../lib/placeholder'

function Value({ text }: { text: string }) {
  return isPlaceholder(text) ? <Placeholder>{text}</Placeholder> : <>{text}</>
}

export function Hackathons() {
  return (
    <Section
      id="hackathons"
      index="04"
      eyebrow="Hackathons"
      title="Built under a deadline."
      intro="Competitions where I took a hard problem from blank repo to working submission."
    >
      <ol className="relative space-y-8 border-l border-line pl-6 sm:pl-10 md:ml-2">
        {hackathons.map((item, i) => (
          <Reveal as="li" key={item.event} delay={i * 0.06} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-7 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-accent ring-4 ring-bg sm:-left-[calc(2.5rem+5px)]"
            />
            <article className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <h3 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">{item.event}</h3>
                <p className="shrink-0 font-mono text-sm text-muted">
                  <Value text={item.date} />
                </p>
              </div>

              <p className="mt-4 font-semibold text-fg">{item.built}</p>
              <p className="mt-2 leading-relaxed text-muted">{item.description}</p>

              <dl className="mt-6 grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
                <div>
                  <dt className="font-mono text-xs tracking-widest text-muted uppercase">Role</dt>
                  <dd className="mt-1.5 text-fg">
                    <Value text={item.role} />
                  </dd>
                </div>
                <div>
                  <dt className="font-mono text-xs tracking-widest text-muted uppercase">Outcome</dt>
                  <dd className="mt-1.5 flex items-start gap-2 font-medium text-fg">
                    {!isPlaceholder(item.outcome) && (
                      <Trophy size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    )}
                    <Value text={item.outcome} />
                  </dd>
                </div>
              </dl>

              {item.link && !isPlaceholder(item.link) && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 -ml-3 inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-fg transition-colors duration-200 hover:bg-surface-2 hover:text-accent"
                  aria-label={`${item.built} repository on GitHub (opens in a new tab)`}
                >
                  <ArrowUpRight size={18} aria-hidden="true" />
                  View repository
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </ol>

      {alsoParticipated.length > 0 && (
        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 md:ml-2">
          <h3 className="font-mono text-xs font-medium tracking-widest text-muted uppercase">
            Also participated
          </h3>
          <ul className="flex flex-wrap gap-2">
            {alsoParticipated.map((name) => (
              <li
                key={name}
                className="rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg"
              >
                {name}
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </Section>
  )
}
