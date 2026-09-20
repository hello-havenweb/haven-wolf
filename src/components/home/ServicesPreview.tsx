import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ServicesPreview = () => {
  const services = [
    {
      icon: '✦',
      title: 'Web Design',
      description: 'Premium visual experiences that captivate and convert.',
    },
    {
      icon: '◆',
      title: 'Development',
      description: 'Modern, performant websites built with precision.',
    },
    {
      icon: '▲',
      title: 'Custom Solutions',
      description: 'Bespoke digital experiences tailored to your vision.',
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
          className="text-center mb-16"
        >
          <h2 className="heading-section mb-6">
            What We
            <br />
            <span className="text-gradient-bronze">Create</span>
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            HAVEN specializes in premium digital experiences. From concept to launch, 
            we deliver excellence at every stage.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium p-8 group hover:glow-bronze transition-all duration-500"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-bronze-500/10 border border-bronze-500/30 mb-6 clip-corner group-hover:bg-bronze-500/20 transition-colors">
                <span className="text-3xl text-bronze-400">{service.icon}</span>
              </div>
              
              <h3 className="heading-card mb-4">{service.title}</h3>
              
              <p className="text-champagne-100/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link to="/services" className="btn-secondary">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
