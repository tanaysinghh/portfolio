import { useCallback, useState } from 'react'

export type Theme = 'dark' | 'light'

const readTheme = (): Theme =>
  document.documentElement.classList.contains('dark') ? 'dark' : 'light'

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  const toggle = useCallback(() => {
    const next: Theme = readTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', next === 'dark' ? '#0F172A' : '#F8FAFC')
    try {
      localStorage.setItem('theme', next)
    } catch {
      void 0
    }
    setTheme(next)
  }, [])

  return { theme, toggle }
}
