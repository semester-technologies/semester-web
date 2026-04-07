import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'
import ScrollToTop from './components/ScrollToTop'
import ScrollToTopButton from './components/ScrollToTopButton'
import WhatsAppButton from './components/WhatsAppButton'
import PromoBanner from './components/PromoBanner'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Career from './pages/Career'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Blog from './pages/Blog'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal()

  return (
    <>
      <ScrollToTop />
      <main className="main-page homepage">
        <Header />
        <PromoBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/academy" element={<Career />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
        </Routes>
        <Footer />
      </main>
      <ThemeToggle />
      <ScrollToTopButton />
      <WhatsAppButton />
    </>
  )
}

export default App
