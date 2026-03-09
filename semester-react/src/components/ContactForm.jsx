import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    first_name: '', last_name: '', email: '', phone_number: '', country: '',
    choice_company: '', services: [], message: ''
  })
  const [alertMsg, setAlertMsg] = useState('')

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (name === 'services[]') {
      setFormData(prev => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.first_name || !formData.email) {
      setAlertMsg('Please fill in required fields.')
      return
    }
    setAlertMsg('Thank you! We will get back to you soon.')
    setFormData({
      first_name: '', last_name: '', email: '', phone_number: '', country: '',
      choice_company: '', services: [], message: ''
    })
    setTimeout(() => setAlertMsg(''), 4000)
  }

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

  return (
    <div className="contact-form-wrap shadow">
      <div className="hero-contact-form">
        <h5 className="section-subtitle">Contact</h5>
        <h1 className="section-title">Lets get in touch</h1>
        <p>You can reach us anytime via <a href="mailto:sales@semestertech.ng">sales@semestertech.ng</a></p>
        <form onSubmit={handleSubmit} className="contact-form d-flex">
          <div className="input-main-row">
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="first_name">First Name</label>
                <input type="text" placeholder="First Name" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="last_name">Last Name</label>
                <input type="text" placeholder="Last Name" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Your Email" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input type="text" name="phone_number" placeholder="Your Number" value={formData.phone_number} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label htmlFor="country">Country</label>
                <input type="text" name="country" placeholder="Your Country" value={formData.country} onChange={handleChange} />
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
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
              <div className="input-group">
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
              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Leave us a message...." value={formData.message} onChange={handleChange}></textarea>
              </div>
            </div>
            <div className="input-row">
              <div className="input-group">
                <button className="theme-btn" type="submit">Get Started</button>
              </div>
            </div>
            {alertMsg && (
              <div className="input-row">
                <div className="input-group alert-notification">
                  <div className="alert-msg">{alertMsg}</div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
