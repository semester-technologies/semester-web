import { useState } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import ClientMarquee from '../components/ClientMarquee'

import heroCompanyAbout from '../assets/imgs/hero-company-about.jpg'
import serviceIcon1 from '../assets/imgs/service-icon-1.svg'
import serviceIcon2 from '../assets/imgs/service-icon-2.svg'
import serviceIcon3 from '../assets/imgs/service-icon-3.svg'
import serviceIcon4 from '../assets/imgs/service-icon-4.svg'
import serviceIcon5 from '../assets/imgs/service-icon-5.svg'
import serviceIcon8 from '../assets/imgs/service-icon-8.svg'
import chipAi from '../assets/imgs/chip-ai-svgrepo-com.svg'
import internetSecurity from '../assets/imgs/internet-security-svgrepo-com.svg'
import robotics from '../assets/imgs/robotics-svgrepo-com.svg'
import hwdIcon1 from '../assets/imgs/hwd-icon-1.svg'
import hwdIcon2 from '../assets/imgs/hwd-icon-2.svg'
import hwdIcon3 from '../assets/imgs/hwd-icon-3.svg'
import hwdIcon4 from '../assets/imgs/hwd-icon-4.svg'
import hwdIcon5 from '../assets/imgs/hwd-icon-5.svg'
import hwdIcon6 from '../assets/imgs/hwd-icon-6.svg'
import bgShape1 from '../assets/imgs/bg-shape-1.svg'
import bgShape3 from '../assets/imgs/bg-shape-3.svg'
import bgShape10 from '../assets/imgs/bg-shape-10.svg'
import bgShapeFeature from '../assets/imgs/bg-shape-feature.svg'
import aboutService3 from '../assets/imgs/about-service-3.png'
import testimonial1 from '../assets/imgs/testimonial-1.jpg'

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

const courseCareerPaths = {
  'Software Development': {
    icon: serviceIcon1,
    courses: [
      { title: 'Web Design', desc: 'HTML, CSS, JavaScript, React.js.' },
      { title: 'Web Development', desc: 'Python (Django, Flask), Node.js, and PHP (Laravel).' },
      { title: 'Mobile Application Development', desc: 'Native apps (Java/Kotlin for Android, Swift for iOS) Hybrid apps (Flutter, React Native).' },
      { title: 'Desktop Application Development', desc: 'Java, Python, C# and Javascript.' },
    ],
    summary: 'At Semester Tech, you will learn how to create a dynamic, responsive and user friendly website and applications. We have tech expert that will teach and guide you on how to design a stunning website, build a robust web application also to develop a mobile and desktop apps.',
    cta: 'Enroll Now',
    ctaLink: '/services',
  },
  'Data Science': {
    icon: serviceIcon2,
    courses: [
      { title: 'Data Analysis', desc: 'Excel, Power BI, and SQL.' },
      { title: 'Data Analysis with Python', desc: 'Python libraries like Pandas, NumPy, and Matplotlib.' },
      { title: 'Data Science and Machine Learning', desc: 'Predictive modeling, supervised/unsupervised learning, and AI algorithms.' },
      { title: 'Artificial Intelligence', desc: 'Deep learning, natural language processing (NLP), and computer vision.' },
    ],
    summary: 'Semester Integrated Technologies, you will learn how to analyze, visualize, and derive insights from data to drive decision-making and innovation then also to Unlock the power of data with our comprehensive Data Science programs.',
    cta: 'Enroll Now',
    ctaLink: '/services',
  },
  'Cyber Security': {
    icon: serviceIcon3,
    courses: [
      { title: 'Cyber Security', desc: 'Cybersecurity frameworks, penetration testing, network administration, security tools and practices also python programming.' },
      { title: 'Certified Ethical Hacking', desc: 'Footprint and reconnaissance, enumeration, vulnerability analysis, scanning networks, social Engineering, ethical hacking tools and practices.' },
    ],
    summary: 'At Semester Integrated Technologies, we provide in-depth training on network security, encryption, risk management, and cybersecurity frameworks also our programs prepare you for roles such as Security Analyst, Network Security Engineer, penetration tester, ethical hacker and Cyber Risk Consultant.',
    cta: 'Enroll Now',
    ctaLink: '/services',
  },
  'Robotics': {
    icon: serviceIcon4,
    courses: [
      { title: 'Robotics', desc: 'Mechanical design, embedded programming, AI integration, and automation.' },
      { title: 'Internet of Things (IOT)', desc: 'IOT protocols, sensor networks, cloud computing and data analytics.' },
      { title: 'Embedded Systems', desc: 'Microcontroller programming, real-time operating systems (RTOS), circuit design, and firmware development.' },
      { title: 'Smart Home Automation', desc: 'Home automation protocols, IoT integration, AI-driven smart assistants, and wireless communication.' },
    ],
    summary: 'At Semester Integrated Technologies, we shall equip you with the skills to design, build, and program intelligent robotic systems. Also train you mechanical design, embedded programming, AI integration and automation and prepare you for careers in industrial automation, healthcare robotics, drone technology, and AI-driven robotics solutions.',
    cta: 'Enroll Now',
    ctaLink: '/services',
  },
  'Management': {
    icon: serviceIcon5,
    courses: [
      { title: 'Digital Marketing and Branding', desc: 'SEO, social media marketing, content strategy, paid advertising, and brand storytelling.' },
      { title: 'Product Design', desc: 'UI/UX principles, wireframing, prototyping and human-computer interaction also tools like Figma, Adobe XD, and Sketch.' },
      { title: 'Product Management', desc: 'Product roadmaps, conduct market research, define features, and oversee product lifecycles.' },
      { title: 'Project Management', desc: 'Agile, Scrum, PMP, and PRINCE2 methodologies.' },
    ],
    summary: 'At Semester Integrated Technologies, you will take your organization to the level with our comprehensive management program from elevating your Online presence and crafting user-centered digital experiences, to developing successful products and delivering Projects efficiently, our expert-led training equip you with the skills to drive business growth and achieve success.',
    cta: 'Book a Strategy Session',
    ctaLink: '/contact',
  },
}

const testimonials = [
  { text: "The 6-step workflow changed how we view tech projects. Semester Tech didn't just build our app; they handled the legal registration and the monetization strategy. A complete package.", author: 'CEO, FinCorp Ltd.', role: 'Enterprise Client' },
  { text: "I came here to learn Python. Six months later, I'm working on enterprise-level architectures. Semester Tech is a career rocket ship.", author: "Alumni, Class of '25", role: 'Software Developer' },
  { text: 'Their ability to train our corporate team while simultaneously upgrading our IT infrastructure is unmatched. They are the engine of our growth.', author: 'Director, NGO Initiative', role: 'Partner' },
  { text: 'Semester Technologies has been an invaluable partner in our digital transformation journey. Their tailored solutions, expertise, and dedication have helped us achieve remarkable results.', author: 'Glory', role: 'Data Analyst' },
  { text: 'SemesterTech delivered an outstanding web application that transformed our business operations. Their expertise, attention to detail, and support were exceptional.', author: 'Endurance', role: 'Project Manager' },
]

const faqItems = [
  { q: 'Do you offer installment payments for large projects?', a: 'Yes. Our Service Agreement outlines a milestone-based payment structure. You pay as we deliver, ensuring trust and transparency.' },
  { q: 'Can I hire you just for design, or do I need the full package?', a: 'Our 200+ services are modular. You can hire us for a Logo Design (50k) today and Web Development next year. We scale with you.' },
  { q: 'How do you handle legal registrations?', a: 'We have a dedicated Legal Team that handles Name Research, CAC Registration, and TIN generation directly, ensuring your business is compliant from Day 1.' },
  { q: 'Is the Academy physical or virtual?', a: 'We offer both. Our Instructor-Led Classes provide physical collaboration, while our virtual mentorship allows for global access.' },
]

const featureCards = [
  { icon: hwdIcon1, title: 'Bridging the Gap', desc: 'Connecting People, Technology, and Business. We strive to bridge the gap between innovation and practicality, making technology accessible and beneficial for all.' },
  { icon: hwdIcon4, title: 'Empowerment', desc: 'Unleashing Potential, Enhancing Lives. We empower individuals, teams, and organizations to reach their full potential through technology, training, and support.' },
  { icon: hwdIcon6, title: 'Growth', desc: 'Fostering Continuous Learning and Improvement. We prioritize growth, embracing new ideas, technologies, and challenges to drive innovation and excellence.' },
  { icon: hwdIcon2, title: 'Innovative Solutions', desc: "Transforming Challenges into Opportunities. We develop cutting-edge solutions that address real-world problems, making a meaningful impact on people's lives and businesses." },
  { icon: hwdIcon1, title: 'Strategic Partnerships', desc: 'Collaborating for Mutual Success. We build strong, lasting partnerships with our clients, vendors, and community, working together to achieve shared goals and create a brighter future.' },
  { icon: hwdIcon4, title: 'Customer Support', desc: 'Your Success is Our Priority. We are committed to delivering exceptional customer experiences, providing timely support, and ensuring seamless solutions that meet your evolving needs.' },
  { icon: hwdIcon6, title: 'Teamwork', desc: 'United We Thrive. We foster a culture of collaboration, open communication, and mutual respect, recognizing that together, we can achieve greatness and drive success.' },
  { icon: hwdIcon2, title: 'Ethical', desc: 'We are aware of our impact on the environment. We provide an honest and consultative approach to our sales cycle and support processes to ensure we are advising customer on the best solutions for them.' },
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('Software Development')
  const [openFaq, setOpenFaq] = useState(null)
  const [quizStep, setQuizStep] = useState(1)
  const [quizAudience, setQuizAudience] = useState(null)
  const [quizResult, setQuizResult] = useState(null)
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const selectAudience = (type) => {
    setQuizAudience(type)
    if (type === 'business') {
      setQuizStep(2)
    } else {
      const msgs = {
        student: 'We recommend our Academy programs. Explore our courses in Frontend Engineering, Data Analysis, and more.',
        ngo: 'We recommend our Partnership & Corporate Training suite. Book a strategy session with our team.',
      }
      setQuizResult(msgs[type])
    }
  }

  const showQuizResult = (type) => {
    const messages = {
      legal: 'We recommend our Business Development Suite. Start with Company Registration (80k) — CAC, TIN, and Copyright handled for you.',
      visibility: "We recommend our Digital Marketing & SEO Package. We'll boost your brand's visibility from day one.",
      infra: 'We recommend our Bespoke Engineering Suite. Custom Web & Mobile App built by our in-house experts.',
    }
    setQuizResult(messages[type])
  }

  const prevTestimonial = () => setTestimonialIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const nextTestimonial = () => setTestimonialIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const activePath = courseCareerPaths[activeTab]

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

      {/* For Clients */}
      <section style={{ padding: '80px 0' }}>
        <div className="custom-container">
          <div className="row align-items-end mb-5 g-4">
            <div className="col-12 col-md-6">
              <h5 className="section-subtitle">FOR CLIENTS</h5>
              <h1 className="section-title">From Napkin Sketch to<br />Enterprise Scale.</h1>
            </div>
            <div className="col-12 col-md-6">
              <p className="mb-0" style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7 }}>
                You have the vision; we have the engineering. Semester Tech offers over 200 specialized services designed to take you from Company Registration to Global Monetization.
              </p>
            </div>
          </div>
          <ul className="segment-bullets mb-4">
            <li><strong>Legal &amp; Legitimacy:</strong> We handle your CAC, TIN, and Copyrights before we write a line of code.</li>
            <li><strong>Bespoke Engineering:</strong> Custom Web &amp; Mobile Apps built by the experts we trained ourselves.</li>
            <li><strong>Monetization First:</strong> We integrate gateways and ad strategies to ensure ROI.</li>
          </ul>
          <h5 className="section-subtitle text-center mb-3">OUR 6-STEP WORKFLOW</h5>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 mb-4">
            <div className="step-box">1. Request</div>
            <span className="step-arrow d-none d-sm-inline">&rarr;</span>
            <div className="step-box">2. Intake</div>
            <span className="step-arrow d-none d-sm-inline">&rarr;</span>
            <div className="step-box">3. Rate Card</div>
            <span className="step-arrow d-none d-sm-inline">&rarr;</span>
            <div className="step-box">4. Agreement</div>
            <span className="step-arrow d-none d-sm-inline">&rarr;</span>
            <div className="step-box">5. Execution</div>
            <span className="step-arrow d-none d-sm-inline">&rarr;</span>
            <div className="step-box">6. Handover</div>
          </div>
          <div className="btns-group d-flex justify-content-center gap-3">
            <Link to="/services" className="theme-btn">View Client Services</Link>
            <Link to="/contact" className="theme-btn2">Fill Project Intake Form <i className="iconoir-arrow-up-right"></i></Link>
          </div>
        </div>
      </section>

      {/* How We Do */}
      <section className="how-we-do-area mb-2 mb-lg-5">
        <div className="custom-container">
          <div className="custom-row">
            <img src={bgShape1} alt="Shape" className="animation-slide-left how-we-do-bg" />
            <div className="how-we-do-left-content">
              <div className="top">
                <h5 className="section-subtitle">Our Model</h5>
                <h1 className="section-title">How we do</h1>
                <p>Save time and money with our powerful method.</p>
              </div>
              <Link to="/services" className="theme-btn">Learn More <i className="iconoir-arrow-up-right"></i></Link>
            </div>
            <div className="how-we-do-right-content">
              <div className="how-we-do-items d-flex align-items-center justify-content-center">
                <div className="how-we-do-card">
                  <div className="circle-shape"></div>
                  <div className="line-shape"></div>
                  <div className="how-we-do-icon"><img src={hwdIcon1} alt="How we do" /></div>
                  <div className="how-we-do-content"><h4>Brainstroming</h4><p>Ideas</p></div>
                </div>
                <div className="how-we-do-card">
                  <div className="circle-shape"></div>
                  <div className="line-shape"></div>
                  <div className="how-we-do-icon"><img src={hwdIcon2} alt="How we do" /></div>
                  <div className="how-we-do-content"><h4>Product</h4><p>Design</p></div>
                </div>
                <div className="how-we-do-card">
                  <div className="circle-shape"></div>
                  <div className="line-shape"></div>
                  <div className="how-we-do-icon"><img src={hwdIcon3} alt="How we do" /></div>
                  <div className="how-we-do-content"><h4>Front-End</h4><p>Development</p></div>
                </div>
              </div>
              <div className="how-we-do-items d-flex align-items-center justify-content-center">
                <div className="how-we-do-card">
                  <div className="circle-shape"></div>
                  <div className="line-shape"></div>
                  <div className="how-we-do-icon"><img src={hwdIcon4} alt="How we do" /></div>
                  <div className="how-we-do-content"><h4>SEO</h4><p>Optimization</p></div>
                </div>
                <div className="how-we-do-card">
                  <div className="circle-shape"></div>
                  <div className="line-shape"></div>
                  <div className="how-we-do-icon"><img src={hwdIcon5} alt="How we do" /></div>
                  <div className="how-we-do-content"><h4>Back-End</h4><p>Development</p></div>
                </div>
              </div>
              <div className="how-we-do-items d-flex align-items-center justify-content-center">
                <div className="how-we-do-card">
                  <div className="circle-shape"></div>
                  <div className="line-shape"></div>
                  <div className="how-we-do-icon"><img src={hwdIcon6} alt="How we do" /></div>
                  <div className="how-we-do-content"><h4>Digital</h4><p>Marketing</p></div>
                </div>
              </div>
            </div>
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

      {/* For Students */}
      <section className="bg-light-soft" style={{ padding: '100px 0' }}>
        <div className="custom-container">
          <div className="row align-items-end mb-5 g-4">
            <div className="col-12 col-md-6">
              <h5 className="section-subtitle">FOR STUDENTS</h5>
              <h1 className="section-title">Don't Just Learn Code.<br />Build a Future.</h1>
            </div>
            <div className="col-12 col-md-6">
              <p className="mb-0" style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7 }}>
                At Semester Tech, you don't just watch videos — you work on live projects. Join a community of over 120 graduates who are now leading the industry.
              </p>
            </div>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="service-card simple-shadow h-100">
                <img src={hwdIcon1} alt="" className="service-icon" />
                <h3>Instructor-Led Classes</h3>
                <p>Collaborative, cohort-based learning with hands-on projects.</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="service-card simple-shadow h-100">
                <img src={hwdIcon2} alt="" className="service-icon" />
                <h3>One-on-One Mentorship</h3>
                <p>Personalized guidance to fast-track your skills and career.</p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="service-card simple-shadow h-100">
                <img src={hwdIcon5} alt="" className="service-icon" />
                <h3>Consultation</h3>
                <p>Unsure of your path? We guide you to your strength.</p>
              </div>
            </div>
          </div>
          <p className="fw-semibold mb-3" style={{ color: 'var(--text-heading)', fontSize: '15px' }}>
            Key Courses: Frontend Engineering &nbsp;&bull;&nbsp; Product Design (UI/UX) &nbsp;&bull;&nbsp; Data Analysis &nbsp;&bull;&nbsp; Digital Marketing
          </p>
          <div className="btns-group">
            <Link to="/services" className="theme-btn">Explore Courses</Link>
            <Link to="/login" className="theme-btn2">Student Portal Login <i className="iconoir-arrow-up-right"></i></Link>
          </div>
        </div>
      </section>

      {/* Course Career Paths */}
      <section className="case-studio-area">
        <div className="custom-container">
          <div className="case-studio-header text-center">
            <h5 className="section-subtitle">TRAIN WITH US</h5>
            <h1 className="section-title">Our Course Career Paths</h1>
          </div>
          <div className="case-studio">
            <ul className="nav nav-pills case-studio-tabs" role="tablist">
              {Object.keys(courseCareerPaths).map((tab) => (
                <li className="nav-item" key={tab}>
                  <button
                    className={`nav-link${activeTab === tab ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    role="tab"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
            <div className="tab-content case-studio-tab-content">
              <div className="tab-pane fade show active">
                <div className="case-studio-body d-flex">
                  <div className="left d-flex flex-1">
                    <div className={`row row-cols-1 ${activePath.courses.length <= 2 ? 'row-cols-lg-1' : 'row-cols-lg-2'} g-3`}>
                      {activePath.courses.map((c, i) => (
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
                      <img src={activePath.icon} alt="ICON" />
                      <h3>{activeTab}</h3>
                      <p>{activePath.summary}</p>
                      <Link to={activePath.ctaLink} className="theme-btn btn-sm" style={{ width: 'auto' }}>
                        {activePath.cta} <i className="iconoir-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Partners */}
      <section className="partners-section" style={{ padding: '100px 0' }}>
        <div className="custom-container">
          <div className="row align-items-end g-4 mb-5">
            <div className="col-12 col-md-6">
              <h5 className="section-subtitle">FOR PARTNERS</h5>
              <h1 className="section-title">A Strategic Alliance<br />for Impact.</h1>
            </div>
            <div className="col-12 col-md-6">
              <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7 }} className="mb-0">
                We partner with visionaries, NGOs, and enterprises to drive digital transformation. Whether you need corporate training for your workforce or a technical partner for your NGO's global reach, Semester Tech provides the infrastructure.
              </p>
            </div>
          </div>
          <Link to="/contact" className="theme-btn">Book a Strategy Session <i className="iconoir-arrow-up-right"></i></Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle" style={{ color: 'var(--text-secondary)' }}>FEATURED WORK</h5>
            <h1 className="section-title">We Don't Just Claim Excellence. We Build It.</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginTop: '12px' }}>Explore a few of the 200+ projects deployed this year.</p>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="project-card">
                <span className="project-tag">Mobile Application Development</span>
                <h3>The E-Commerce Engine</h3>
                <p>Built a 900k+ Ecommerce Mobile Application with seamless Payment Gateway Integration for a Lagos-based retail giant. Result: 300% increase in mobile sales.</p>
                <Link to="/portfolio">View Case Study &rarr;</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="project-card">
                <span className="project-tag">Full Spectrum Branding</span>
                <h3>The Corporate Identity</h3>
                <p>Executed a complete rebrand (250k package) for a fintech startup, including Strategic Name Research and Company Registration.</p>
                <Link to="/portfolio">View Design Portfolio &rarr;</Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="project-card">
                <span className="project-tag">Web Development &amp; Monetization</span>
                <h3>The Global NGO Portal</h3>
                <p>Developed a multilingual donation platform for an NGO, integrating global payment gateways to accept 15 currencies.</p>
                <Link to="/portfolio">View Web Solutions &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Semester Standard */}
      <section style={{ padding: '100px 0' }}>
        <div className="custom-container">
          <div className="row mb-5">
            <div className="col-12 col-md-8">
              <h5 className="section-subtitle">THE SEMESTER STANDARD</h5>
              <h1 className="section-title">The "120+ Expert" Advantage.</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7, marginTop: '16px' }}>
                Most agencies outsource your work to random freelancers. We don't. Every project at Semester Tech is built by a team of experts we trained ourselves. Because we control the education (The Academy), we guarantee the execution (The Agency).
              </p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-md-4">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-circle">&#10003;</div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ fontSize: '16px' }}>Internal Quality Control</h5>
                  <p className="mb-0" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>No outsourcing. Every deliverable is built in-house by our trained experts.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-circle">&#9881;</div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ fontSize: '16px' }}>Standardized Code</h5>
                  <p className="mb-0" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Clean, maintainable software architecture every time.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4">
              <div className="d-flex align-items-start gap-3">
                <div className="icon-circle">&#9889;</div>
                <div>
                  <h5 className="fw-bold mb-1" style={{ fontSize: '16px' }}>Speed</h5>
                  <p className="mb-0" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>A workforce of 120+ means no bottlenecks. Your deadlines are our priority.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Excellence */}
      <section className="feature2-area">
        <img src={bgShapeFeature} alt="Shape" className="bg-shape" />
        <div className="custom-container">
          <div className="custom-row">
            <div className="feature2-content">
              <div className="feature2-header">
                <h5 className="section-subtitle">CONSULTING EXCELLENCE</h5>
                <h1 className="section-title">Build a tech solution that <br />shape your digital world.</h1>
              </div>
              <div className="feature2-content-body d-flex flex-wrap g-5">
                {featureCards.map((card, i) => (
                  <div className="feature2-card" key={i}>
                    <span className="icon"><img src={card.icon} alt="Icon" /></span>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </div>
                ))}
              </div>
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

      {/* Testimonials */}
      <section className="testimonial-area">
        <div className="custom-container">
          <div className="section-header text-center mb-5">
            <h5 className="section-subtitle mb-2">TESTIMONIALS</h5>
            <h1 className="section-title mb-3">Trusted by Visionaries.</h1>
            <p style={{ margin: 'auto', color: 'var(--text-secondary)', fontSize: '17px' }}>
              Their professionalism and commitment to our success were evident throughout the entire process.
            </p>
          </div>
        </div>
        <div className="testimonial-slider-wrap">
          <div className="testimonial-slider">
            <div className="testimonial-item p-2 p-lg-3">
              <div className="testimonial-item-body">
                <img className="animation-slide-right bg-shape" src={bgShape3} alt="Shape" />
                <p>{testimonials[testimonialIndex].text}</p>
                <div className="author-box d-flex align-items-center">
                  <img src={testimonial1} alt="Testimonial" />
                  <div className="author-box-content">
                    <h4>{testimonials[testimonialIndex].author}</h4>
                    <p>{testimonials[testimonialIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-prev" onClick={prevTestimonial}>
            <i className="iconoir-arrow-left"></i>
          </div>
          <div className="swiper-button-next" onClick={nextTestimonial}>
            <i className="iconoir-arrow-right"></i>
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

      {/* Our Story Teaser */}
      <section className="bg-light-soft" style={{ padding: '100px 0' }}>
        <div className="custom-container text-center">
          <h5 className="section-subtitle">OUR STORY</h5>
          <h1 className="section-title">We Are the Architects.</h1>
          <p className="mx-auto mb-4" style={{ maxWidth: '600px', color: 'var(--text-secondary)', fontSize: '17px', lineHeight: 1.7, marginTop: '16px' }}>
            Semester Tech started with a simple mission: to bridge the gap between learning technology and using it to solve real-world problems. Today, we are a dual-engine firm — a Talent Factory that produces elite experts, and a Solutions Agency that deploys them to solve complex business challenges.
          </p>
          <Link to="/about" className="theme-btn">Read Our Full Story <i className="iconoir-arrow-up-right"></i></Link>
        </div>
      </section>

      {/* Start Your Journey Quiz */}
      <section style={{ padding: '100px 0', background: 'var(--surface_alt)' }}>
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">START YOUR JOURNEY</h5>
            <h1 className="section-title">Not Sure Where to Start?</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '17px', marginTop: '12px' }}>
              Tell us your goal, and we'll guide you to the right service.
            </p>
          </div>
          <div className="quiz-box">
            {quizStep === 1 && !quizResult && (
              <div>
                <p className="quiz-question">I represent...</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <button className={`quiz-option${quizAudience === 'business' ? ' active' : ''}`} onClick={() => selectAudience('business')}>A Business / Startup</button>
                  <button className={`quiz-option${quizAudience === 'student' ? ' active' : ''}`} onClick={() => selectAudience('student')}>Myself (Student)</button>
                  <button className={`quiz-option${quizAudience === 'ngo' ? ' active' : ''}`} onClick={() => selectAudience('ngo')}>An Organization / NGO</button>
                </div>
              </div>
            )}
            {quizStep === 2 && !quizResult && (
              <div>
                <p className="quiz-question">My immediate priority is...</p>
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <button className="quiz-option" onClick={() => showQuizResult('legal')}>Legitimacy (Registration/Legal)</button>
                  <button className="quiz-option" onClick={() => showQuizResult('visibility')}>Visibility (Ads/SEO)</button>
                  <button className="quiz-option" onClick={() => showQuizResult('infra')}>Infrastructure (Web/App Build)</button>
                </div>
              </div>
            )}
            {quizResult && (
              <div className="quiz-result" style={{ display: 'block', marginTop: '16px' }}>
                <p>{quizResult}</p>
                <Link to="/contact" className="theme-btn">Start This Path <i className="iconoir-arrow-up-right"></i></Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '100px 0' }}>
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">FAQ</h5>
            <h1 className="section-title">Frequently Asked Questions</h1>
          </div>
          <div className="mx-auto" style={{ maxWidth: '720px' }}>
            {faqItems.map((item, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <div className="faq-question" onClick={() => toggleFaq(i)}>
                  {item.q}
                  <span>{openFaq === i ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  {item.a}
                </div>
              </div>
            ))}
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
