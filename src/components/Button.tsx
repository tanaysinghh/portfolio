import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant
  icon?: ReactNode
}

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-accent-fg hover:brightness-110 active:brightness-95 shadow-sm shadow-accent/20',
  secondary:
    'border border-line-strong bg-surface text-fg hover:border-accent hover:text-accent',
  ghost: 'text-fg hover:bg-surface-2 hover:text-accent',
}

export const buttonBase =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold transition-[color,background-color,border-color,filter,transform] duration-200 ease-out active:scale-[0.98] motion-reduce:active:scale-100'

export function ButtonLink({
  variant = 'primary',
  icon,
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${buttonBase} ${variants[variant]} ${className}`} {...props}>
      {icon}
      {children}
    </a>
  )
}
