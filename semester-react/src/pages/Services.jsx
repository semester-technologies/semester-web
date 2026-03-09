import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

import bgShape1 from '../assets/imgs/bg-shape-1.svg'
import heroOverviewAbout from '../assets/imgs/hero-overview-about.jpg'
import aboutService2 from '../assets/imgs/about-service-2.png'
import bgShape3 from '../assets/imgs/bg-shape-3.svg'
import testimonial1 from '../assets/imgs/testimonial-1.jpg'

import serviceIcon1 from '../assets/imgs/service-icon-1.svg'
import serviceIcon2 from '../assets/imgs/service-icon-2.svg'
import serviceIcon3 from '../assets/imgs/service-icon-3.svg'
import serviceIcon4 from '../assets/imgs/service-icon-4.svg'
import serviceIcon5 from '../assets/imgs/service-icon-5.svg'
import serviceIcon8 from '../assets/imgs/service-icon-8.svg'
import chipAi from '../assets/imgs/chip-ai-svgrepo-com.svg'
import internetSecurity from '../assets/imgs/internet-security-svgrepo-com.svg'
import hwdIcon4 from '../assets/imgs/hwd-icon-4.svg'
import hwdIcon6 from '../assets/imgs/hwd-icon-6.svg'
import robotics from '../assets/imgs/robotics-svgrepo-com.svg'

const rateData = [
  { name: "Company Registration (CAC)", price: "From \u20A680,000" },
  { name: "TIN Generation", price: "Included in CAC package" },
  { name: "Legal Documentation / Terms of Service", price: "Custom quote" },
  { name: "Business Architecture / Roadmap", price: "Custom quote" },
  { name: "Logo & Identity Design", price: "From \u20A650,000" },
  { name: "UI/UX Research & Design", price: "From \u20A6150,000" },
  { name: "Marketing Collaterals / Pitch Deck", price: "\u20A630,000 \u2013 \u20A6250,000" },
  { name: "3D Product Visualization", price: "Custom quote" },
  { name: "Bespoke Web Application", price: "Custom quote" },
  { name: "Mobile App Development", price: "From \u20A6900,000" },
  { name: "E-commerce System", price: "Custom quote" },
  { name: "API Integration & Automation", price: "Custom quote" },
  { name: "SEO Architecture Upgrade", price: "From \u20A650,000" },
  { name: "Google & Social Ads Management", price: "10\u201315% of ad spend" },
  { name: "Google Recognition / Verification", price: "\u20A665,000" },
  { name: "Monetization Strategy", price: "Custom quote" },
  { name: "System Audit & Refactoring", price: "From \u20A6150,000" },
  { name: "Legal Launchpad Bundle", price: "\u20A680,000 \u2013 \u20A6150,000" },
  { name: "Digital MVP Bundle", price: "From \u20A61,500,000" },
  { name: "Growth Engine Bundle", price: "From \u20A6500,000" },
]

const serviceCards = [
  { icon: serviceIcon1, title: 'Software Development', desc: 'Transform Your Business with Customized Software Solutions.' },
  { icon: serviceIcon4, title: 'Website Development', desc: 'Elevate Your Online Presence with Stunning Websites.' },
  { icon: serviceIcon8, title: 'Tech Training', desc: 'Empowering individuals and teams with a top notch technological skills.' },
  { icon: chipAi, title: 'Artificial Intelligence', desc: 'Unlock the Power of AI tools to Transform Your Business vision.' },
  { icon: internetSecurity, title: 'Cyber Security', desc: 'Safeguard Your Business with Comprehensive Cyber Security and IT Support.' },
  { icon: hwdIcon6, title: 'Digital Marketing', desc: "Amplify Your Brand's Online Presence with Strategic Digital Marketing." },
  { icon: robotics, title: 'Robotics and Automation', desc: 'Streamlining operations with state-of-the-art automation solutions.' },
  { icon: hwdIcon4, title: 'Cloud Computing', desc: 'Unlock the Full Potential of Cloud Computing with Our Expert Guidance.' },
  { icon: serviceIcon2, title: 'E-Commerce Solution', desc: 'Seamlessly Integrate E-commerce Solutions for Uninterrupted Sales.' },
  { icon: serviceIcon5, title: 'IT Support and Consultancy', desc: 'We offers expert assistance for your IT issues and technological solutions.' },
]

const courseTabs = [
  {
    id: 'development', label: 'Software Development', icon: serviceIcon1,
    courses: [
      { title: 'Web Design', desc: 'HTML, CSS, JavaScript, React.js.' },
      { title: 'Web Development', desc: 'Python (Django, Flask), Node.js, and PHP (Laravel).' },
      { title: 'Mobile Application Development', desc: 'Native apps (Java/Kotlin for Android, Swift for iOS) Hybrid apps (Flutter, React Native).' },
      { title: 'Desktop Application Development', desc: 'Java, Python, C# and Javascript.' },
    ],
    info: { title: 'Software Development', desc: 'At Semester Tech, you will learn how to create a dynamic, responsive and user friendly website and applications. We have tech expert that will teach and guide you on how to design a stunning website, build a robust web application also to develop a mobile and desktop apps.' }
  },
  {
    id: 'data-science', label: 'Data Science', icon: serviceIcon2,
    courses: [
      { title: 'Data Analysis', desc: 'Excel, Power BI, and SQL.' },
      { title: 'Data Analysis with Python', desc: 'Python libraries like Pandas, NumPy, and Matplotlib.' },
      { title: 'Data Science and Machine Learning', desc: 'Predictive modeling, supervised/unsupervised learning, and AI algorithms.' },
      { title: 'Artificial Intelligence', desc: 'Deep learning, natural language processing (NLP), and computer vision.' },
    ],
    info: { title: 'Data Science', desc: 'Semester Integrated Technologies, you will learn how to analyze, visualize, and derive insights from data to drive decision-making and innovation then also to Unlock the power of data with our comprehensive Data Science programs.' }
  },
  {
    id: 'cyber-security', label: 'Cyber Security', icon: serviceIcon3,
    courses: [
      { title: 'Cyber Security', desc: 'Cybersecurity frameworks, penetration testing, network administration, security tools and practices also python programming.' },
      { title: 'Certified Ethical Hacking', desc: 'Footprint and reconnaissance, enumeration, vulnerability analysis, scanning networks, social Engineering, ethical hacking tools and practices.' },
    ],
    info: { title: 'Cyber Security', desc: 'At Semester Integrated Technologies, we provide in-depth training on network security, encryption, risk management, and cybersecurity frameworks also our programs prepare you for roles such as Security Analyst, Network Security Engineer, penetration tester, ethical hacker and Cyber Risk Consultant.' }
  },
  {
    id: 'robotics', label: 'Robotics', icon: serviceIcon4,
    courses: [
      { title: 'Robotics', desc: 'Mechanical design, embedded programming, AI integration, and automation.' },
      { title: 'Internet of Things (IOT)', desc: 'IOT protocols, sensor networks, cloud computing and data analytics.' },
      { title: 'Embedded Systems', desc: 'Microcontroller programming, real-time operating systems (RTOS), circuit design, and firmware development.' },
      { title: 'Smart Home Automation', desc: 'Home automation protocols, IoT integration, AI-driven smart assistants, and wireless communication.' },
    ],
    info: { title: 'Robotics', desc: 'At Semester Integrated Technologies, we shall equip you with the skills to design, build, and program intelligent robotic systems. Also train you mechanical design, embedded programming, AI integration and automation and prepare you for careers in industrial automation, healthcare robotics, drone technology, and AI-driven robotics solutions.' }
  },
  {
    id: 'management', label: 'Management', icon: serviceIcon5,
    courses: [
      { title: 'Digital Marketing and Branding', desc: 'SEO, social media marketing, content strategy, paid advertising, and brand storytelling.' },
      { title: 'Product Design', desc: 'UI/UX principles, wireframing, prototyping and human-computer interaction also tools like Figma, Adobe XD, and Sketch.' },
      { title: 'Product Management', desc: 'Product roadmaps, conduct market research, define features, and oversee product lifecycles.' },
      { title: 'Project Management', desc: 'Agile, Scrum, PMP, and PRINCE2 methodologies.' },
    ],
    info: { title: 'Management', desc: 'At Semester Integrated Technologies, you will take your organization to the level with our comprehensive management program from elevating your Online presence and crafting user-centered digital experiences, to developing successful products and delivering Projects efficiently, our expert-led training equip you with the skills to drive business growth and achieve success.' }
  },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('development')
  const [rateQuery, setRateQuery] = useState('')
  const [openFaqs, setOpenFaqs] = useState({})

  const rateResults = rateQuery.trim()
    ? rateData.filter(r => r.name.toLowerCase().includes(rateQuery.toLowerCase().trim()))
    : []

  const toggleFaq = (idx) => {
    setOpenFaqs(prev => ({ ...prev, [idx]: !prev[idx] }))
  }

  const activeTabData = courseTabs.find(t => t.id === activeTab)

  // Bootstrap tabs need JS - use effect to initialize
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }, [])

  return (
    <>
      {/* NGO Banner */}
      <div className="ngo-banner">
        🌍 Representing an NGO? <Link to="/contact">Ask about our special impact rates.</Link>
      </div>

      {/* Hero */}
      <section className="hero-service-wrap hero-section-wrap hero-overview-wrap">
        <div className="hero-section-content-wrap">
          <img src={bgShape1} alt="Shape" className="bg-shape" />
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Our Services</h5>
                <h1 className="section-title fade-in">Engineering Growth for <em>Visionaries</em>.</h1>
                <p>From legal foundations to enterprise-grade software, we provide the technical and structural backbone for your business. Select a category below to explore our 200+ specialized services.</p>
                <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                  <a href="#business-legal" className="filter-btn">Business &amp; Legal</a>
                  <a href="#engineering-dev" className="filter-btn">Engineering &amp; Dev</a>
                  <a href="#growth-ads" className="filter-btn">Growth &amp; Ads</a>
                  <a href="#design-identity" className="filter-btn">Design &amp; Identity</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Service */}
      <section className="company-service-area">
        <div className="custom-container">
          <div className="hero-service-about">
            <img src={heroOverviewAbout} alt="Service About" />
            <div className="hero-service-about-body">
              <p>At Semester Tech, we are a dynamic team of top talents, experts, and visionaries from diverse fields. Driven by a shared passion for excellence, our professionals bring unmatched experience and creativity to every project.</p>
              <ul>
                <li><i className="las la-check"></i> Infrastructure Management</li>
                <li><i className="las la-check"></i> IT Support and Consultancy</li>
                <li><i className="las la-check"></i> E-Commerce Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 1 - Business & Legal */}
      <section className="svc-category-dark" id="business-legal">
        <div className="custom-container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-5">
              <span className="expert-badge expert-badge-dark"><i className="las la-check-circle"></i> Executed by Semester Tech Certified Experts</span>
              <h5 className="section-subtitle">CATEGORY 1</h5>
              <h1 className="section-title">Build on Solid Ground.</h1>
              <p>You can't scale what isn't legally sound. We handle the paperwork so you can focus on the vision.</p>
              <Link to="/contact" className="theme-btn mt-3 d-inline-block">Get My Business Registered <i className="iconoir-arrow-up-right"></i></Link>
            </div>
            <div className="col-12 col-md-7">
              {[
                { title: 'Company Registration (CAC)', desc: 'From 80k. Name research, registration, and certification.' },
                { title: 'Legal Documentation', desc: 'Agreements, Terms of Service, and Privacy Policies tailored to your industry.' },
                { title: 'Business Architecture', desc: 'Strategic planning and operational roadmaps for startups.' },
                { title: 'TIN & Compliance', desc: 'Ensuring your business is tax-ready and government-compliant.' },
              ].map((s, i) => (
                <div className="svc-item svc-item-dark" key={i}>
                  <div className="svc-dot"></div>
                  <div><h5>{s.title}</h5><p>{s.desc}</p></div>
                </div>
              ))}
              <p className="modular-note">💡 Our services are modular — you don't have to buy the "Whole House" if you only need the "Door."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 - Engineering & Dev */}
      <section className="svc-category-light" id="engineering-dev">
        <div className="custom-container">
          <div className="row align-items-center g-5 flex-md-row-reverse">
            <div className="col-12 col-md-5">
              <span className="expert-badge"><i className="las la-check-circle"></i> Executed by Semester Tech Certified Experts</span>
              <h5 className="section-subtitle">CATEGORY 2</h5>
              <h1 className="section-title">High-Performance Engineering.</h1>
              <p style={{ color: 'var(--text-secondary)' }}>We don't just write code; we build resilient systems. Every line of code is written by the 120+ experts we've trained.</p>
              <Link to="/contact" className="theme-btn mt-3 d-inline-block">Request a Technical Build <i className="iconoir-arrow-up-right"></i></Link>
            </div>
            <div className="col-12 col-md-7">
              {[
                { title: 'Bespoke Web Applications', desc: 'Custom dashboards, portals, and SaaS platforms.' },
                { title: 'Mobile App Development', desc: 'Native and Cross-platform (iOS/Android) solutions from 900k.' },
                { title: 'E-commerce Systems', desc: 'Full-scale online stores with inventory and payment management.' },
                { title: 'API Integration & Automation', desc: 'Connecting your tools to work as one seamless engine.' },
              ].map((s, i) => (
                <div className="svc-item svc-item-light" key={i}>
                  <div className="svc-dot"></div>
                  <div><h5>{s.title}</h5><p>{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 - Design & Identity */}
      <section className="svc-category-dark" id="design-identity">
        <div className="custom-container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-md-5">
              <span className="expert-badge expert-badge-dark"><i className="las la-check-circle"></i> Executed by Semester Tech Certified Experts</span>
              <h5 className="section-subtitle">CATEGORY 3</h5>
              <h1 className="section-title">Identity That Commands Respect.</h1>
              <p>Your brand is the first conversation you have with your customer. We make sure it's a powerful one.</p>
              <Link to="/contact" className="theme-btn mt-3 d-inline-block">View Design Packages <i className="iconoir-arrow-up-right"></i></Link>
            </div>
            <div className="col-12 col-md-7">
              {[
                { title: 'Logo & Identity Design', desc: 'Starting from 50k. More than a symbol; it\'s a story.' },
                { title: 'UI/UX Research & Design', desc: 'Data-driven interfaces that users love to navigate.' },
                { title: 'Marketing Collaterals', desc: 'Pitch decks, fact sheets, and corporate profiles (30k\u2013250k).' },
                { title: '3D Product Visualization', desc: 'Immersive 3D renders of your digital or physical products.' },
              ].map((s, i) => (
                <div className="svc-item svc-item-dark" key={i}>
                  <div className="svc-dot"></div>
                  <div><h5>{s.title}</h5><p>{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category 4 - Growth & Ads */}
      <section className="svc-category-light" id="growth-ads">
        <div className="custom-container">
          <div className="row align-items-center g-5 flex-md-row-reverse">
            <div className="col-12 col-md-5">
              <span className="expert-badge"><i className="las la-check-circle"></i> Executed by Semester Tech Certified Experts</span>
              <h5 className="section-subtitle">CATEGORY 4</h5>
              <h1 className="section-title">Turn Your Platform into a Profit Center.</h1>
              <p style={{ color: 'var(--text-secondary)' }}>Building is 50% of the battle. The other 50% is making sure the world sees it — and pays for it.</p>
              <Link to="/contact" className="theme-btn mt-3 d-inline-block">Start My Growth Plan <i className="iconoir-arrow-up-right"></i></Link>
            </div>
            <div className="col-12 col-md-7">
              {[
                { title: 'Monetization Strategy', desc: 'Programmatic ads, subscription models, and gateway setups.' },
                { title: 'Search Engine Optimization (SEO)', desc: 'Advanced site architecture (50k) to dominate search results.' },
                { title: 'Google & Social Ads', desc: 'Managed campaigns with a performance-driven 10\u201315% fee.' },
                { title: 'Google Recognition', desc: 'Local and global business verification (65k).' },
              ].map((s, i) => (
                <div className="svc-item svc-item-light" key={i}>
                  <div className="svc-dot"></div>
                  <div><h5>{s.title}</h5><p>{s.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="service-area service-black-area">
        <div className="custom-container">
          <div className="service-section-header section-header d-flex align-items-end justify-content-between">
            <div className="left">
              <h5 className="section-subtitle">WHAT WE'RE OFFERING</h5>
              <h1 className="section-title">Dealing in all professional <br />IT services.</h1>
            </div>
            <p>One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of the hardware, software, networks, and servers.</p>
          </div>
          <div className="services-grid mb-3">
            {serviceCards.map((s, i) => (
              <div className="service-card simple-shadow" key={i}>
                <img src={s.icon} alt="Service Icon" className="service-icon" />
                <h3><Link to="/services">{s.title}</Link></h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Bundles */}
      <section className="bundles-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">BUNDLES</h5>
            <h1 className="section-title">Ready-to-Scale Bundles.</h1>
            <p>We've combined our most requested services into high-impact packages to save you time and cost.</p>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bundle-card">
                <h3>The "Legal Launchpad"</h3>
                <div className="bundle-price">80k – 150k</div>
                <p className="bundle-ideal">Ideal for: New founders.</p>
                <ul className="bundle-includes">
                  <li>CAC Registration</li><li>TIN Generation</li><li>Basic Terms &amp; Conditions</li><li>Business Name Consultation</li>
                </ul>
                <Link to="/contact" className="theme-btn">Select Launchpad <i className="iconoir-arrow-up-right"></i></Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bundle-card featured">
                <span className="bundle-badge">Most Popular</span>
                <h3>The "Digital MVP"</h3>
                <div className="bundle-price">1.5M+</div>
                <p className="bundle-ideal">Ideal for: Startups needing a market-ready product.</p>
                <ul className="bundle-includes">
                  <li>UI/UX Prototype</li><li>Bespoke Web/Mobile App</li><li>Payment Gateway Integration</li><li>1-Month Maintenance Plan</li>
                </ul>
                <Link to="/contact" className="theme-btn">Build My MVP <i className="iconoir-arrow-up-right"></i></Link>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="bundle-card">
                <h3>The "Growth Engine"</h3>
                <div className="bundle-price">500k+</div>
                <p className="bundle-ideal">Ideal for: Established businesses needing visibility.</p>
                <ul className="bundle-includes">
                  <li>SEO Architecture Upgrade</li><li>Google Ads Management</li><li>3D Product Renders</li><li>High-Converting Landing Page</li>
                </ul>
                <Link to="/contact" className="theme-btn">Start Growing <i className="iconoir-arrow-up-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">OUR TECH STACK</h5>
            <h1 className="section-title">Powered by Industry-Leading Tech.</h1>
            <p style={{ maxWidth: 560, margin: '12px auto 0' }}>We don't just use tools; we master them. Our experts work with a modern, scalable stack to ensure your product never goes obsolete.</p>
          </div>
          <div className="row g-4">
            {[
              { title: 'Frontend', desc: <><strong>React, Vue.js, Tailwind CSS</strong> — For blazing-fast interfaces.</> },
              { title: 'Backend', desc: <><strong>Node.js, Python (Django/FastAPI), Go</strong> — For robust server logic.</> },
              { title: 'Mobile', desc: <><strong>Flutter, React Native</strong> — For seamless iOS &amp; Android performance.</> },
            ].map((t, i) => (
              <div className="col-12 col-sm-6 col-lg-4" key={i}>
                <div className="tech-card"><h5>{t.title}</h5><p>{t.desc}</p></div>
              </div>
            ))}
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="tech-card"><h5>Database &amp; Cloud</h5><p><strong>PostgreSQL, Firebase, AWS, Google Cloud</strong> — For secure, global scaling.</p></div>
            </div>
            <div className="col-12 col-sm-6 col-lg-6">
              <div className="tech-card"><h5>Design</h5><p><strong>Figma, Adobe Creative Cloud, Blender</strong> — For pixel-perfect visuals.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">WHY CHOOSE US</h5>
            <h1 className="section-title">The Difference Between a Project and an Asset.</h1>
          </div>
          <div className="table-responsive">
            <table className="compare-table">
              <thead>
                <tr><th>Feature</th><th>The Freelance Route</th><th>The Semester Tech Standard ✦</th></tr>
              </thead>
              <tbody>
                {[
                  ['Accountability', 'Individual (High risk of "ghosting")', 'Institutional — Legal Service Agreements'],
                  ['Quality Control', 'Hit or Miss', 'Vetted by 120+ Trained Specialists'],
                  ['Legal', 'Not included', 'Integrated (CAC, Copyrights, Privacy)'],
                  ['Workflow', 'Unstructured', '6-Step Precision Process'],
                  ['Post-Launch Support', 'Difficult to find later', 'Dedicated maintenance support'],
                ].map(([feature, bad, good], i) => (
                  <tr key={i}>
                    <td>{feature}</td>
                    <td><span className="bad">{bad}</span></td>
                    <td><span className="good">{good}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6-Step Workflow */}
      <section className="workflow-area">
        <div className="custom-container">
          <div className="row g-5 align-items-start">
            <div className="col-12 col-md-5">
              <h5 className="section-subtitle">HOW WE WORK</h5>
              <h1 className="section-title">The 6-Step Guarantee.</h1>
              <p style={{ color: 'var(--text-secondary)' }}>No guesswork. No delays. Just execution.</p>
            </div>
            <div className="col-12 col-md-7">
              {['Request — You tell us what you need.', 'Intake — We jump on a call to define the exact scope.', 'Rate Card — You receive a transparent, itemized quote.', 'Agreement — We sign a formal contract to protect both parties.', 'Execution — Our trained experts build your solution.', 'Handover — Final sign-off and the Service Completion Agreement.'].map((step, i) => {
                const [title, desc] = step.split(' — ')
                return (
                  <div className="workflow-step" key={i}>
                    <div className="step-num">{i + 1}</div>
                    <div><h5>{title}</h5><p>{desc}</p></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Rate Card Search */}
      <section className="rate-search-area">
        <div className="custom-container">
          <div className="text-center mb-4">
            <h5 className="section-subtitle">RATE CARD</h5>
            <h1 className="section-title">Need a Quick Estimate?</h1>
            <p>Search our service database for starting prices.</p>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Try 'Logo', 'App', 'SEO', 'CAC'…" value={rateQuery} onChange={(e) => setRateQuery(e.target.value)} />
            <button onClick={() => {}}>Search</button>
          </div>
          <div id="rate-results">
            {rateResults.map((r, i) => (
              <div className="rate-result-item" key={i}>
                <span>{r.name}</span>
                <span className="price">{r.price}</span>
              </div>
            ))}
          </div>
          {rateQuery.trim() && rateResults.length === 0 && (
            <div id="rate-empty" style={{ display: 'block' }}>No matching services found. <Link to="/contact">Book a custom consultation →</Link></div>
          )}
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
            <ul className="nav nav-pills case-studio-tabs">
              {courseTabs.map(tab => (
                <li className="nav-item" key={tab.id}>
                  <button className={`nav-link${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>{tab.label}</button>
                </li>
              ))}
            </ul>
            <div className="tab-content case-studio-tab-content">
              {activeTabData && (
                <div className="tab-pane fade show active">
                  <div className="case-studio-body d-flex">
                    <div className="left d-flex flex-1">
                      <div className={`row row-cols-1 row-cols-lg-${activeTabData.courses.length <= 2 ? '1' : '2'} g-3`}>
                        {activeTabData.courses.map((c, i) => (
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
                        <img src={activeTabData.icon} alt="ICON" />
                        <h3>{activeTabData.info.title}</h3>
                        <p>{activeTabData.info.desc}</p>
                        <Link to={activeTab === 'management' ? '/contact' : '/services'} className="theme-btn btn-sm" style={{ width: 'auto' }}>
                          {activeTab === 'management' ? 'Book a Strategy Session' : 'Enroll Now'} <i className="iconoir-arrow-up-right"></i>
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

      {/* Features */}
      <section className="feature3-area feature3-style-2">
        <div className="custom-container">
          <div className="feature3-body">
            <div className="section-header">
              <h5 className="section-subtitle">FEATURES</h5>
              <h1 className="section-title">Boosting your business using our team</h1>
            </div>
            <div className="feature3-lists">
              {[
                { title: 'Strategic Business Solutions', desc: "We provide tailored solutions that align with your company's goals, helping you streamline operations and scale effectively." },
                { title: 'Data-Driven Financial Insights', desc: 'Make informed business decisions with our comprehensive financial analysis, ensuring optimized budgeting, forecasting, and cost management.' },
                { title: 'Operational Efficiency', desc: 'We help businesses track key performance indicators (KPIs) and implement strategies to enhance efficiency and drive measurable success.' },
                { title: 'Secure & Reliable Systems', desc: 'Security is at the core of what we do. We implement robust security protocols to ensure data protection and system integrity.' },
                { title: 'Agile Development & Fast Deployment', desc: 'Using Agile methodologies, we ensure rapid development, continuous testing, and seamless deployment for optimal performance.' },
                { title: 'Analytics Performance', desc: 'We guide your business through a personalized journey, delivering tailored solutions that drive growth and achievement through data-informed decision making.' },
              ].map((f, i) => (
                <div className="feature-box" key={i}>
                  <i className="icon-box las la-check"></i>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Service */}
      <section className="about-service3-area">
        <div className="custom-container">
          <div className="custom-row align-items-center">
            <div className="img-box"><img src={aboutService2} alt="About" /></div>
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

      {/* FAQ */}
      <section className="faq-area">
        <div className="custom-container">
          <div className="text-center mb-5">
            <h5 className="section-subtitle">FAQ</h5>
            <h1 className="section-title">Questions About Our Services.</h1>
          </div>
          <div className="mx-auto" style={{ maxWidth: 800 }}>
            {[
              { q: 'Do I own the code/design once the project is finished?', a: 'Absolutely. Upon final payment and the signing of the Service Completion Agreement, all intellectual property is transferred to you.' },
              { q: 'How long does a typical "MVP" build take?', a: 'Depending on complexity, most MVPs are deployed within 4 to 12 weeks. Our 6-step workflow keeps us on a strict timeline.' },
              { q: 'Can you help me fix a website built by another developer?', a: 'Yes. We offer a System Audit & Refactoring service starting from 150k to clean up code and improve performance.' },
              { q: 'What if I need a custom service not listed here?', a: 'With a workforce of 120+ experts, we can handle almost any technical request. Book a consultation, and we will build a custom scope for you.' },
            ].map((faq, i) => (
              <div className={`faq-item${openFaqs[i] ? ' open' : ''}`} key={i}>
                <div className="faq-question" onClick={() => toggleFaq(i)}>{faq.q} <span>+</span></div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="custom-container">
          <h1>Ready to build the future?</h1>
          <p className="mb-4">Whether you are a startup looking for your first MVP or an enterprise needing a system upgrade, we are ready to deploy.</p>
          <Link to="/contact" className="theme-btn">Fill the Service Intake Form <i className="iconoir-arrow-up-right"></i></Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-area">
        <div className="custom-container">
          <div className="section-header text-center mb-5">
            <h5 className="section-subtitle mb-2">TESTIMONIAL</h5>
            <h1 className="section-title mb-2">What people think about us</h1>
            <p style={{ margin: 'auto' }}>Their professionalism and commitment to our success were evident <br />throughout the entire process.</p>
          </div>
        </div>
        <div className="testimonial-slider-wrap">
          <div className="d-flex gap-4 flex-wrap justify-content-center">
            {[
              { text: 'Semester Technologies has been an invaluable partner in our digital transformation journey. Their tailored solutions, expertise, and dedication have helped us achieve remarkable results.', name: 'Glory', role: 'Data Analyst' },
              { text: 'SemesterTech delivered an outstanding web application that transformed our business operations. Their expertise, attention to detail, and support were exceptional.', name: 'Endurance', role: 'Project Manager' },
              { text: 'Their ability to simplify complex challenges and provide strategic solutions is unmatched. Highly recommended.', name: 'Godwill', role: 'Software developer' },
            ].map((t, i) => (
              <div className="testimonial-item p-2 p-lg-3" key={i} style={{ maxWidth: 550 }}>
                <div className="testimonial-item-body">
                  <img className="animation-slide-right bg-shape" src={bgShape3} alt="Shape" />
                  <p>{t.text}</p>
                  <div className="author-box d-flex align-items-center">
                    <img src={testimonial1} alt="Testimonial" />
                    <div className="author-box-content"><h4>{t.name}</h4><p>{t.role}</p></div>
                  </div>
                </div>
              </div>
            ))}
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
