import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// Layout Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/layout/Loader'
import CustomCursor from './components/effects/CustomCursor'
import AnimatedBackground from './components/effects/AnimatedBackground'

// Pages
import Home from './pages/Home'
import Templates from './pages/Templates'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Router basename={import.meta.env.BASE_URL || '/'}>
      <div className="relative min-h-screen bg-obsidian-950 text-champagne-50 overflow-x-hidden">
        
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Custom Cursor - Desktop Only */}
        {!prefersReducedMotion && (
          <CustomCursor />
        )}
        
        {/* Loading Experience */}
        <AnimatePresence mode="wait">
          {isLoading && <Loader />}
        </AnimatePresence>
        
        {/* Main Application */}
        {!isLoading && (
          <>
            <Navbar />
            
            <main className="relative z-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            <Footer />
          </>
        )}
      </div>
    </Router>
  )
}

export default App
