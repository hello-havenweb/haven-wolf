import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const TemplatesPreview = () => {
  const templates = [
    {
      name: 'Luxury Portfolio',
      category: 'Portfolio',
      description: 'Cinematic showcase for creative professionals',
    },
    {
      name: 'Business Minimal',
      category: 'Business',
      description: 'Clean and sophisticated business presence',
    },
    {
      name: 'Convert Landing',
      category: 'Landing Page',
      description: 'High-conversion marketing pages',
    },
  ]

  return (
    <section className="section-padding relative bg-obsidian-900/30">
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
            Premium
            <br />
            <span className="text-gradient-bronze">Templates</span>
          </h2>
          <p className="text-luxury max-w-2xl mx-auto">
            Start with professionally designed templates. Customize to match your brand, 
            then launch with confidence.
          </p>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium overflow-hidden group"
            >
              {/* Placeholder Thumbnail */}
              <div className="relative aspect-[4/3] bg-obsidian-800 flex items-center justify-center overflow-hidden">
                <div className="w-16 h-16 border-4 border-bronze-500/20 border-t-bronze-500 rounded-full animate-spin" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-obsidian-900/80 backdrop-blur-sm border border-bronze-500/30 clip-corner">
                  <span className="text-bronze-400 text-xs uppercase tracking-wider">
                    {template.category}
                  </span>
                </div>

                {/* Under Construction Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-bronze-400 font-medium tracking-luxury text-sm">
                    UNDER CONSTRUCTION
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-semibold text-2xl text-champagne-50 mb-3">
                  {template.name}
                </h3>
                
                <p className="text-champagne-100/70 text-sm leading-relaxed">
                  {template.description}
                </p>
              </div>
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
          <Link to="/templates" className="btn-primary">
            View All Templates
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TemplatesPreview
