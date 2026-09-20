import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WolfMascot from '../components/wolf/WolfMascot'

const Home = () => {
  return (
    <div className="relative">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="container-haven relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left: Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 border border-bronze-500/30 text-bronze-400 text-sm tracking-luxury font-medium clip-corner">
                  PREMIUM DIGITAL STUDIO
                </span>
              </motion.div>

              <h1 className="heading-hero mb-8">
                Digital experiences,
                <br />
                <span className="text-gradient-bronze">made remarkable.</span>
              </h1>

              <p className="text-luxury mb-12 max-w-xl mx-auto lg:mx-0">
                HAVEN creates bespoke websites for brands that demand excellence. 
                Discover premium designs, customize your vision, and launch something extraordinary.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/templates" className="btn-primary">
                  Explore Templates
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Start a Project
                </Link>
              </div>
            </motion.div>

            {/* Right: Wolf Mascot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <WolfMascot variant="hero" enableInteraction={true} />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-champagne-50/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-bronze-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

    </div>
  )
}

export default Home
