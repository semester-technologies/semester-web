import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/imgs/semester.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

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
    <header className="header-area">
      <div className="custom-container">
        <div className="custom-row align-items-center justify-content-between">
          <div className="header-left d-flex align-items-center">
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" />
            </Link>
            <div className="header-left-right">
              <Link to="/contact" className="theme-btn">Contact Us</Link>
              <span className="menu-bar" onClick={() => setMenuOpen(true)}>
                <i className="las la-bars"></i>
              </span>
            </div>
          </div>

          <div className="d-flex justify-content-center flex-grow-1">
            <nav className={`navbar-wrapper${menuOpen ? ' active' : ''}`}>
              <span className="close-menu-bar" onClick={() => setMenuOpen(false)}>
                <i className="las la-times"></i>
              </span>
              <ul className="d-flex gap-4 align-items-center">
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
            </nav>
          </div>

          <div className="header-right">
            <div className="header-contact-info d-flex align-items-center">
              <div className="phone-number">
                <a href="tel:+2347060928686">Call Us <i className="iconoir-arrow-up-right"></i></a>
                +2347060928686
              </div>
              <Link to="/contact" className="theme-btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
