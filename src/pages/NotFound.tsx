import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WolfMascot from '../components/wolf/WolfMascot'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="container-haven">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* 404 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <span className="font-display font-bold text-9xl md:text-[12rem] text-gradient-bronze leading-none block">
                404
              </span>
            </motion.div>

            <h1 className="heading-card mb-6">
              This page has wandered off
            </h1>

            <p className="text-luxury mb-8 max-w-md mx-auto lg:mx-0">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/" className="btn-primary">
                Return Home
              </Link>
              <Link to="/templates" className="btn-secondary">
                View Templates
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-champagne-50/10">
              <p className="text-champagne-100/50 text-sm mb-4">Quick Links:</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link to="/services" className="text-bronze-400 hover:text-bronze-300 transition-colors">
                  Services
                </Link>
                <Link to="/pricing" className="text-bronze-400 hover:text-bronze-300 transition-colors">
                  Pricing
                </Link>
                <Link to="/about" className="text-bronze-400 hover:text-bronze-300 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-bronze-400 hover:text-bronze-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right: Wolf */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <WolfMascot variant="hero" enableInteraction={true} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
