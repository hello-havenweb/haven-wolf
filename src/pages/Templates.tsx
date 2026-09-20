import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Template {
  id: string
  name: string
  category: string
  description: string
  thumbnail: string
  status: 'available' | 'construction'
  themes: string[]
  features: string[]
}

const Templates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const templates: Template[] = [
    {
      id: 'luxury-portfolio',
      name: 'Luxury Portfolio',
      category: 'portfolio',
      description: 'Premium portfolio template for creative professionals. Cinematic animations, project showcases, and elegant interactions.',
      thumbnail: '/templates/luxury-portfolio.jpg',
      status: 'construction',
      themes: ['Obsidian', 'Midnight', 'Crimson', 'Ocean'],
      features: ['Responsive', 'Animated', 'Dark Mode', 'Contact Form'],
    },
    {
      id: 'business-minimal',
      name: 'Business Minimal',
      category: 'business',
      description: 'Clean and sophisticated business website. Perfect for agencies, consultants, and professional services.',
      thumbnail: '/templates/business-minimal.jpg',
      status: 'construction',
      themes: ['Classic', 'Professional', 'Modern', 'Corporate'],
      features: ['Multi-page', 'Services Section', 'Team Profiles', 'CTA'],
    },
    {
      id: 'landing-convert',
      name: 'Convert Landing',
      category: 'landing',
      description: 'High-conversion landing page template. Optimized for product launches and marketing campaigns.',
      thumbnail: '/templates/landing-convert.jpg',
      status: 'construction',
      themes: ['Bold', 'Gradient', 'Minimal', 'Dark'],
      features: ['Single Page', 'Hero Video', 'Pricing Table', 'Analytics Ready'],
    },
    {
      id: 'ecommerce-luxury',
      name: 'Luxury Commerce',
      category: 'ecommerce',
      description: 'Premium e-commerce template for high-end brands. Product galleries, cart system, and checkout flow.',
      thumbnail: '/templates/ecommerce-luxury.jpg',
      status: 'construction',
      themes: ['Premium', 'Fashion', 'Jewelry', 'Boutique'],
      features: ['Product Pages', 'Shopping Cart', 'Wishlist', 'Filters'],
    },
    {
      id: 'restaurant-modern',
      name: 'Modern Restaurant',
      category: 'hospitality',
      description: 'Contemporary restaurant website. Menu displays, reservation system, and location information.',
      thumbnail: '/templates/restaurant-modern.jpg',
      status: 'construction',
      themes: ['Warm', 'Elegant', 'Rustic', 'Contemporary'],
      features: ['Menu Display', 'Reservations', 'Gallery', 'Hours & Location'],
    },
    {
      id: 'agency-creative',
      name: 'Creative Agency',
      category: 'agency',
      description: 'Dynamic agency portfolio. Project case studies, team showcase, and client testimonials.',
      thumbnail: '/templates/agency-creative.jpg',
      status: 'construction',
      themes: ['Vibrant', 'Bold', 'Professional', 'Innovative'],
      features: ['Case Studies', 'Team Section', 'Client Logos', 'Blog'],
    },
  ]

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'business', name: 'Business' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'hospitality', name: 'Hospitality' },
    { id: 'agency', name: 'Agency' },
  ]

  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(t => t.category === selectedCategory)

  return (
    <div className="pt-32 pb-20">
      <div className="container-haven">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="heading-section mb-6">
            Premium Website
            <br />
            <span className="text-gradient-bronze">Templates</span>
          </h1>
          <p className="text-luxury max-w-2xl mx-auto">
            Choose from our collection of professionally designed templates. 
            Each template is fully customizable to match your brand identity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 border transition-all duration-300 clip-corner ${
                selectedCategory === category.id
                  ? 'bg-bronze-500 border-bronze-500 text-obsidian-950 font-medium'
                  : 'border-champagne-50/20 text-champagne-100 hover:border-bronze-500/50 hover:text-bronze-400'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Templates Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredTemplates.map((template, index) => (
            <TemplateCard key={template.id} template={template} index={index} />
          ))}
        </motion.div>

        {/* Custom Template CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="card-premium p-12 max-w-3xl mx-auto">
            <h2 className="heading-card mb-4">
              Need something unique?
            </h2>
            <p className="text-luxury mb-8">
              HAVEN creates fully custom websites tailored to your exact vision. 
              No templates. No limits.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Custom Design
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Template Card Component
interface TemplateCardProps {
  template: Template
  index: number
}

const TemplateCard = ({ template, index }: TemplateCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="card-premium overflow-hidden group"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] bg-obsidian-800 overflow-hidden">
        {template.status === 'construction' ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-bronze-500/20 border-t-bronze-500 rounded-full animate-spin mb-4" />
            <span className="text-bronze-400 font-medium tracking-luxury">
              UNDER CONSTRUCTION
            </span>
            <span className="text-champagne-100/50 text-sm mt-2">
              Coming Soon
            </span>
          </div>
        ) : (
          <img
            src={template.thumbnail}
            alt={template.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        )}
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/50 to-transparent"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-obsidian-900/80 backdrop-blur-sm border border-bronze-500/30 clip-corner">
          <span className="text-bronze-400 text-xs uppercase tracking-wider">
            {template.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-semibold text-2xl text-champagne-50 mb-3">
          {template.name}
        </h3>
        
        <p className="text-champagne-100/70 text-sm leading-relaxed mb-4">
          {template.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-6">
          {template.features.slice(0, 3).map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 bg-obsidian-900/50 border border-champagne-50/10 text-champagne-100/60 text-xs"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Actions */}
        {template.status === 'construction' ? (
          <button
            disabled
            className="w-full px-6 py-3 border border-champagne-50/20 text-champagne-100/40 font-medium tracking-luxury cursor-not-allowed clip-corner"
          >
            Coming Soon
          </button>
        ) : (
          <div className="flex gap-3">
            <button className="flex-1 btn-secondary text-sm py-3">
              Preview
            </button>
            <Link to="/contact" className="flex-1 btn-primary text-sm py-3 text-center">
              Start With This
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Templates
