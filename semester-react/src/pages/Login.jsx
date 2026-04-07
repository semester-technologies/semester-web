import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <SEO title="Student Login" description="Access your Semester Tech Academy student portal. Track your courses, projects, and progress." path="/login" />
    <section className="contact-area bg-dark" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="custom-container">
        <div className="custom-row">
          <div className="contact-form-wrap shadow">
            <div className="hero-contact-form">
              <h5 className="section-subtitle">Seamlessly login into your account below</h5>
              <h1 className="section-title">Lets get you started</h1>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-main-row">
                  <div className="input-row"></div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" placeholder="Your Email" id="email" name="email" required value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" placeholder="Your Password" id="password" name="password" required value={form.password} onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="input-main-row">
                  <div className="input-row">
                    <div className="input-group">
                      <button className="theme-btn" type="submit">Sign-In</button>
                    </div>
                  </div>
                  <p>Don't have an account? <Link to="/register">Register</Link></p>
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
