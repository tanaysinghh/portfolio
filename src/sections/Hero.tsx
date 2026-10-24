import { ArrowRight, Download, Mail } from 'lucide-react'
import profile192 from '../assets/images/profile-192.webp'
import profile256 from '../assets/images/profile-256.webp'
import profile512 from '../assets/images/profile-512.webp'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { ButtonLink } from '../components/Button'
import { profile } from '../data/profile'

const socialClass =
  'inline-flex size-11 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-accent hover:text-accent'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100dvh-4rem)] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(var(--line-strong)_1px,transparent_1px)] [background-size:28px_28px] opacity-50 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,#000_20%,transparent_75%)]"
      />
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted sm:text-sm">
          <span className="relative flex size-2" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </p>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
          <img
            src={profile512}
            srcSet={`${profile192} 192w, ${profile256} 256w, ${profile512} 512w`}
            sizes="(min-width: 1024px) 176px, (min-width: 768px) 160px, (min-width: 640px) 128px, 96px"
            width={512}
            height={512}
            loading="eager"
            alt={profile.name}
            className="size-24 shrink-0 rounded-full object-cover ring-2 ring-accent ring-offset-4 ring-offset-bg sm:order-last sm:size-32 md:size-40 lg:size-44"
          />
          <div>
            <h1
              id="hero-heading"
              className="text-[clamp(3rem,11vw,7.5rem)] leading-[0.95] font-extrabold tracking-[-0.045em] text-fg"
            >
              {profile.name}
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-6 font-mono text-sm font-medium text-fg sm:text-base md:text-lg">
              {profile.title}
            </p>
          </div>
        </div>

        <div>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#projects" icon={<ArrowRight size={18} aria-hidden="true" />}>
              View Projects
            </ButtonLink>
            <ButtonLink
              href="#contact"
              variant="secondary"
              icon={<Mail size={18} aria-hidden="true" />}
            >
              Contact Me
            </ButtonLink>
            <ButtonLink
              href={profile.resumeUrl}
              variant="ghost"
              download="Tanay-Singh-Resume.pdf"
              icon={<Download size={18} aria-hidden="true" />}
            >
              Download Resume
            </ButtonLink>
          </div>

          <ul className="mt-10 flex items-center gap-3" aria-label="Social profiles">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className={socialClass}
              >
                <GithubIcon />
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                className={socialClass}
              >
                <LinkedinIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
