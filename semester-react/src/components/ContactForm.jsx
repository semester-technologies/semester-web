import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const WEB3FORMS_KEY = '5fb7c79b-607f-4f9f-91c9-d75fb3a87119'

export default function ContactForm() {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', email: '', phone_number: '', country: '',
    choice_company: '', services: [], message: ''
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (!serviceParam) return
    const serviceMap = {
      'cac-registration': 'Web Development', 'technical-build': 'Mobile App',
      'design-packages': 'Branding', 'growth-plan': 'Web Development',
      'training': 'Training', 'cloud': 'Cloud service',
      'free-consultation': 'Other', 'career-roadmap': 'Training',
      'launchpad': 'Web Development', 'mvp': 'Mobile App', 'growth-engine': 'Web Development',
    }
    const preselect = serviceMap[serviceParam]
    if (preselect) {
      setFormData(prev => ({
        ...prev,
        services: prev.services.includes(preselect) ? prev.services : [...prev.services, preselect]
      }))
    }
    const messageMap = {
      'cac-registration': 'I am interested in CAC / Business Registration services.',
      'technical-build': 'I need a custom technical build (web/mobile application).',
      'design-packages': 'I am interested in your design and branding packages.',
      'growth-plan': 'I want to start a growth plan (SEO, ads, monetization).',
      'free-consultation': 'I would like to book a free 30-minute consultation.',
      'career-roadmap': 'I would like to receive the free 2026 Tech Career Roadmap.',
      'launchpad': 'I am interested in the Legal Launchpad Bundle.',
      'mvp': 'I am interested in the Digital MVP Bundle.',
      'growth-engine': 'I am interested in the Growth Engine Bundle.',
    }
    if (messageMap[serviceParam]) {
      setFormData(prev => ({ ...prev, message: prev.message || messageMap[serviceParam] }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'services[]') {
      setFormData(prev => ({
        ...prev,
        services: checked ? [...prev.services, value] : prev.services.filter(s => s !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.first_name.trim() || !formData.email.trim()) {
      setStatus('error')
      setErrorMsg('Please fill in your name and email address.')
      return
    }
    setStatus('submitting')
    setErrorMsg('')
    try {
      const payload = {
        access_key: WEB3FORMS_KEY,
        subject: `New Lead — ${formData.first_name} ${formData.last_name} | SemesterTech.ng`,
        from_name: 'SemesterTech Website',
        name: `${formData.first_name} ${formData.last_name}`,
        email: formData.email, phone: formData.phone_number, country: formData.country,
        company_type: formData.choice_company, services_needed: formData.services.join(', '),
        message: formData.message, source_url: window.location.href,
      }
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()
      if (result.success) {
        setStatus('success')
        setFormData({ first_name: '', last_name: '', email: '', phone_number: '', country: '', choice_company: '', services: [], message: '' })
        if (typeof gtag === 'function') gtag('event', 'generate_lead', { event_category: 'Contact Form', event_label: formData.services.join(', ') || 'General' })
        if (typeof fbq === 'function') fbq('track', 'Lead', { content_name: formData.services.join(', ') || 'General' })
      } else {
        setStatus('error')
        setErrorMsg('Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  const resetForm = () => { setStatus('idle'); setErrorMsg('') }

  const companyTypes = [
    { id: 'saas', value: 'SAAS', label: 'Healthcare' },
    { id: 'banking', value: 'Banking', label: 'Fintech' },
    { id: 'agency', value: 'Agency', label: 'Agency' },
    { id: 'business', value: 'Business', label: 'Business' },
    { id: 'other', value: 'Other', label: 'Other' },
  ]
  const serviceOptions = [
    { id: 'app_design', value: 'Mobile App', label: 'Mobile App' },
    { id: 'web_design', value: 'Web Development', label: 'Web Development' },
    { id: 'branding', value: 'Branding', label: 'Branding' },
    { id: 'development', value: 'Training', label: 'Training' },
    { id: 'cloud_service', value: 'Cloud service', label: 'Cloud service' },
    { id: 'other2', value: 'Other', label: 'Other' },
  ]

  if (status === 'success') {
    return (
      <div className="contact-form-wrap shadow">
        <div className="hero-contact-form">
          <div className="form-success-state">
            <div className="form-success-icon">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="var(--sem-green)" opacity="0.12" />
                <circle cx="32" cy="32" r="24" fill="var(--sem-green)" opacity="0.2" />
                <path d="M22 32L29 39L42 26" stroke="var(--sem-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="form-success-title">Message Sent Successfully!</h2>
            <p className="form-success-text">Thank you for reaching out. Our team will review your request and get back to you within <strong>24 hours</strong>.</p>
            <div className="form-success-next">
              <p className="form-success-subtext">While you wait, you can:</p>
              <div className="form-success-actions">
                <a href="https://wa.me/2347060928686?text=Hi%20Semester%20Tech%2C%20I%20just%20submitted%20a%20form%20on%20your%20website." className="form-action-btn form-action-whatsapp" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor"><path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.962A15.91 15.91 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.35 22.616c-.396 1.116-2.328 2.076-3.21 2.178-.882.102-1.696.396-5.712-1.188-4.836-1.908-7.92-6.87-8.16-7.188-.24-.318-1.962-2.61-1.962-4.98s1.242-3.534 1.686-4.014c.444-.48.966-.6 1.29-.6.324 0 .648.006.93.018.3.012.702-.114 1.098.84.396.954 1.35 3.288 1.47 3.528.12.24.198.522.036.84-.162.318-.24.516-.48.798-.24.276-.504.618-.72.828-.24.234-.492.486-.21.954.276.468 1.236 2.04 2.652 3.306 1.824 1.626 3.36 2.13 3.834 2.37.474.24.75.198 1.026-.12.276-.318 1.188-1.386 1.506-1.86.318-.48.636-.396 1.074-.24.438.162 2.772 1.308 3.246 1.548.474.24.792.36.906.558.12.198.12 1.134-.276 2.25z"/></svg>
                  Chat on WhatsApp
                </a>
                <Link to="/portfolio" className="form-action-btn form-action-secondary">View Our Work</Link>
              </div>
            </div>
            <button className="form-reset-link" onClick={resetForm}>Submit another request</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="contact-form-wrap shadow">
      <div className="hero-contact-form">
        <h5 className="section-subtitle">Contact</h5>
        <h1 className="section-title">Lets get in touch</h1>
        <p>You can reach us anytime via <a href="mailto:sales@semestertech.ng">sales@semestertech.ng</a></p>

        {status === 'error' && errorMsg && (
          <div className="form-error-banner">
            <div className="form-error-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#e74c3c" opacity="0.12" /><path d="M10 6v5M10 13.5v.5" stroke="#e74c3c" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <span>{errorMsg}</span>
            <button className="form-error-close" onClick={() => { setStatus('idle'); setErrorMsg('') }}>&times;</button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form d-flex">
          <div className="input-main-row">
            <div className="input-row">
              <div className="sem-field">
                <label htmlFor="first_name">First Name <span className="form-required">*</span></label>
                <input type="text" placeholder="First Name" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
              </div>
              <div className="sem-field">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" placeholder="Last Name" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
              </div>
            </div>
            <div className="input-row">
              <div className="sem-field">
                <label htmlFor="email">Email <span className="form-required">*</span></label>
                <input type="email" placeholder="Your Email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="input-row">
              <div className="sem-field">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="text" name="phone_number" placeholder="Your Number" value={formData.phone_number} onChange={handleChange} />
              </div>
              <div className="sem-field">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" placeholder="Your Country" value={formData.country} onChange={handleChange} />
              </div>
            </div>
            <div className="input-row">
              <div className="sem-field">
                <label>What's the type of your company?</label>
                <div className="choice-a-company flex-wrap d-flex">
                  {companyTypes.map(ct => (
                    <div className="radio-box" key={ct.id}>
                      <input type="radio" id={ct.id} name="choice_company" value={ct.value} checked={formData.choice_company === ct.value} onChange={handleChange} />
                      <label htmlFor={ct.id}>{ct.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="input-main-row">
            <div className="input-row">
              <div className="sem-field">
                <label>What you need from us?</label>
                <div className="feedback-checkboxes d-flex flex-wrap">
                  {serviceOptions.map(so => (
                    <div className="feedback-item" key={so.id}>
                      <input type="checkbox" id={so.id} name="services[]" value={so.value} checked={formData.services.includes(so.value)} onChange={handleChange} />
                      <label htmlFor={so.id}>{so.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="input-row">
              <div className="sem-field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Leave us a message...." value={formData.message} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="input-row">
              <div className="sem-field">
                <button className="theme-btn form-submit-btn" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (<span className="form-spinner-wrap"><span className="form-spinner"></span>Sending...</span>) : 'Get Started'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
