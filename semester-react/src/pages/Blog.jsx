import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO, { organizationSchema } from '../components/SEO'

const blogPosts = [
  {
    id: 1,
    slug: 'top-5-tech-skills-nigeria-2026',
    title: 'Top 5 Tech Skills in Demand in Nigeria (2026)',
    excerpt:
      'The Nigerian tech ecosystem is booming. Here are the five most in-demand skills employers are hiring for right now — and how you can learn them in 6 weeks.',
    category: 'Career Guide',
    date: 'April 2, 2026',
    readTime: '5 min read',
    content: `The Nigerian tech ecosystem has never been more vibrant. With fintech unicorns, healthtech startups, and government digitization projects all competing for talent, the demand for skilled tech professionals has skyrocketed.

**1. Full-Stack Web Development (React + Node.js/Python)**
Companies need developers who can handle both frontend and backend. The average salary for a mid-level full-stack developer in Lagos is now over ₦6M/year.

**2. Data Analysis & Business Intelligence**
Every company is drowning in data but starving for insights. Proficiency in Excel, SQL, Power BI, and Python (Pandas) makes you immediately employable.

**3. Cybersecurity**
With the CBN's new digital banking regulations, every financial institution needs security analysts. Ethical hacking certifications are especially valued.

**4. UI/UX Design**
Nigerian startups have learned that great design = better conversion rates. Figma proficiency is now a baseline requirement.

**5. Cloud Computing & DevOps**
AWS and Google Cloud skills are commanding premium salaries as companies migrate from on-premise infrastructure.

**How to Get Started:** At Semester Tech Academy, all five of these skills are available as 6-12 week intensive courses with hands-on projects and mentorship. Our graduates have a 92% employment rate within 3 months of completion.`,
  },
  {
    id: 2,
    slug: 'why-your-startup-needs-cac-registration',
    title: 'Why Your Startup Needs CAC Registration Before Building an App',
    excerpt:
      'Many founders rush to build their MVP before handling legal foundations. Here is why that is a costly mistake — and how to do it right for ₦80,000.',
    category: 'Business Tips',
    date: 'March 25, 2026',
    readTime: '4 min read',
    content: `We see it every month: a founder comes to us with a beautiful app idea, wants to start coding immediately, and plans to "handle the legal stuff later." Here's why that approach costs you more in the long run.

**The Hidden Costs of Skipping Legal Foundations**

1. **Investor Due Diligence** — No serious investor will fund an unregistered company. You'll waste months retrofitting legal documents when you could have started with them.

2. **Payment Gateway Requirements** — Paystack, Flutterwave, and every other Nigerian payment processor requires a registered business (CAC certificate) before you can integrate payments.

3. **Intellectual Property Risk** — Without proper copyright filings, anyone can legally clone your product.

4. **Banking** — Opening a corporate account requires CAC registration and TIN.

**The Semester Tech Approach: Legal-First Development**

Our 6-step workflow starts with legal foundations BEFORE we write a single line of code:
- Company Name Research & Reservation
- CAC Registration (Business Name or Limited Liability)
- TIN Generation
- Terms of Service & Privacy Policy drafting

All of this is included in our Legal Launchpad Bundle starting at ₦80,000.

**The Bottom Line:** Spend ₦80k now or ₦500k+ later fixing legal problems that should have been handled from day one.`,
  },
  {
    id: 3,
    slug: 'semester-tech-academy-vs-self-taught',
    title: 'Academy vs Self-Taught: Why Structured Learning Wins in 2026',
    excerpt:
      'YouTube tutorials are free, but they cost you something more valuable — time. Here is the data on why structured academy training produces better outcomes.',
    category: 'Education',
    date: 'March 18, 2026',
    readTime: '6 min read',
    content: `The "self-taught developer" narrative is compelling. But the data tells a different story.

**The Self-Taught Reality**
- Average time to job-ready: 12-18 months
- Completion rate of online courses: 3-5%
- Most common blocker: "Tutorial hell" — watching without building

**The Academy Advantage**
- Average time to job-ready: 6-12 weeks
- Completion rate at Semester Tech: 94%
- Key difference: Hands-on projects, peer accountability, mentor guidance

**What Makes Semester Tech Different**

1. **Live Projects, Not Tutorials** — From week 2, you're building real applications for real clients through our Agency pipeline.

2. **Cohort-Based Learning** — You learn alongside peers, which creates accountability and networking opportunities.

3. **Mentorship** — Our 8+ mentors have industry experience and provide personalized guidance.

4. **Job Pipeline** — Top performers get absorbed into our Agency team or connected to our hiring partners.

**The Numbers**
- 120+ experts trained and deployed
- 92% employment rate within 3 months
- Starting salaries 40% higher than self-taught peers (based on our alumni survey)

**Ready to accelerate your career?** Our next cohort starts soon. Check our Academy page for available courses and pricing.`,
  },
  {
    id: 4,
    slug: 'how-semester-tech-builds-mobile-apps',
    title: 'Behind the Build: How We Deliver a ₦900K+ Mobile App',
    excerpt:
      'A transparent look inside our 6-step workflow — from initial request to final handover — and why our process produces better results than freelancers.',
    category: 'Case Study',
    date: 'March 10, 2026',
    readTime: '7 min read',
    content: `When a Lagos-based retail company came to us needing a mobile commerce platform, they had already been burned by two freelancers. Here's how our 6-step process delivered where others failed.

**Step 1: Request**
The client filled our intake form describing their need: an e-commerce mobile app with inventory management, payment integration, and push notifications.

**Step 2: Intake Call**
We conducted a 90-minute scoping session to understand their business model, target users, and technical requirements.

**Step 3: Rate Card**
We provided a transparent, itemized quote: ₦900,000 for the complete build, broken into 4 milestone payments.

**Step 4: Service Agreement**
Both parties signed a formal contract with timelines, deliverables, and IP transfer terms.

**Step 5: Execution**
Our team of 4 (1 designer, 2 developers, 1 QA) built the app in 8 weeks using Flutter for cross-platform deployment.

**Step 6: Handover**
Final sign-off, Service Completion Agreement, and 1-month free maintenance support.

**The Result:** 300% increase in mobile sales within the first quarter. The client has since returned for SEO services and a web dashboard.

**Why Our Process Works:**
- Institutional accountability (not individual)
- Milestone-based payments (you pay as we deliver)
- In-house team (no outsourcing to unknown freelancers)
- Legal protection (formal contracts and IP transfer)`,
  },
]

const categories = ['All', 'Career Guide', 'Business Tips', 'Education', 'Case Study']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Blog"
        description="Tech insights, career guides, and business tips from Semester Technologies. Learn about Nigeria's tech ecosystem, career paths, and how to scale your startup."
        path="/blog"
        schema={organizationSchema}
      />

      {/* Hero */}
      <section className="hero-service-wrap hero-section-wrap hero-portfolio-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Blog & Insights</h5>
                <h1 className="section-title fade-in">
                  Learn. Build. <em>Grow.</em>
                </h1>
                <p>
                  Tech insights, career guides, and business tips from the
                  Semester Tech team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet Banner */}
      <section className="lead-magnet-banner">
        <div className="custom-container">
          <div className="lead-magnet-box">
            <div className="lead-magnet-content">
              <h3>Free: 2026 Tech Career Roadmap</h3>
              <p>
                Download our comprehensive guide to the most in-demand tech
                skills, salary ranges, and learning paths in Nigeria.
              </p>
            </div>
            <Link to="/contact?service=career-roadmap" className="theme-btn">
              Download Free Guide <i className="iconoir-arrow-up-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section style={{ padding: '60px 0' }}>
        <div className="custom-container">
          <div className="d-flex flex-wrap gap-2 mb-5 justify-content-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="row g-4">
            {filtered.map((post) => (
              <div className="col-12 col-md-6" key={post.id}>
                <div className="blog-card">
                  <div className="blog-card-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-date">{post.date}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-footer">
                    <span className="blog-read-time">{post.readTime}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="blog-read-link"
                    >
                      Read Article <i className="iconoir-arrow-up-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-5">
              <p style={{ color: 'var(--text-secondary)' }}>
                No articles in this category yet. Check back soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="custom-container">
          <h1>Want personalized guidance?</h1>
          <p className="mb-4">
            Book a free 30-minute consultation with our team. We will help you
            find the right service or course for your goals.
          </p>
          <Link to="/contact?service=free-consultation" className="theme-btn">
            Book Free Consultation{' '}
            <i className="iconoir-arrow-up-right"></i>
          </Link>
        </div>
      </section>
    </>
  )
}

export { blogPosts }
