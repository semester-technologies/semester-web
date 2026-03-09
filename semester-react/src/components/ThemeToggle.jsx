import { useCallback } from 'react'

const STORAGE_KEY = 'sem-theme'

export default function ThemeToggle() {
  const toggle = useCallback(() => {
    const current = document.documentElement.getAttribute('data-theme')
    const next = current === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  return (
    <button className="theme-toggle" aria-label="Toggle light/dark theme" onClick={toggle}>
      <span className="icon-sun">{'\u2600\uFE0F'}</span>
      <span className="icon-moon">{'\uD83C\uDF19'}</span>
    </button>
  )
}
