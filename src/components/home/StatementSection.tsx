import { motion } from 'framer-motion'

const StatementSection = () => {
  return (
    <section className="section-padding relative">
      <div className="container-haven">
        <div className="max-w-5xl mx-auto">
          
          {/* Main Statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-champagne-50 leading-tight mb-8">
              "In a world of templates and mass production, 
              <span className="text-gradient-bronze"> HAVEN stands for craft.</span>"
            </blockquote>
            
            <p className="text-luxury max-w-3xl mx-auto">
              We believe every brand deserves a digital experience that reflects its unique 
              identity. No shortcuts. No compromises. Just exceptional work that makes an impact.
            </p>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze-500/10 border border-bronze-500/30 rounded-full mb-6">
                <span className="text-2xl">✦</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-champagne-50 mb-3">
                Designed with Purpose
              </h3>
              <p className="text-champagne-100/70 text-sm leading-relaxed">
                Every element serves a function. Every interaction tells a story. 
                Design that works as beautifully as it looks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze-500/10 border border-bronze-500/30 rounded-full mb-6">
                <span className="text-2xl">◆</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-champagne-50 mb-3">
                Built to Perform
              </h3>
              <p className="text-champagne-100/70 text-sm leading-relaxed">
                Lightning-fast load times. Flawless responsiveness. Optimized for 
                search engines and built with modern technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-bronze-500/10 border border-bronze-500/30 rounded-full mb-6">
                <span className="text-2xl">▲</span>
              </div>
              <h3 className="font-display font-semibold text-xl text-champagne-50 mb-3">
                Made to Last
              </h3>
              <p className="text-champagne-100/70 text-sm leading-relaxed">
                Scalable architecture. Maintainable code. Websites designed to 
                grow with your business for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-bronze-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-champagne-200/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </section>
  )
}

export default StatementSection
