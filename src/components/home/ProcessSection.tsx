import { motion } from 'framer-motion'

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose',
      description: 'Select a premium template or request a fully custom design.',
    },
    {
      number: '02',
      title: 'Customize',
      description: 'Tell us your vision. Colors, fonts, content—make it yours.',
    },
    {
      number: '03',
      title: 'Refine',
      description: 'We build, you review. Iterate until perfection is achieved.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Your remarkable website goes live. Make your impact.',
    },
  ]

  return (
    <section className="section-padding relative">
      <div className="container-haven">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="heading-section mb-6">
            How It
            <br />
            <span className="text-gradient-bronze">Works</span>
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            A streamlined process designed to deliver exceptional results. 
            From first contact to final launch, we make excellence effortless.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-bronze-500/30 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-obsidian-900 border-2 border-bronze-500/30 rounded-full">
                  <span className="font-display text-3xl font-bold text-bronze-400">
                    {step.number}
                  </span>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-bronze-500/10 rounded-full blur-xl" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="font-display font-semibold text-2xl text-champagne-50 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-champagne-100/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
