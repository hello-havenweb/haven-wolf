import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Service {
  title: string
  description: string
  features: string[]
  icon: string
}

const Services = () => {
  const services: Service[] = [
    {
      title: 'Web Design',
      description: 'Premium visual design that captures your brand essence. Every pixel crafted with precision and purpose.',
      features: [
        'Custom UI/UX Design',
        'Brand Integration',
        'Responsive Layouts',
        'Interactive Prototypes',
      ],
      icon: '✦',
    },
    {
      title: 'Web Development',
      description: 'Modern, performant websites built with cutting-edge technology. Clean code, optimized performance.',
      features: [
        'React & Modern Frameworks',
        'Performance Optimization',
        'SEO Implementation',
        'Cross-browser Testing',
      ],
      icon: '◆',
    },
    {
      title: 'Business Websites',
      description: 'Professional websites that establish credibility and drive growth. Built to convert visitors into clients.',
      features: [
        'Multi-page Architecture',
        'Content Management',
        'Contact Forms',
        'Analytics Integration',
      ],
      icon: '▲',
    },
    {
      title: 'Landing Pages',
      description: 'High-conversion landing pages optimized for campaigns. Focused design that drives action.',
      features: [
        'Conversion Optimization',
        'A/B Testing Ready',
        'Lead Capture Forms',
        'Campaign Tracking',
      ],
      icon: '●',
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work with cinematic presentations. Designed to leave lasting impressions.',
      features: [
        'Project Galleries',
        'Case Study Layouts',
        'Media Optimization',
        'Custom Animations',
      ],
      icon: '■',
    },
    {
      title: 'E-commerce',
      description: 'Luxury e-commerce experiences for premium brands. Product showcases that sell.',
      features: [
        'Product Catalogs',
        'Shopping Cart Systems',
        'Payment Integration',
        'Inventory Management',
      ],
      icon: '◇',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We explore your vision, goals, and requirements. Understanding your brand is our foundation.',
    },
    {
      step: '02',
      title: 'Design',
      description: 'Custom designs crafted specifically for your brand. Iterative refinement until perfection.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your website with precision. Modern technology, optimized performance.',
    },
    {
      step: '04',
      title: 'Launch',
      description: 'Testing, refinement, and deployment. Your website goes live, ready to make an impact.',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container-haven">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="heading-section mb-6">
            Premium Digital
            <br />
            <span className="text-gradient-bronze">Services</span>
          </h1>
          <p className="text-luxury max-w-2xl mx-auto">
            HAVEN delivers end-to-end digital experiences. From concept to launch, 
            we create websites that elevate your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium p-8 group hover:glow-bronze transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center bg-bronze-500/10 border border-bronze-500/30 mb-6 clip-corner group-hover:bg-bronze-500/20 transition-colors">
                <span className="text-3xl text-bronze-400">{service.icon}</span>
              </div>

              <h3 className="heading-card mb-4">{service.title}</h3>
              
              <p className="text-champagne-100/70 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2 text-sm text-champagne-100/60">
                    <span className="text-bronze-400 mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="heading-section text-center mb-16">
            How HAVEN
            <br />
            <span className="text-gradient-bronze">Works</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="font-display text-6xl font-bold text-bronze-500/20 mb-4">
                  {item.step}
                </div>

                <h3 className="font-display font-semibold text-2xl text-champagne-50 mb-3">
                  {item.title}
                </h3>

                <p className="text-champagne-100/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-bronze-500/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="card-premium p-12 max-w-3xl mx-auto glow-bronze">
            <h2 className="heading-card mb-4">
              Ready to create something remarkable?
            </h2>
            <p className="text-luxury mb-8">
              Let's discuss your project. HAVEN transforms visions into digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start a Project
              </Link>
              <Link to="/templates" className="btn-secondary">
                View Templates
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
