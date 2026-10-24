import { useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useRef } from 'react'
import { GithubIcon } from '../components/BrandIcons'
import { ButtonLink } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { projects, type Project } from '../data/projects'

function BrowserFrame({ project }: { project: Project }) {
  const { screenshot } = project
  const ref = useRef<HTMLDivElement>(null)
  const near = useInView(ref, { once: true, margin: '400px 0px' })
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-xl shadow-black/5 dark:shadow-black/40">
      <div className="flex h-9 items-center gap-2 border-b border-line bg-surface-2 px-4" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        <span className="size-2.5 rounded-full bg-line-strong" />
        {project.live && (
          <span className="ml-3 min-w-0 truncate rounded-md bg-bg px-3 py-0.5 font-mono text-xs text-muted">
            {new URL(project.live).host}
          </span>
        )}
      </div>
      <div ref={ref} style={{ aspectRatio: `${screenshot.width} / ${screenshot.height}` }}>
        {near && (
          <img
            src={screenshot.src}
            srcSet={screenshot.srcSet}
            sizes="(min-width: 1024px) 620px, calc(100vw - 2.5rem)"
            width={screenshot.width}
            height={screenshot.height}
            loading="lazy"
            decoding="async"
            alt={`Screenshot of ${project.title}`}
            className="block h-auto w-full"
          />
        )}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Things I've built and shipped."
      intro="Full-stack systems with real deployments, tests, and documentation behind them."
    >
      <ol className="space-y-20 md:space-y-28">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-14"
          >
            <article aria-labelledby={`project-${i}`}>
              <p className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</p>
              <h3
                id={`project-${i}`}
                className="mt-3 text-2xl font-bold tracking-tight text-fg sm:text-3xl"
              >
                {project.title}
              </h3>
              <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                {project.tech.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={<GithubIcon size={18} />}
                  aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                >
                  GitHub
                </ButtonLink>
                {project.live && (
                  <ButtonLink
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ArrowUpRight size={18} aria-hidden="true" />}
                    aria-label={`${project.title} live site (opens in a new tab)`}
                  >
                    Live
                  </ButtonLink>
                )}
              </div>
            </article>

            <div className="order-first lg:order-none">
              <BrowserFrame project={project} />
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}
