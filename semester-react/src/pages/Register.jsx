import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Register() {
  const [form, setForm] = useState({
    first_name: '', last_name: '', email: '', phone: '', password1: '', password2: ''
  })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <SEO title="Register — Join the Academy" description="Register for Semester Tech Academy. 30+ courses in web development, data science, cybersecurity, and more. Starting from ₦50,000. Lagos & Abuja." path="/register" />
    <section className="contact-area bg-dark" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="custom-container">
        <div className="custom-row">
          <div className="contact-form-wrap shadow">
            <div className="hero-contact-form">
              <h5 className="section-subtitle">Register for a course</h5>
              <h1 className="section-title">Lets get you registered</h1>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-main-row">
                  <div className="input-row"></div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="first_name">First Name</label>
                      <input type="text" placeholder="First Name" id="first_name" name="first_name" required value={form.first_name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input type="text" placeholder="Last Name" id="last_name" name="last_name" required value={form.last_name} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder="Your Email" id="email" name="email" required value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="text" name="phone" placeholder="Your Number" value={form.phone} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="password1">Password</label>
                      <input type="password" placeholder="Your password" id="password1" name="password1" required value={form.password1} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="password2">Confirm Password</label>
                      <input type="password" placeholder="Confirm your password" id="password2" name="password2" required value={form.password2} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="input-main-row">
                  <div className="input-row">
                    <div className="input-group">
                      <button className="theme-btn" type="submit">Get Started</button>
                    </div>
                  </div>
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
