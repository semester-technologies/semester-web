import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import ClientMarquee from '../components/ClientMarquee'

import heroCompanyAbout from '../assets/imgs/hero-company-about.jpg'
import serviceIcon1 from '../assets/imgs/service-icon-1.svg'
import serviceIcon4 from '../assets/imgs/service-icon-4.svg'
import serviceIcon8 from '../assets/imgs/service-icon-8.svg'
import chipAi from '../assets/imgs/chip-ai-svgrepo-com.svg'
import internetSecurity from '../assets/imgs/internet-security-svgrepo-com.svg'
import hwdIcon6 from '../assets/imgs/hwd-icon-6.svg'
import robotics from '../assets/imgs/robotics-svgrepo-com.svg'
import hwdIcon4 from '../assets/imgs/hwd-icon-4.svg'
import serviceIcon2 from '../assets/imgs/service-icon-2.svg'
import serviceIcon5 from '../assets/imgs/service-icon-5.svg'
import bgShape10 from '../assets/imgs/bg-shape-10.svg'
import aboutService3 from '../assets/imgs/about-service-3.png'

import hamzat from '../assets/imgs/workpics/HamzatAdebayo.jpg'
import funmike from '../assets/imgs/workpics/FunmikeOnisola.jpg'
import rose from '../assets/imgs/workpics/Rosendubusi.jpg'
import joseph from '../assets/imgs/workpics/JosephFelix.jpeg'
import shalom from '../assets/imgs/workpics/shalomokugbeni.jpg'
import hassan from '../assets/imgs/workpics/HassanHuzaifa.jpg'
import amadi from '../assets/imgs/workpics/AmadiGodswill.jpg'
import iruedo from '../assets/imgs/workpics/IruedoChristopher.jpg'
import ogunche from '../assets/imgs/workpics/ogunchefaith.jpeg'
import glory from '../assets/imgs/workpics/GloryObi.jpeg'
import aisha from '../assets/imgs/workpics/AISHAMUSTAPHA.jpg'
import timi from '../assets/imgs/workpics/timioye.jpeg'
import ruth from '../assets/imgs/workpics/ruthozokolo.jpeg'
import sylvia from '../assets/imgs/workpics/SylviaOkedi.jpg'

const teamMembers = [
  { name: 'Hamzat Adebayo', role: 'Software Engineer', img: hamzat, linkedin: 'https://www.linkedin.com/in/hamzat-adebayo/', email: 'hamzatadebayo5@gmail.com' },
  { name: 'Onisola Olufunke', role: 'Data Analyst', img: funmike, linkedin: 'https://www.linkedin.com/in/olufunkeonisola/', email: 'olufunkeonisola@gmail.com' },
  { name: 'Ndubuisi Maryrose', role: 'Product Designer', img: rose, linkedin: 'https://www.linkedin.com/in/ndubuisi-maryrose-', email: 'maryrosendubuisi994@gmail.com' },
  { name: 'Ali Felix', role: 'Product Manager', img: joseph, linkedin: 'http://linkedin.com/in/ali-joseph-ali-19939b233', email: 'alijosephali11@gmail.com' },
  { name: 'Shalom Okugbeni', role: 'Data Analyst', img: shalom, linkedin: 'https://www.linkedin.com/in/shalomokugbeni', email: 'shalomokugbeni@gmail.com' },
  { name: 'Isa Huzaifa', role: 'Cybersecurity Analyst', img: hassan, linkedin: 'https://www.linkedin.com/in/huzaifa-isa-135015180', email: 'Hassanhuzayfa93@gmail.com' },
  { name: 'Amadi Godswill', role: 'Software Engineer', img: amadi, linkedin: 'https://www.linkedin.com/in/uchechukwu-amadi-446b79254', email: 'Uchegwillama@gmail.com' },
  { name: 'Iruedo Christopher', role: 'Python Developer', img: iruedo, linkedin: 'https://www.linkedin.com/in/iruedo-christopher-483882253/', email: 'iruedochristopher1995@gmail.com' },
  { name: 'Oguche Queen', role: 'UI/UX instructor', img: ogunche, linkedin: 'https://www.linkedin.com/in/oguche-queen-faith-b11950276', email: 'oguchequeenfaith10@gmail.com' },
  { name: 'Glory Obi', role: 'Data Analyst / Business Analyst', img: glory, linkedin: 'https://www.linkedin.com/in/glory-obi-yeoki', email: 'gloryobi98@gmail.com' },
  { name: 'Aisha Mustapha', role: 'Data Analyst', img: aisha, linkedin: 'https://www.linkedin.com/in/aisha-mustapha-4973b5317', email: 'amdamboa@gmail.com' },
  { name: 'Oyebamiji Akinkunmi', role: 'Software Developer', img: timi, linkedin: 'https://www.linkedin.com/in/oyebamiji-akinkunmi-a6938a302', email: 'oyebamijiakinkunmi956@gmail.com' },
  { name: 'Ozokolo Ruth', role: 'Data Analyst', img: ruth, linkedin: 'https://www.linkedin.com/in/ruth-ozokolo-976a25215', email: 'ozokoloruth@gmail.com' },
  { name: 'Sylvia Okedi', role: 'UI/UX Instructor', img: sylvia, linkedin: 'https://linkedin.com/in/sylvia-okedi-ojoma', email: 'sylviaikedi4@gmail.com' },
]

const services = [
  { icon: serviceIcon1, title: 'Software Development', desc: 'Transform Your Business with Customized Software Solutions.' },
  { icon: serviceIcon4, title: 'Website Development', desc: 'Elevate Your Online Presence with Stunning Websites.' },
  { icon: serviceIcon8, title: 'Tech Training', desc: 'Empowering individuals and teams with a top notch technological skills.' },
  { icon: chipAi, title: 'Artificial Intelligence', desc: 'Unlock the Power of AI tools to Transform Your Business vision.' },
  { icon: internetSecurity, title: 'Cyber Security', desc: 'Safeguard Your Business with Comprehensive Cyber Security and IT Support.' },
  { icon: hwdIcon6, title: 'Digital Marketing', desc: "Amplify Your Brand's Online Presence with Strategic Digital Marketing." },
  { icon: robotics, title: 'Robotics and Automation', desc: 'Streamlining operations with state-of-the-art automation solutions.' },
  { icon: hwdIcon4, title: 'Cloud Computing', desc: 'Unlock the Full Potential of Cloud Computing with Our Expert Guidance' },
  { icon: serviceIcon2, title: 'E-Commerce Solution', desc: 'Seamlessly Integrate E-commerce Solutions for Uninterrupted Sales.' },
  { icon: serviceIcon5, title: 'IT Support and Consultancy', desc: 'We offers expert assistance for your IT issues and technological solutions.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Semester Integrated Technologies</h5>
                <h1 className="section-title fade-in">We are the Architects of the <em>Future Tech Ecosystem</em>.</h1>
                <p>Semester Tech was born from a singular realization: The gap between technical education and industrial execution was too wide. We didn't just build a school; we built a workforce. We didn't just build an agency; we built a standard.</p>
              </div>
              <div className="hero-company-boxes">
                <div className="hero-company-box simple-shadow"><h1>200+</h1><h3>Projects</h3><p>We are spread around the world.</p></div>
                <div className="hero-company-box simple-shadow"><h1>100%</h1><h3>Client Satisfaction</h3><p>Our clients are happy with our service.</p></div>
                <div className="hero-company-box simple-shadow"><h1>120+</h1><h3>Trained Experts</h3><p>Our workforce is our greatest asset.</p></div>
                <div className="hero-company-box simple-shadow"><h1>2018</h1><h3>We Established On</h3><p>Our company has a great history.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <ClientMarquee />

      {/* The Semester Story */}
      <section className="story-area">
        <div className="custom-container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-5">
              <h5 className="section-subtitle">THE ORIGIN</h5>
              <h1 className="section-title">From a Single Line of Code to a 120+ Expert Workforce.</h1>
            </div>
            <div className="col-12 col-md-7 story-text">
              <p>Our journey began with a mission to bridge the divide between "learning" and "doing." We saw talented individuals with no path to industry, and businesses with no access to reliable tech talent.</p>
              <p>Semester Tech solved both by creating a loop: We train the talent to the highest global standards (The Academy) and then deploy that same talent to solve complex business problems (The Agency).</p>
              <div className="story-loop">
                <p>This <strong>circular architecture</strong> ensures that every project we deliver is backed by fresh innovation and rigorous academic discipline — a standard no traditional agency or school can replicate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Service */}
      <section className="company-service-area">
        <div className="custom-container">
          <div className="hero-service-about">
            <div className="section-header d-flex align-items-center justify-content-between w-full">
              <div className="left">
                <h5 className="section-subtitle">Semester technologies</h5>
                <h1 className="section-title">About Semester Technologies</h1>
                <p>Contact us today to begin your journey!</p>
              </div>
              <Link to="/contact" className="theme-btn">Contact Us</Link>
            </div>
            <img src={heroCompanyAbout} alt="Service About" />
            <div className="hero-service-about-body">
              <p>Semester Integrated Technologies, your trusted partner in innovative IT solutions. We specialize in delivering cutting-edge services tailored to meet the unique needs of businesses across various industries. Our commitment to excellence and customer satisfaction drives us to provide top-notch solutions that empower your business to thrive in the digital era.</p>
              <ul>
                <li><i className="las la-check"></i> Infrastructure Management</li>
                <li><i className="las la-check"></i> IT Support and Consultancy</li>
                <li><i className="las la-check"></i> E-Commerce Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="pillars-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">CORE PHILOSOPHY</h5>
            <h1 className="section-title">Our 4 Pillars.</h1>
            <p>The principles that govern every decision, every line of code, and every client relationship.</p>
          </div>
          <div className="row g-4">
            {[
              { num: '01', title: 'Human-Centric Engineering', desc: "We believe tech should serve people, not just exist. Whether it's an app or a legal document, it's built for human impact and inclusive growth." },
              { num: '02', title: 'Radical Transparency', desc: 'Our 6-step workflow and searchable rate cards mean you never have to guess our progress or our pricing. We lead with honesty.' },
              { num: '03', title: 'Excellence as a Standard', desc: 'We don\'t settle for "functional." Every project undergoes internal vetting by our senior leads to ensure it meets the Semester Standard.' },
              { num: '04', title: 'Future-Proofing', desc: 'Technology moves fast. Our ecosystem moves faster, constantly updating our stack and syllabus to stay ahead of the curve.' },
            ].map(p => (
              <div className="col-12 col-sm-6 col-lg-3" key={p.num}>
                <div className="pillar-card">
                  <div className="pillar-num">{p.num}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="architecture-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">HOW WE OPERATE</h5>
            <h1 className="section-title">The Architecture.</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '12px auto 0' }}>Three audiences. One ecosystem. Infinite impact.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: 'la-graduation-cap', for: 'For Students', title: 'Architecture of Growth', desc: 'A structured path from curiosity to professional mastery. We provide the training, the mentorship, and the industry placement to launch careers that last.' },
              { icon: 'la-building', for: 'For Clients', title: 'Architecture of Success', desc: 'The technical and legal infrastructure needed to scale. From CAC registration to enterprise software, we are the one-stop engine for growth.' },
              { icon: 'la-handshake', for: 'For Partners', title: 'Architecture of Impact', desc: 'Strategic collaborations that drive the digital economy forward. We build joint ventures and alliances that create lasting value for the ecosystem.' },
            ].map((a, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="arch-card">
                  <div className="arch-icon"><i className={`las ${a.icon}`}></i></div>
                  <h4>{a.for}</h4>
                  <h3>{a.title}</h3>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="service-area service-black-area py-5">
        <div className="custom-container">
          <div className="service-section-header section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h5 className="section-subtitle">WHAT WE'RE OFFERING</h5>
              <h1 className="section-title">Dealing in all professional <br />IT services.</h1>
            </div>
            <p>One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.</p>
          </div>
          <div className="services-list mb-3 d-flex">
            {services.slice(0, 5).map((s, i) => (
              <div className="service-card simple-shadow" key={i}>
                <img src={s.icon} alt="Service Icon" className="service-icon" />
                <h3><Link to="/services">{s.title}</Link></h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="services-list d-flex">
            {services.slice(5).map((s, i) => (
              <div className="service-card simple-shadow" key={i}>
                <img src={s.icon} alt="Service Icon" className="service-icon" />
                <h3><Link to="/services">{s.title}</Link></h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="our-team-2-area">
        <div className="custom-container">
          <div className="section-header our-team-2-header d-flex align-items-center justify-content-between w-full">
            <img className="animation-slide-right bg-shape" src={bgShape10} alt="Shape" />
            <div className="left">
              <h5 className="section-subtitle">OUR TEAM</h5>
              <h1 className="section-title">Led by Visionaries. Powered by 120+ Experts.</h1>
              <p>Behind every line of code and every legal filing is a team of specialists obsessed with perfection.</p>
            </div>
            <Link to="/contact" className="theme-btn">Book an appointment with our us now</Link>
          </div>
          <div className="our-team-2-lists">
            {teamMembers.map((m, i) => (
              <div className="our-team-2-card" key={i}>
                <div className="img-box"><img src={m.img} alt="Team" /></div>
                <h2>{m.name}</h2>
                <span className="designation">{m.role}</span>
                <ul className="social-links d-flex align-items-center">
                  <li><a href={m.linkedin}><i className="iconoir-linkedin"></i></a></li>
                  <li><a href={`mailto:${m.email}`}><i className="iconoir-mail"></i></a></li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Why Unique */}
      <section className="about-service3-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="img-box"><img src={aboutService3} alt="About" /></div>
            <div className="content-box">
              <h1>Why are we so unique?</h1>
              <p>In a world where cookie-cutter solutions are the norm, we dare to be different. At Semester Technologies, we believe that every individual, every team, and every organization is unique, with distinct challenges and aspirations.</p>
              <p>That's why we don't believe in a one-size-fits-all approach. Instead, our experts work closely with you to understand your specific needs, goals, and pain points. We then tailor our services to address these unique requirements, ensuring that you receive solutions that are truly yours.</p>
              <ul>
                <li><i className="las la-check"></i> Innovative Solutions</li>
                <li><i className="las la-check"></i> Quick Response</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="custom-container">
          <h1>Let's Build the Future, Together.</h1>
          <p>Whether you want to learn, build, or partner, you are part of the architecture.</p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link to="/register" className="btn-white">Join the Academy <i className="iconoir-arrow-up-right"></i></Link>
            <Link to="/contact" className="btn-outline-white">Work with the Agency <i className="iconoir-arrow-up-right"></i></Link>
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
