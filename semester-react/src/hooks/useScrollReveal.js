import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => {
      let reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')

      if (reveals.length === 0) {
        const sections = document.querySelectorAll(
          '.section-header, .service-card, .feature2-card, .project-card, ' +
          '.how-we-do-card, .testimonial-item-body, .hero-company-box, ' +
          '.arch-card, .pillar-card, .case-card, .stat-card, .bundle-card, ' +
          '.tech-card, .career-box, .contact-info-box, .quiz-box, ' +
          '.tri-cta-card, .logo-tile, .workflow-step, .svc-item, ' +
          '.faq-item, .story-loop'
        )
        sections.forEach(el => el.classList.add('reveal'))
        reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      }

      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
              }
            })
          },
          { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        )
        reveals.forEach(el => observer.observe(el))
        return () => observer.disconnect()
      } else {
        reveals.forEach(el => el.classList.add('visible'))
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])
}
