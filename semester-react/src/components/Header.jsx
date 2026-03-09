import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imgs/semester.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

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
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
                <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                <li><Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link></li>
                <li><Link to="/register" onClick={() => setMenuOpen(false)}>Register</Link></li>
                <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
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
