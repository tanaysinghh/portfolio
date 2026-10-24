import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { skills } from '../data/skills'

export function Skills() {
  return (
    <Section id="skills" index="02" eyebrow="Skills" title="The tools I reach for.">
      <Reveal>
        <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-12 sm:gap-y-12">
          {skills.map((skill) => (
            <li key={skill.name}>
              <span
                role="img"
                aria-label={skill.name}
                className="block size-16 text-fg transition-transform duration-200 ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 sm:size-20 [&>svg]:size-full"
                dangerouslySetInnerHTML={{ __html: skill.icon }}
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
