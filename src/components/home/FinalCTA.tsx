import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-haven relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Heading */}
          <h2 className="heading-section mb-8">
            Let's build something
            <br />
            <span className="text-gradient-bronze">worth experiencing.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-luxury mb-12 max-w-2xl mx-auto">
            Your brand deserves a digital presence that matches its ambition. 
            HAVEN creates websites that don't just exist—they make an impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact" className="btn-primary text-lg px-10 py-5">
              Start a Project
            </Link>
            <Link to="/templates" className="btn-secondary text-lg px-10 py-5">
              View Templates
            </Link>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-8 text-sm text-champagne-100/50"
          >
            <div className="flex items-center space-x-2">
              <span className="text-bronze-400">✓</span>
              <span>Premium Quality</span>
            </div>
            <div className="w-1 h-1 bg-bronze-500/50 rounded-full" />
            <div className="flex items-center space-x-2">
              <span className="text-bronze-400">✓</span>
              <span>On-Time Delivery</span>
            </div>
            <div className="w-1 h-1 bg-bronze-500/50 rounded-full" />
            <div className="flex items-center space-x-2">
              <span className="text-bronze-400">✓</span>
              <span>Ongoing Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="w-96 h-96 bg-bronze-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </section>
  )
}

export default FinalCTA
