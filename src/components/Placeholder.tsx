type PlaceholderProps = {
  children: string
  className?: string
}

export function Placeholder({ children, className = '' }: PlaceholderProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-dashed border-todo/60 px-2 py-0.5 font-mono text-xs text-todo ${className}`}
    >
      {children}
    </span>
  )
}
