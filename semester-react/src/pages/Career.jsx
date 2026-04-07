import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import SEO, { courseSchema } from '../components/SEO'
import bgShape1 from '../assets/imgs/bg-shape-1.svg'
import bgShape11 from '../assets/imgs/bg-shape-11.svg'
import bgShapeMentors from '../assets/imgs/bg-shape-mentors.svg'
import serviceIcon1 from '../assets/imgs/service-icon-1.svg'
import serviceIcon2 from '../assets/imgs/service-icon-2.svg'
import serviceIcon3 from '../assets/imgs/service-icon-3.svg'
import serviceIcon4 from '../assets/imgs/service-icon-4.svg'
import serviceIcon5 from '../assets/imgs/service-icon-5.svg'
import smallImg1 from '../assets/imgs/small-img-1.png'
import smallImg2 from '../assets/imgs/small-img-2.png'
import smallImg3 from '../assets/imgs/small-img-3.png'
import smallImg4 from '../assets/imgs/small-img-4.png'
import team4 from '../assets/imgs/team4.png'
import team5 from '../assets/imgs/team5.png'
import team6 from '../assets/imgs/team6.png'
import team7 from '../assets/imgs/team7.png'
import team8 from '../assets/imgs/team8.png'
import team9 from '../assets/imgs/team9.png'
import team10 from '../assets/imgs/team10.png'
import team11 from '../assets/imgs/team11.png'

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

const standaloneCourses = [
  { title: 'Java(Android) - S.E', duration: '12 weeks', freq: '3x per week', price: '250,000' },
  { title: 'Java(Kotin) - S.E', duration: '12 weeks', freq: '3x per week', price: '250,000' },
  { title: 'Swift(IOS) - S.E', duration: '12 weeks', freq: '3x per week', price: '250,000' },
  { title: 'Hybrid Flutter(Python) - S.E', duration: '12 weeks', freq: '3x per week', price: '250,000' },
  { title: 'Flutter(JS) - S.E', duration: '12 weeks', freq: '3x per week', price: '250,000' },
  { title: 'Data Analytics - Database', duration: '6 weeks', freq: '3x per week', price: '100,000' },
  { title: 'Data Analytics with Python - Database', duration: '12 weeks', freq: '3x per week', price: '200,000' },
  { title: 'Data Science - Database', duration: '12 weeks', freq: '3x per week', price: '200,000' },
  { title: 'Machine Learning - Database', duration: '12 weeks', freq: '3x per week', price: '200,000' },
  { title: 'DBMS - Database', duration: '6 weeks', freq: '3x per week', price: '100,000' },
  { title: 'Artifical Intelligence', duration: '12 weeks', freq: '3x per week', price: '200,000' },
  { title: 'Cyber Security', duration: '8 weeks', freq: '3x per week', price: '150,000' },
  { title: 'Cyber Security with Ethical Hacking', duration: '12 weeks', freq: '3x per week', price: '250,000' },
  { title: 'Robotics & IOT - Automation', duration: '8 weeks', freq: '3x per week', price: '150,000' },
  { title: 'Drone Technology - Automation', duration: '12 weeks', freq: '3x per week', price: '250,000' },
  { title: 'Project Management - Management', duration: '12 weeks', freq: '3x per week', price: '100,000' },
  { title: 'Product Design - Management', duration: '12 weeks', freq: '3x per week', price: '50,000' },
  { title: 'ICT Essentials', duration: '4 weeks', freq: '3x per week', price: '50,000' },
  { title: 'Cloud Computing', duration: '8 weeks', freq: '3x per week', price: '150,000' },
]

const careerPathTabs = [
  {
    id: 'software-dev', label: 'Software Development',
    type: 'career-grid',
    courses: [
      { title: 'Web Design - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Web Design - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Web Design - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Web Design - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Web Design - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
      { title: 'Web Design - S.E', duration: '6 weeks', freq: '3x per week', price: '100,000' },
    ]
  },
  {
    id: 'data-science-2', label: 'Data Science',
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
    id: 'cyber-security-2', label: 'Cyber Security',
    type: 'studio',
    icon: serviceIcon3,
    courses: [
      { title: 'Cyber Security', desc: 'cybersecurity frameworks, penetration testing, network administration, security tools and practices also python programming.' },
      { title: 'Certified Ethical Hacking', desc: 'Footprint and reconnaissance, enumeration, vulnerability analysis, scanning networks, social Engineering, ethical hacking tools and practices.' },
    ],
    info: { title: 'Cyber Security', desc: 'At Semester Integrated Technologies, we provide in-depth training on network security, encryption, risk management, and cybersecurity frameworks also our programs prepare you for roles such as Security Analyst, Network Security Engineer, penetration tester, ethical hacker and Cyber Risk Consultant.' }
  },
  {
    id: 'robotics-2', label: 'Robotics',
    type: 'studio',
    icon: serviceIcon4,
    courses: [
      { title: 'Robotics', desc: 'mechanical design, embedded programming, AI integration, and automation.' },
      { title: 'Internet of Things (IOT)', desc: 'IOT protocols, sensor networks, cloud computing and data analytics.' },
      { title: 'Embedded Systems', desc: 'microcontroller programming, real-time operating systems (RTOS), circuit design, and firmware development.' },
      { title: 'Smart Home Automation', desc: 'home automation protocols, IoT integration, AI-driven smart assistants, and wireless communication.' },
    ],
    info: { title: 'Robotics', desc: 'At Semester Integrated Technologies, we shall equip you with the skills to design, build, and program intelligent robotic systems. Also train you mechanical design, embedded programming, AI integration and automation and prepare you for careers in industrial automation, healthcare robotics, drone technology, and AI-driven robotics solutions.' }
  },
  {
    id: 'management-2', label: 'Management',
    type: 'studio',
    icon: serviceIcon5,
    courses: [
      { title: 'Digital Marketing and Branding', desc: 'SEO, social media marketing, content strategy, paid advertising, and brand storytelling.' },
      { title: 'Product Design', desc: 'UI/UX principles, wireframing, prototyping and human-computer interaction also tools like Figma, Adobe XD, and Sketch.' },
      { title: 'Product Management', desc: 'Product roadmaps, conduct market research, define features, and oversee product lifecycles.' },
      { title: 'Project Management', desc: 'Agile, Scrum, PMP, and PRINCE2 methodologies.' },
    ],
    info: { title: 'Management', desc: 'At Semester Integrated Technologies, you will take your organization to the level with our comprehensive management program from elevating your Online presence and crafting user-centered digital experiences, to developing successful products and delivering Projects efficiently, our expert-led training equip you with the skills to drive business growth and achieve success.' }
  },
]

const mentors = [
  { name: 'Jennifer Linda', role: 'Product Designer', img: team4 },
  { name: 'Merlin Bullock', role: 'Business Analyst', img: team5 },
  { name: 'Beatrix Clara', role: 'Front End Developer', img: team6 },
  { name: 'Richard Parker', role: 'Back End Developer', img: team7 },
  { name: 'Aminul Ashfaq', role: 'Devops Engineer', img: team8 },
  { name: 'Margeret Allan', role: 'Cloud Expert', img: team9 },
  { name: 'Mason Williams', role: 'System Engineer', img: team10 },
  { name: 'Emily Frida', role: 'UX Designer', img: team11 },
]

export default function Career() {
  const [activeTab, setActiveTab] = useState('web-dev')
  const [activePathTab, setActivePathTab] = useState('software-dev')
  const tabData = careerTabs.find(t => t.id === activeTab)
  const pathTabData = careerPathTabs.find(t => t.id === activePathTab)

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <>
      <SEO
        title="Academy — Tech Training Courses in Lagos & Abuja"
        description="Learn in-demand tech skills at Semester Tech Academy. 30+ courses in Web Development, Data Science, Cybersecurity, Robotics & more. Starting from ₦50,000. Next cohort starts May 12, 2026."
        path="/academy"
        schema={courseSchema('Semester Tech Academy', 'Comprehensive tech training courses in Nigeria', '100000', 'P6W')}
      />

      {/* Hero */}
      <section className="hero-service-wrap hero-section-wrap hero-career-wrap">
        <div className="hero-section-content-wrap">
          <img src={bgShape1} alt="Shape" className="animation-slide-left bg-shape slide-left" />
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Academy</h5>
                <h1 className="section-title fade-in">Launch Your Tech <em>Career</em></h1>
                <p>30+ courses, 8 mentors, hands-on projects. Join 120+ graduates who are now leading the industry. Classes in Lagos, Abuja, and online.</p>
                <Link to="/register" className="theme-btn">Enroll Now</Link>
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
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
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

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2">
              {standaloneCourses.map((c, i) => (
                <div className="col" key={i}>
                  <div className="career-box">
                    <h2>{c.title}</h2>
                    <p>{c.duration}</p>
                    <div className="career-time">
                      <span><i className="las la-clock"></i>{c.freq}</span>
                      <span>{c.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studio / Course Career Paths */}
      <section className="case-studio-area bg-dark">
        <div className="custom-container">
          <div className="case-studio-header text-center">
            <h5 className="section-subtitle">TRAIN WITH US</h5>
            <h1 className="section-title">Our Course Career Paths</h1>
          </div>

          <div className="case-studio">
            <ul className="nav nav-pills case-studio-tabs">
              {careerPathTabs.map(tab => (
                <li className="nav-item" key={tab.id}>
                  <button className={`nav-link${activePathTab === tab.id ? ' active' : ''}`} onClick={() => setActivePathTab(tab.id)}>{tab.label}</button>
                </li>
              ))}
            </ul>

            <div className="tab-content case-studio-tab-content">
              {pathTabData && pathTabData.type === 'career-grid' && (
                <div className="tab-pane fade show active">
                  <div className="case-studio-body d-flex">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
                      {pathTabData.courses.map((c, i) => (
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

              {pathTabData && pathTabData.type === 'studio' && (
                <div className="tab-pane fade show active">
                  <div className="case-studio-body d-flex">
                    <div className="left d-flex flex-1">
                      <div className={`row row-cols-1 row-cols-lg-${pathTabData.courses.length <= 2 ? '1' : '2'} g-3`}>
                        {pathTabData.courses.map((c, i) => (
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
                        <img src={pathTabData.icon} alt="ICON" />
                        <h3>{pathTabData.info.title}</h3>
                        <p>{pathTabData.info.desc}</p>
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
      </section>

      {/* CTA */}
      <section className="cta-area cta-style-3">
        <div className="custom-container">
          <div className="cta-body text-center">
            <img src={bgShape11} alt="Shape" className="animation-slide-left bg-shape" />
            <div className="our-expert-team-box">
              <div className="our-expert-team-box-inner d-flex align-items-center">
                <div className="imgs d-flex align-items-center">
                  <img src={smallImg4} alt="team" />
                  <img src={smallImg3} alt="team" />
                  <img src={smallImg2} alt="team" />
                  <img src={smallImg1} alt="team" />
                </div>
              </div>
            </div>
            <h2>Need any further assitance?</h2>
            <p>Feel free to reach out for any inquiries or assistance.</p>
            <Link to="/contact" className="theme-btn">Book an appointment now</Link>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="our-team-2-area our-team-3-area">
        <div className="custom-container">
          <div className="our-team-inner">
            <img src={bgShapeMentors} alt="Shape" className="animation-slide-left bg-shape" />
            <div className="section-header our-team-2-header d-flex align-items-center justify-content-between w-full">
              <div className="left">
                <h5 className="section-subtitle">MENTORS</h5>
                <h1 className="section-title">Our leadership and mentors</h1>
                <p>Our team is a collective force of top talents, experts, and visionaries from diverse fields.</p>
              </div>
              <a href="#" className="theme-btn">Meet our experts now</a>
            </div>
            <div className="our-team-2-lists our-team-3-lists">
              {mentors.map((m, i) => (
                <div className="our-team-2-card" key={i}>
                  <div className="img-box">
                    <img src={m.img} alt="Team" />
                  </div>
                  <h2>{m.name}</h2>
                  <span className="designation">{m.role}</span>
                </div>
              ))}
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
