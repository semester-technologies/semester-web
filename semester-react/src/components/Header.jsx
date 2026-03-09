import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/imgs/semester.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/about', label: 'About Us' },
    { to: '/career', label: 'Career' },
    { to: '/register', label: 'Register' },
    { to: '/login', label: 'Login' },
  ]

  return (
    <header className="header-area sem-header">
      <div className="custom-container">
        <div className="sem-header-inner">
          <Link to="/" className="sem-logo">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Desktop nav */}
          <nav className="sem-nav-desktop">
            <ul>
              {navLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={isActive(link.to) ? 'active' : ''}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sem-header-actions">
            <Link to="/contact" className="theme-btn sem-contact-btn">Contact Us</Link>
            <button
              className="sem-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav — full dropdown below header */}
      <div className={`sem-mobile-nav${menuOpen ? ' open' : ''}`}>
        <nav>
          <ul>
            {navLinks.map(link => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={isActive(link.to) ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="theme-btn sem-mobile-cta" onClick={() => setMenuOpen(false)}>
            Contact Us <i className="iconoir-arrow-up-right"></i>
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="sem-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
