import { Mail, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { ButtonLink, buttonBase } from '../components/Button'
import { Placeholder } from '../components/Placeholder'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'
import { profile } from '../data/profile'
import { isPlaceholder, mailto } from '../lib/placeholder'

type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>

const validate = (values: Record<Field, string>): Errors => {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) errors.email = 'Please enter your email so I can reply.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'That email looks incomplete. Check for a typo, e.g. name@example.com.'
  if (values.message.trim().length < 10)
    errors.message = 'Please write a short message (at least 10 characters).'
  return errors
}

const inputClass =
  'mt-2 block w-full rounded-lg border bg-bg px-4 py-3 text-base text-fg placeholder:text-muted/70 transition-colors duration-200 focus:border-accent focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring'

export function Contact() {
  const [values, setValues] = useState<Record<Field, string>>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({})
  const [status, setStatus] = useState('')

  const update = (field: Field, value: string) => {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched[field]) setErrors(validate(next))
  }

  const blur = (field: Field) => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = validate(values)
    setErrors(result)
    setTouched({ name: true, email: true, message: true })
    const firstInvalid = (['name', 'email', 'message'] as Field[]).find((f) => result[f])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      setStatus('')
      return
    }
    const body = `${values.message}\n\n${values.name}\n${values.email}`
    window.location.href = mailto(profile.email, `Portfolio inquiry from ${values.name}`, body)
    setStatus('Opening your email app with the message filled in. If nothing happens, email me directly using the button on the left.')
  }

  const fieldError = (field: Field) => (touched[field] ? errors[field] : undefined)

  const borderFor = (field: Field) => (fieldError(field) ? 'border-red-500' : 'border-line-strong')

  return (
    <Section id="contact" index="05" eyebrow="Connect" title="Let's build something together.">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-muted">{profile.contactLine}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {isPlaceholder(profile.email) ? (
              <Placeholder className="min-h-11 px-4 text-sm">TODO: email address</Placeholder>
            ) : (
              <ButtonLink href={mailto(profile.email)} icon={<Mail size={18} aria-hidden="true" />}>
                {profile.email}
              </ButtonLink>
            )}
            <ButtonLink
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              icon={<GithubIcon size={18} />}
            >
              GitHub
            </ButtonLink>
            {isPlaceholder(profile.linkedin) ? (
              <Placeholder className="min-h-11 px-4 text-sm">TODO: LinkedIn URL</Placeholder>
            ) : (
              <ButtonLink
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                icon={<LinkedinIcon size={18} />}
              >
                LinkedIn
              </ButtonLink>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            noValidate
            onSubmit={submit}
            aria-describedby="contact-form-note"
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
          >
            <p id="contact-form-note" className="mb-6 text-sm text-muted">
              Sending opens your email app with the message prefilled. Nothing is stored on this site.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="text-sm font-medium text-fg">
                  Name <span className="text-muted" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={values.name}
                  onChange={(e) => update('name', e.target.value)}
                  onBlur={() => blur('name')}
                  aria-invalid={Boolean(fieldError('name'))}
                  aria-describedby={fieldError('name') ? 'contact-name-error' : undefined}
                  className={`${inputClass} ${borderFor('name')}`}
                />
                {fieldError('name') && (
                  <p id="contact-name-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {fieldError('name')}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="text-sm font-medium text-fg">
                  Email <span className="text-muted" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={values.email}
                  onChange={(e) => update('email', e.target.value)}
                  onBlur={() => blur('email')}
                  aria-invalid={Boolean(fieldError('email'))}
                  aria-describedby={fieldError('email') ? 'contact-email-error' : undefined}
                  className={`${inputClass} ${borderFor('email')}`}
                />
                {fieldError('email') && (
                  <p id="contact-email-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                    {fieldError('email')}
                  </p>
                )}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="text-sm font-medium text-fg">
                Message <span className="text-muted" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={values.message}
                onChange={(e) => update('message', e.target.value)}
                onBlur={() => blur('message')}
                aria-invalid={Boolean(fieldError('message'))}
                aria-describedby={fieldError('message') ? 'contact-message-error' : undefined}
                className={`${inputClass} ${borderFor('message')} resize-y`}
              />
              {fieldError('message') && (
                <p id="contact-message-error" role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                  {fieldError('message')}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`${buttonBase} mt-6 w-full bg-accent text-accent-fg hover:brightness-110 sm:w-auto`}
            >
              <Send size={18} aria-hidden="true" />
              Send message
            </button>
            <p aria-live="polite" className="mt-4 min-h-5 text-sm text-muted">
              {status}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
