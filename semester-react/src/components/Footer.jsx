import { useState } from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/imgs/Group70e.png'
import bgShape from '../assets/imgs/bg-shape-4.svg'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) {
      setMessage('Please enter your email.')
      return
    }
    setMessage('Thank you for subscribing!')
    setEmail('')
    setTimeout(() => setMessage(''), 3000)
  }

  return (
    <footer className="footer-area">
      <img src={bgShape} alt="Shape" className="animation-slide-right bg-shape" />
      <div className="footer-top">
        <div className="custom-container">
          <div className="row g-4 border-bottom border-secondary pb-4">
            <div className="col-12 col-sm-6 col-md-3">
              <Link to="/" className="logo d-inline-block mb-3">
                <img src={footerLogo} alt="Logo" />
              </Link>
              <p className="text-white">We provide the expertise and support to propel your business forward.</p>
              <form onSubmit={handleSubscribe} className="subscribe-form">
                <div className="subscribe-box">
                  <input
                    className="p-2 rounded-2"
                    type="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="theme-btn mt-1">Get Started</button>
                </div>
                {message && (
                  <div className="input-group alert-notification mt-1">
                    <div className="alert-msg">{message}</div>
                  </div>
                )}
              </form>
            </div>
            <div className="col-6 col-sm-3 col-md-3">
              <div className="footer-links">
                <h3>Company</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services (Clients)</Link></li>
                  <li><Link to="/services">Academy (Students)</Link></li>
                  <li><Link to="/contact">Partners</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-md-3">
              <div className="footer-links">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Service Completion Policy</a></li>
                  <li><a href="#">Refund Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-3">
              <h2 className="text-white">Lagos Office</h2>
              <p className="text-white">12, Bashiru Oweh Street, Computer Village,<br />Ikeja, Lagos, Nigeria.</p>
              <h2 className="text-white mt-4">Abuja Office</h2>
              <p className="text-white">Suite C2, Nymex Plaza, Opposite Ammasco Filling Station,<br />Gado Nasco Road, NNPC Junction, Kubwa, Abuja, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="custom-container">
          <div className="custom-row d-flex align-items-center justify-content-between flex-wrap gap-3">
            <ul className="social-links d-flex align-items-center">
              <li><a href="#"><i className="iconoir-tiktok"></i></a></li>
              <li><a href="#"><i className="iconoir-facebook"></i></a></li>
              <li><a href="#"><i className="iconoir-instagram"></i></a></li>
              <li><a href="#"><i className="iconoir-linkedin"></i></a></li>
              <li><a href="#"><i className="iconoir-youtube"></i></a></li>
            </ul>
            <p className="mb-0">&copy; 2026 Semester Technologies. Building the Future. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
