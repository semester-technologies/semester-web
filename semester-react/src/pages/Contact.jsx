import ContactForm from '../components/ContactForm'
import bgShape7 from '../assets/imgs/bg-shape-7.svg'

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="hero-service-wrap hero-section-wrap hero-portfolio-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Contact Us</h5>
                <h1 className="section-title fade-in">We are always open to <em>talk</em></h1>
                <p>We have offices and teams all around the world</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="contact-location-area">
        <img className="animation-slide-left bg-shape" src={bgShape7} alt="Shape" />
        <div className="custom-container">
          <div className="contact-inner">
            <div className="contact-inner-info-box d-flex flex-column flex-md-row align-items-stretch gap-4">
              <div className="contact-info-box simple-shadow">
                <div className="icon"><i className="las la-phone"></i></div>
                <h4>Phone</h4>
                <p>Mon-Fri from 9am to 6pm.</p>
                <h6><a href="tel:+2347060928686">+2347060928686</a></h6>
              </div>
              <div className="contact-info-box simple-shadow">
                <div className="icon"><i className="las la-map"></i></div>
                <h4>Contact Office</h4>
                <p>Suite C2, Nymex Plaza, Opposite ammasco filling station<br />Gado Nasco Road, NNPC Junction, Kubwa, Abuja, Nigeria.</p>
              </div>
            </div>
          </div>
          <div className="contact-inner">
            <div className="contact-inner-info-box d-flex flex-column flex-md-row align-items-stretch gap-4">
              <div className="contact-info-box simple-shadow">
                <div className="icon"><i className="las la-headset"></i></div>
                <h4>Support</h4>
                <p>Contact our fast support team 24/7</p>
                <h6><a href="mailto:sales@semestertech.ng">sales@semestertech.ng</a></h6>
              </div>
              <div className="contact-info-box simple-shadow">
                <h4>Social Media</h4>
                <div className="d-flex flex-column align-items-start">
                  <a href="#" className="fs-5 p-1" style={{ color: 'var(--accent)' }}>
                    <i className="iconoir-dribbble"></i> Dribbble
                  </a>
                  <a href="#" className="fs-5 p-1" style={{ color: 'var(--accent)' }}>
                    <i className="iconoir-twitter"></i> Twitter
                  </a>
                  <a href="#" className="fs-5 p-1" style={{ color: 'var(--accent)' }}>
                    <i className="iconoir-instagram"></i> Instagram
                  </a>
                  <a href="#" className="fs-5 p-1" style={{ color: 'var(--accent)' }}>
                    <i className="iconoir-linkedin"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-area bg-dark">
        <div className="custom-container">
          <div className="custom-row">
            <ContactForm />
            <div className="contact-experience">
              <ul>
                <li><h1>7+ <span>Years</span></h1><p>Field Experience</p></li>
                <li><h1>50+ <span>Projects</span></h1><p>Done Around World</p></li>
                <li><h1>99%</h1><p>Client Satisfaction</p></li>
                <li><h1>30+ <span>Professionals</span></h1><p>Experienced Team</p></li>
                <li><h1>5 <span>Mins</span></h1><p>Response Time</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
