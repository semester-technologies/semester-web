import { useState } from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/imgs/Group70e.png'
import bgShape from '../assets/imgs/bg-shape-4.svg'

// WEB3FORMS_KEY: Replace with your actual Web3Forms access key
const WEB3FORMS_KEY = '5fb7c79b-607f-4f9f-91c9-d75fb3a87119'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email) {
      setMessage('Please enter your email.')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Newsletter Subscriber — SemesterTech.ng',
          from_name: 'SemesterTech Newsletter',
          email,
          message: 'Newsletter subscription request',
          source: 'Footer Newsletter',
        }),
      })
      const result = await response.json()
      if (result.success) {
        setMessage('Thank you for subscribing! Check your inbox.')
        setEmail('')
        // Track in GA4
        if (typeof gtag === 'function') {
          gtag('event', 'newsletter_signup', { event_category: 'Newsletter' })
        }
        if (typeof fbq === 'function') {
          fbq('track', 'Subscribe')
        }
      } else {
        setMessage('Something went wrong. Try again.')
      }
    } catch {
      setMessage('Network error. Please try again.')
    } finally {
      setSubmitting(false)
      setTimeout(() => setMessage(''), 4000)
    }
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
                  <button type="submit" className="theme-btn mt-1" disabled={submitting}>
                    {submitting ? 'Sending...' : 'Subscribe'}
                  </button>
                </div>
                {message && (
                  <div className="input-group alert-notification mt-1">
                    <div className="alert-msg">{message}</div>
                  </div>
                )}
              </form>
            </div>
            <div className="col-6 col-sm-3 col-md-2">
              <div className="footer-links">
                <h3>Company</h3>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/portfolio">Portfolio</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-md-2">
              <div className="footer-links">
                <h3>Academy</h3>
                <ul>
                  <li><Link to="/academy">Courses</Link></li>
                  <li><Link to="/register">Register</Link></li>
                  <li><Link to="/login">Student Portal</Link></li>
                  <li><Link to="/contact?service=free-consultation">Free Consultation</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-sm-3 col-md-2">
              <div className="footer-links">
                <h3>Legal</h3>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
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
