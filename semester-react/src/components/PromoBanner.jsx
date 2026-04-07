import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const promos = [
  {
    id: 'cohort-may',
    badge: 'Next Cohort',
    highlight: 'May 12, 2026',
    text: '— 8 seats remaining per class.',
    linkText: 'Enroll Now',
    linkTo: '/register',
  },
  {
    id: 'free-consult',
    badge: 'Free',
    highlight: '30-Min Strategy Session',
    text: '— Not sure where to start?',
    linkText: 'Book Now',
    linkTo: '/contact?service=free-consultation',
  },
  {
    id: 'legal-bundle',
    badge: 'From ₦80,000',
    highlight: 'Legal Launchpad Bundle',
    text: '— CAC, TIN & legal docs handled.',
    linkText: 'Get Started',
    linkTo: '/contact?service=launchpad',
  },
]

export default function PromoBanner() {
  const [dismissed, setDismissed] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (sessionStorage.getItem('promo-dismissed')) setDismissed(true)
  }, [])

  useEffect(() => {
    if (promos.length <= 1 || dismissed) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % promos.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    sessionStorage.setItem('promo-dismissed', 'true')
  }

  if (dismissed || promos.length === 0) return null

  const promo = promos[activeIndex]

  return (
    <div className="site-promo-bar">
      <div className="site-promo-inner">
        {promos.length > 1 && (
          <button
            className="site-promo-nav"
            onClick={() => setActiveIndex((prev) => (prev - 1 + promos.length) % promos.length)}
            aria-label="Previous"
          >&#8249;</button>
        )}

        <div className="site-promo-content">
          <span className="site-promo-badge">{promo.badge}</span>
          <strong className="site-promo-highlight">{promo.highlight}</strong>
          <span className="site-promo-text">{promo.text}</span>
          <Link to={promo.linkTo} className="site-promo-cta">
            {promo.linkText} →
          </Link>
        </div>

        {promos.length > 1 && (
          <button
            className="site-promo-nav"
            onClick={() => setActiveIndex((prev) => (prev + 1) % promos.length)}
            aria-label="Next"
          >&#8250;</button>
        )}

        <button className="site-promo-close" onClick={handleDismiss} aria-label="Dismiss">&times;</button>
      </div>

      {promos.length > 1 && (
        <div className="site-promo-dots">
          {promos.map((_, i) => (
            <button
              key={i}
              className={`site-promo-dot${i === activeIndex ? ' active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Promo ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
