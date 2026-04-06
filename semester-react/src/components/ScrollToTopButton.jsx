import { useState, useEffect } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`scroll-to-top${visible ? ' visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      <i className="iconoir-arrow-up"></i>
    </button>
  )
}
