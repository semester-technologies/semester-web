import { useEffect, useRef } from 'react'
import client1 from '../assets/imgs/client-logo1.svg'
import client2 from '../assets/imgs/client-logo2.svg'
import client3 from '../assets/imgs/client-logo3.svg'
import client4 from '../assets/imgs/client-logo4.svg'
import client5 from '../assets/imgs/client-logo5.svg'

const logos = [client1, client2, client3, client4, client5, client2, client3, client4, client5, client2]

export default function ClientMarquee() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId
    let offset = 0
    const speed = 0.5

    const animate = () => {
      offset -= speed
      const children = container.children
      if (children.length > 0) {
        const firstChild = children[0]
        const width = firstChild.offsetWidth + 20
        if (Math.abs(offset) >= width) {
          offset += width
          container.appendChild(firstChild)
        }
      }
      container.style.transform = `translateX(${offset}px)`
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section className="client-area">
      <div
        ref={containerRef}
        className="clients clients-marquee d-flex align-items-center"
        style={{ touchAction: 'pan-y', cursor: 'grab', userSelect: 'none' }}
      >
        {logos.map((logo, i) => (
          <div className="client-logo simple-shadow" key={i}>
            <img src={logo} alt="Client" />
          </div>
        ))}
      </div>
    </section>
  )
}
