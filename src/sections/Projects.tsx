import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '../components/BrandIcons'
import { Placeholder } from '../components/Placeholder'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { projects } from '../data/projects'
import { isPlaceholder } from '../lib/placeholder'

const linkClass =
  'inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-fg transition-colors duration-200 hover:bg-surface-2 hover:text-accent'

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      eyebrow="Projects"
      title="Things I've built and shipped."
      intro="Full-stack systems with real deployments, tests, and documentation behind them."
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={project.title}
            delay={(i % 2) * 0.06}
            className="group flex flex-col rounded-2xl border border-line bg-surface p-6 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent/60 motion-reduce:hover:translate-y-0 sm:p-8"
          >
            <article className="flex h-full flex-col" aria-labelledby={`project-${i}`}>
              <h3 id={`project-${i}`} className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
                {project.title}
              </h3>
              {project.highlight && (
                <p className="mt-2 font-mono text-xs text-accent sm:text-sm">{project.highlight}</p>
              )}
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

              <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                {isPlaceholder(project.github) ? (
                  <Placeholder>TODO: GitHub link</Placeholder>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkClass} -ml-3`}
                    aria-label={`${project.title} source code on GitHub (opens in a new tab)`}
                  >
                    <GithubIcon size={18} />
                    Code
                  </a>
                )}
                {isPlaceholder(project.live) ? (
                  <Placeholder>TODO: live link</Placeholder>
                ) : (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                    aria-label={`${project.title} live demo (opens in a new tab)`}
                  >
                    <ArrowUpRight size={18} aria-hidden="true" />
                    Live demo
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
