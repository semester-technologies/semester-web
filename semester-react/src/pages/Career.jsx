import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import bgShape1 from '../assets/imgs/bg-shape-1.svg'
import serviceIcon1 from '../assets/imgs/service-icon-1.svg'
import serviceIcon2 from '../assets/imgs/service-icon-2.svg'
import serviceIcon3 from '../assets/imgs/service-icon-3.svg'
import serviceIcon4 from '../assets/imgs/service-icon-4.svg'
import serviceIcon5 from '../assets/imgs/service-icon-5.svg'

const careerTabs = [
  {
    id: 'web-dev', label: 'Web Development',
    type: 'career-grid',
    courses: [
      { title: 'Web Design', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'UI/UX - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Web Design/React - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Backend with python - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'Backend with Flask - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'Backend with Django - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'API with API - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'API with Django - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'JavaScript(NEAM) - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'Node Js/React - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'API with Node JS - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'PHP - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'PHP Laravel - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Rest API with Laravel - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Python - S.E', duration: '12 weeks', freq: '3x per week', price: '250,000' },
      { title: 'Django/Flask/Javascript - S.E', duration: '12 weeks', freq: '3x per week', price: '250,000' },
      { title: 'React JS/PHP/Laravel - S.E', duration: '6 weeks', freq: '3x per week', price: '250,000' },
    ]
  },
  {
    id: 'mobile', label: 'Mobile Application',
    type: 'career-grid',
    courses: [
      { title: 'Flutter - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'React Native - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'Kotlin - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
      { title: 'Swift - S.E', duration: '6 weeks', freq: '3x per week', price: '150,000' },
    ]
  },
  {
    id: 'data-science', label: 'Data Science',
    type: 'studio',
    icon: serviceIcon2,
    courses: [
      { title: 'Data Analysis', desc: 'Excel, Power BI, and SQL.' },
      { title: 'Data Analysis with Python', desc: 'Python libraries like Pandas, NumPy, and Matplotlib.' },
      { title: 'Data Science and Machine Learning', desc: 'predictive modeling, supervised/unsupervised learning, and AI algorithms.' },
      { title: 'Artificial Intelligence', desc: 'deep learning, natural language processing (NLP), and computer vision.' },
    ],
    info: { title: 'Data Science', desc: 'In our company, you will learn how to analyze, visualize, and derive insights from data to drive decision-making and innovation then also to Unlock the power of data with our comprehensive Data Science programs.' }
  },
  {
    id: 'cyber-security', label: 'Cyber Security',
    type: 'studio',
    icon: serviceIcon3,
    courses: [
      { title: 'Cyber Security', desc: 'cybersecurity frameworks, penetration testing, network administration, security tools and practices also python programming.' },
      { title: 'Certified Ethical Hacking', desc: 'Footprint and reconnaissance, enumeration, vulnerability analysis, scanning networks, social Engineering, ethical hacking tools and practices.' },
    ],
    info: { title: 'Cyber Security', desc: 'At Semester Integrated Technologies, we provide in-depth training on network security, encryption, risk management, and cybersecurity frameworks also our programs prepare you for roles such as Security Analyst, Network Security Engineer, penetration tester, ethical hacker and Cyber Risk Consultant.' }
  },
  {
    id: 'robotics', label: 'Robotics',
    type: 'studio',
    icon: serviceIcon4,
    courses: [
      { title: 'Robotics', desc: 'Mechanical design, embedded programming, AI integration, and automation.' },
      { title: 'Internet of Things (IOT)', desc: 'IOT protocols, sensor networks, cloud computing and data analytics.' },
      { title: 'Embedded Systems', desc: 'Microcontroller programming, real-time operating systems (RTOS), circuit design, and firmware development.' },
      { title: 'Smart Home Automation', desc: 'Home automation protocols, IoT integration, AI-driven smart assistants, and wireless communication.' },
    ],
    info: { title: 'Robotics', desc: 'At Semester Integrated Technologies, we shall equip you with the skills to design, build, and program intelligent robotic systems.' }
  },
  {
    id: 'management', label: 'Management',
    type: 'studio',
    icon: serviceIcon5,
    courses: [
      { title: 'Digital Marketing and Branding', desc: 'SEO, social media marketing, content strategy, paid advertising, and brand storytelling.' },
      { title: 'Product Design', desc: 'UI/UX principles, wireframing, prototyping and human-computer interaction.' },
      { title: 'Product Management', desc: 'Product roadmaps, conduct market research, define features, and oversee product lifecycles.' },
      { title: 'Project Management', desc: 'Agile, Scrum, PMP, and PRINCE2 methodologies.' },
    ],
    info: { title: 'Management', desc: 'At Semester Integrated Technologies, you will take your organization to the next level with our comprehensive management programs.' }
  },
]

export default function Career() {
  const [activeTab, setActiveTab] = useState('web-dev')
  const tabData = careerTabs.find(t => t.id === activeTab)

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero-service-wrap hero-section-wrap hero-career-wrap">
        <div className="hero-section-content-wrap">
          <img src={bgShape1} alt="Shape" className="animation-slide-left bg-shape slide-left" />
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Career</h5>
                <h1 className="section-title fade-in">You have great <em>opportunities</em></h1>
                <p>If you are a talented and ambitious individual looking to make a mark in your career, we invite you to explore our career opportunities.</p>
                <Link to="/contact" className="theme-btn">Enroll now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service / Courses Area */}
      <section className="service-area service-black-area">
        <div className="container">
          <div className="service-section-header section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h5 className="section-subtitle">What we do</h5>
              <h1 className="section-title">Dealing in all professional <br />IT services.</h1>
            </div>
            <p>At Semester Tech, we specialize in delivering comprehensive IT services tailored to your business needs. From infrastructure management to cutting-edge innovations, we provide end-to-end solutions to drive your success in the digital world.</p>
          </div>

          <div className="case-studio-area mt-0 pt-0" style={{ background: 'none' }}>
            <div className="case-studio">
              <ul className="nav nav-pills case-studio-tabs">
                {careerTabs.map(tab => (
                  <li className="nav-item" key={tab.id}>
                    <button className={`nav-link${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
                  </li>
                ))}
              </ul>

              <div className="tab-content case-studio-tab-content">
                {tabData && tabData.type === 'career-grid' && (
                  <div className="tab-pane fade show active">
                    <div className="case-studio-body d-flex flex-row flex-lg-column">
                      <div className="row row-cols-md-4 g-3">
                        {tabData.courses.map((c, i) => (
                          <div className="col" key={i}>
                            <div className="career-box">
                              <h2>{c.title}</h2>
                              <p>{c.duration}</p>
                              <div className="career-time">
                                <span><i className="las la-clock"></i> {c.freq}</span>
                                <span>{c.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {tabData && tabData.type === 'studio' && (
                  <div className="tab-pane fade show active">
                    <div className="case-studio-body d-flex">
                      <div className="left d-flex flex-1">
                        <div className={`row row-cols-1 row-cols-lg-${tabData.courses.length <= 2 ? '1' : '2'} g-3`}>
                          {tabData.courses.map((c, i) => (
                            <div className="col" key={i}>
                              <div className="service-card simple-shadow">
                                <h3><Link to="/services">{c.title}</Link></h3>
                                <p>{c.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="right">
                        <div className="case-studio-contents service-card card-h">
                          <img src={tabData.icon} alt="ICON" />
                          <h3>{tabData.info.title}</h3>
                          <p>{tabData.info.desc}</p>
                          <Link to="/services" className="theme-btn btn-sm" style={{ width: 'auto' }}>
                            Enroll Now <i className="iconoir-arrow-up-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
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
