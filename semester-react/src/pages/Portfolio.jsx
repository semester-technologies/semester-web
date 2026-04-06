import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

import project1 from '../assets/imgs/project-1.png'
import project2 from '../assets/imgs/project-2.png'
import project3 from '../assets/imgs/project-3.jpg'
import project4 from '../assets/imgs/project-4.png'
import project5 from '../assets/imgs/project-5.png'
import project6 from '../assets/imgs/project-6.png'
import project7 from '../assets/imgs/project-7.png'
import project8 from '../assets/imgs/project-8.png'
import project9 from '../assets/imgs/project-9.png'
import project10 from '../assets/imgs/project-10.png'
import project11 from '../assets/imgs/project-11.png'
import project12 from '../assets/imgs/project-12.png'
import bgShape2 from '../assets/imgs/bg-shape-2.svg'
import heroOverviewAbout from '../assets/imgs/hero-overview-about.jpg'
import aboutService2 from '../assets/imgs/about-service-2.png'

const portfolioItems = [
  [
    { title: 'E-commerce\nplatform\ndevelopment.', img: project1, detail: 'Woo Commerce', desc: 'A E-commerce site for london based company', boxClass: 'portfolio-black-box', white: true, shape: bgShape2 },
    { title: 'Electronic\nbrand\nmarketing.', img: project2, detail: 'Branding for Studio', desc: 'Boosting service for electronic based company', boxClass: 'portfolio-gray-box' },
    { title: 'Mobile app\ndevelopment\nin ios', img: project3, detail: 'Swift App Development', desc: 'Mobile app for productivity in Iphone', boxClass: '' },
    { title: 'Get into a\nvirtual reality\nworld', img: project4, detail: 'VR Development', desc: 'Watch everything in virtual reality world', boxClass: 'portfolio-black-box' },
  ],
  [
    { title: 'Cloud service\ndeveloped by\nbluebase', img: project5, detail: 'Cloud Service', desc: 'Building a server for a new start up company', boxClass: 'portfolio-black-box portfolio-bluebase', white: true },
    { title: 'Productivity\napp in your\nhand', img: project6, detail: 'Application for Watch', desc: 'Our slack app for your wrist smartwatch', boxClass: '' },
    { title: 'Customer\ncrm in\nsalesforce', img: project7, detail: 'CRM Solutions', desc: 'Customer relationship app using Salesforce', boxClass: 'portfolio-gray-box' },
    { title: 'ERP solutions\nimplemented\nbluebase', img: project8, detail: 'ERP Solutions', desc: 'Saas Service for a brand new Woo Commerce Company', boxClass: 'portfolio-yellow-box' },
  ],
  [
    { title: 'Unik personal\nportfolio on\nmarket', img: project9, detail: 'Unik Personal Portfolio', desc: 'Personal portfolio that hits everybody resume', boxClass: 'portfolio-darkgray-box', white: true },
    { title: 'Perfect crm\nfor market\nin salesforce', img: project10, detail: 'Clean Dashboard', desc: 'Creating a dashboard for newly launched market', boxClass: 'portfolio-gray-box' },
    { title: 'Premier support\nand solutions\nby bluebase', img: project11, detail: 'Fast IT Support', desc: 'Our team give a quick response for the clients', boxClass: '' },
    { title: 'Electro online\nplatform\ndevelopment.', img: project12, detail: 'Electro E-commerce', desc: 'A site that hits entire online themeforest site', boxClass: 'portfolio-indigo-box' },
  ],
]

const caseStudies = [
  {
    num: '01', title: 'The Global NGO Portal', tag: 'Engineering',
    client: 'Regional Social Impact Organization.',
    challenge: 'No digital presence; losing out on international grants due to lack of transparency and search visibility.',
    solution: ['Multilingual Web Architecture (Mother Language focus)', 'Global Donation Gateway supporting 15 currencies', 'Google Recognition (65k) strategy for authority'],
    result: '400% increase in international donor inquiries within 90 days.',
    resultIcon: 'la-chart-line',
    services: 'Web Engineering, SEO Architecture, Growth Marketing'
  },
  {
    num: '02', title: 'The Fintech MVP', tag: 'Legal & Engineering',
    client: 'Tech Startup (Founder-led).',
    challenge: 'A visionary had a napkin sketch for a wallet system but no technical team or legal foundation.',
    solution: ['Legal: CAC Registration and Business Architecture', 'Engineering: Secure, scalable Mobile MVP (iOS & Android) in 10 weeks', 'Branding: High-end visual identity (50k package)'],
    result: 'Secured seed funding 3 months after launch.',
    resultIcon: 'la-seedling',
    services: 'Legal Foundation, Mobile Engineering, UI/UX Research'
  },
  {
    num: '03', title: 'Enterprise System Refactoring', tag: 'Backend',
    client: 'Established Logistics Firm.',
    challenge: 'Legacy software was slow, leading to a 20% loss in order fulfillment.',
    solution: ['Complete architectural audit and System Refactor', 'Corporate Academy training for their internal IT team'],
    result: '300% system speed increase. 0% downtime recorded since handover.',
    resultIcon: 'la-tachometer-alt',
    services: 'System Audit, Corporate Training, Backend Engineering'
  },
]

const logoTiles = [
  { name: 'TechPulse NG', service: 'Web App' }, { name: 'Zara Farms', service: 'CAC Reg.' },
  { name: 'FinEdge', service: 'Mobile MVP' }, { name: 'NovaBuild', service: 'Logo Design' },
  { name: 'GreenPath', service: 'SEO Arch.' }, { name: 'Stellar Ads', service: 'Google Ads' },
  { name: 'LexCore', service: 'Legal Docs' }, { name: 'Aura Health', service: 'UI/UX Design' },
  { name: 'PayBridge', service: 'API Integration' }, { name: 'SwiftLog', service: 'System Audit' },
  { name: 'BrandHaus', service: '3D Renders' }, { name: 'CloudNest', service: 'Cloud Setup' },
  { name: 'EduReach', service: 'E-commerce' }, { name: 'CivicBase', service: 'NGO Portal' },
  { name: 'Prism Media', service: 'Corp. Profile' }, { name: 'IronTrade', service: 'TIN & Compliance' },
]

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Engineering', 'Branding & Design', 'Legal & Business', 'Growth & Ads']

  return (
    <>
      {/* Hero */}
      <section className="hero-service-wrap hero-section-wrap hero-portfolio-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Our Projects</h5>
                <h1 className="section-title fade-in">The Proof is in the <em>Architecture</em>.</h1>
                <p>Explore how we have helped over 200 visionaries move from "Idea" to "Impact." Every project here represents a journey through our 6-step workflow, powered by our workforce of 120+ experts.</p>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                  {filters.map(f => (
                    <a href="#portfolio-items" key={f} className={`filter-tag${activeFilter === f ? ' active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveFilter(f) }}>{f}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="portfolio-area" id="portfolio-items">
        <div className="custom-container">
          {portfolioItems.map((row, ri) => (
            <div className="portfolio-items" key={ri}>
              {row.map((item, ci) => (
                <div className={`portfolio-item-col ${item.boxClass}`} key={ci}>
                  <div className="project-item">
                    <div className="project-item-inner">
                      <h2 className={item.white ? 'white' : ''}>
                        <Link to="/portfolio">{item.title.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</Link>
                      </h2>
                      <img src={item.img} alt="Project" />
                    </div>
                  </div>
                  <div className="portfolio-sample-details">
                    {item.shape && <img src={item.shape} alt="Shape" className="bg-shape" />}
                    <h3><Link to="/portfolio">{item.detail} <i className="iconoir-arrow-up-right"></i></Link></h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="case-studies-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">DEEP DIVES</h5>
            <h1 className="section-title">The Featured Showcase.</h1>
            <p>Real challenges. Real solutions. Measurable results.</p>
          </div>
          <div className="row g-4">
            {caseStudies.map((cs, i) => (
              <div className="col-12 col-md-6 col-lg-4" key={i}>
                <div className="case-card">
                  <div className="case-card-header">
                    <div className="case-num">Case Study {cs.num}</div>
                    <h3>{cs.title}</h3>
                    <span className="case-tag">{cs.tag}</span>
                  </div>
                  <div className="case-card-body">
                    <div className="case-row"><div className="case-label">The Client</div><p>{cs.client}</p></div>
                    <div className="case-row"><div className="case-label">The Challenge</div><p>{cs.challenge}</p></div>
                    <div className="case-row">
                      <div className="case-label">Our Solution</div>
                      <ul>{cs.solution.map((s, si) => <li key={si}>{s}</li>)}</ul>
                    </div>
                    <div className="case-result">
                      <div className="case-result-icon"><i className={`las ${cs.resultIcon}`}></i></div>
                      <p>{cs.result}</p>
                    </div>
                    <div className="case-services"><strong>Services Used:</strong> {cs.services}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="numbers-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">BY THE NUMBERS</h5>
            <h1 className="section-title">We don't just promise results; we deploy them.</h1>
          </div>
          <div className="row g-4">
            {[
              { num: '200+', desc: 'Active Digital Assets Managed' },
              { num: '1M+', desc: 'Lines of Clean Code Written' },
              { num: '50+', desc: 'Brands Registered & Legally Protected' },
              { num: '100%', desc: 'IP Transferred to Clients' },
            ].map((s, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="stat-card"><div className="stat-num">{s.num}</div><p>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Completion Gallery */}
      <section className="gallery-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">COMPLETION GALLERY</h5>
            <h1 className="section-title">Excellence in Every Module.</h1>
            <p>Whether it was a Logo Design (50k), a Company Profile (30k), or SEO Architecture (50k), these brands started their journey with a single Semester Tech service.</p>
          </div>
          <div className="logo-grid">
            {logoTiles.map((t, i) => (
              <div className="logo-tile" key={i}>{t.name}<span>{t.service}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="video-testimonials-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">CLIENT STORIES</h5>
            <h1 className="section-title">In Their Own Words.</h1>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="video-thumb">
                <img src={heroOverviewAbout} alt="Video Thumbnail" className="video-thumb-bg" />
                <div className="play-btn"><i className="las la-play"></i></div>
                <div className="video-caption">"They handled my CAC and my App. I didn't have to talk to two different companies."</div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="video-thumb">
                <img src={aboutService2} alt="Video Thumbnail" className="video-thumb-bg" />
                <div className="play-btn"><i className="las la-play"></i></div>
                <div className="video-caption">"The 120+ experts they mentioned are real. The speed of delivery was shocking."</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="custom-container">
          <h1>Your Project is the Next Success Story.</h1>
          <p>Ready to move from a "napkin sketch" to a case study? Let's start the 6-step workflow today.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/contact" className="btn-white">Start My Project Intake <i className="iconoir-arrow-up-right"></i></Link>
            <Link to="/services" className="btn-outline-white">View Full Rate Card <i className="iconoir-arrow-up-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-area bg-dark">
        <div className="custom-container">
          <div className="custom-row">
            <ContactForm />
            <div className="contact-experience">
              <ul>
                <li><h1>7+ <span>Years</span></h1><p>Field Experience</p></li>
                <li><h1>200+ <span>Projects</span></h1><p>Done Around World</p></li>
                <li><h1>98%</h1><p>Client Satisfaction</p></li>
                <li><h1>120+ <span>Experts</span></h1><p>Trained In-House</p></li>
                <li><h1>5 <span>Mins</span></h1><p>Response Time</p></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
