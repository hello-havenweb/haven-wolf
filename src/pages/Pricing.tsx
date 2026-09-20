import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface PricingTier {
  name: string
  tagline: string
  description: string
  features: string[]
  starting: string
  popular?: boolean
}

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'project' | 'monthly'>('project')

  const pricingTiers: PricingTier[] = [
    {
      name: 'Template',
      tagline: 'Start with excellence',
      description: 'Choose from our premium template collection. Customize colors, fonts, and content to match your brand.',
      starting: 'From $2,500',
      features: [
        'Premium template design',
        'Full customization',
        'Responsive on all devices',
        'SEO optimization',
        'Contact form integration',
        '30 days of support',
        'Training & documentation',
      ],
    },
    {
      name: 'Custom',
      tagline: 'Built for you',
      description: 'Fully custom website designed and developed specifically for your brand. No templates. No limits.',
      starting: 'From $7,500',
      popular: true,
      features: [
        'Custom design & development',
        'Unlimited revisions',
        'Advanced animations',
        'Custom functionality',
        'CMS integration',
        'Performance optimization',
        '90 days of support',
        'Priority development',
      ],
    },
    {
      name: 'Enterprise',
      tagline: 'Unlimited potential',
      description: 'Complete digital solutions for large-scale projects. Multi-page websites, web applications, and beyond.',
      starting: 'Custom Quote',
      features: [
        'Multi-page architecture',
        'Advanced integrations',
        'Custom CMS/dashboard',
        'E-commerce capabilities',
        'API development',
        'Ongoing maintenance',
        'Dedicated support',
        'Analytics & reporting',
      ],
    },
  ]

  const addons = [
    { name: 'Brand Identity', description: 'Logo, colors, typography system', price: 'From $1,500' },
    { name: 'Content Creation', description: 'Professional copywriting', price: 'From $800' },
    { name: 'Photography', description: 'Custom brand photography', price: 'From $1,200' },
    { name: 'Monthly Maintenance', description: 'Updates, backups, monitoring', price: 'From $300/mo' },
    { name: 'SEO Package', description: 'Advanced optimization & strategy', price: 'From $1,000' },
    { name: 'Analytics Setup', description: 'Tracking, reporting, insights', price: 'From $500' },
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
            Transparent
            <br />
            <span className="text-gradient-bronze">Pricing</span>
          </h1>
          <p className="text-luxury max-w-2xl mx-auto">
            Invest in quality. HAVEN creates websites that deliver value for years to come.
          </p>
        </motion.div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-premium p-8 ${tier.popular ? 'ring-2 ring-bronze-500 glow-bronze-strong' : ''}`}
            >
              {tier.popular && (
                <div className="inline-block px-3 py-1 bg-bronze-500 text-obsidian-950 text-xs font-medium tracking-wider mb-4 clip-corner">
                  MOST POPULAR
                </div>
              )}

              <h3 className="font-display font-bold text-3xl text-champagne-50 mb-2">
                {tier.name}
              </h3>
              
              <p className="text-bronze-400 font-medium mb-4">
                {tier.tagline}
              </p>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-champagne-50">
                  {tier.starting}
                </span>
              </div>

              <p className="text-champagne-100/70 text-sm leading-relaxed mb-8">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2 text-sm text-champagne-100/80">
                    <span className="text-bronze-400 mt-1 flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={tier.popular ? 'btn-primary w-full text-center block' : 'btn-secondary w-full text-center block'}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="heading-section text-center mb-16">
            Optional
            <br />
            <span className="text-gradient-bronze">Add-ons</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border border-champagne-50/10 p-6 hover:border-bronze-500/40 transition-all duration-300 clip-corner"
              >
                <h3 className="font-display font-semibold text-xl text-champagne-50 mb-2">
                  {addon.name}
                </h3>
                <p className="text-champagne-100/60 text-sm mb-4">
                  {addon.description}
                </p>
                <p className="text-bronze-400 font-medium">
                  {addon.price}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="heading-section text-center mb-16">
            Common
            <br />
            <span className="text-gradient-bronze">Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="What's included in the starting price?"
              answer="The starting price includes design, development, responsive implementation, SEO basics, and initial support. Final pricing depends on your specific requirements and complexity."
            />
            <FAQItem
              question="How long does a project take?"
              answer="Template-based projects typically take 2-4 weeks. Custom projects range from 4-8 weeks depending on complexity. Enterprise projects are scoped individually."
            />
            <FAQItem
              question="Do you offer payment plans?"
              answer="Yes. We typically structure payments as: 50% to start, 25% at design approval, and 25% at launch. Custom arrangements available for enterprise projects."
            />
            <FAQItem
              question="What happens after launch?"
              answer="All projects include post-launch support. We provide training, documentation, and remain available for updates and maintenance through our support packages."
            />
            <FAQItem
              question="Can I update the website myself?"
              answer="Absolutely. We can integrate a content management system (CMS) that allows you to update content without touching code. Training is included."
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="card-premium p-12 max-w-3xl mx-auto">
            <h2 className="heading-card mb-4">
              Need a custom quote?
            </h2>
            <p className="text-luxury mb-8">
              Every project is unique. Let's discuss your specific needs and create a tailored solution.
            </p>
            <Link to="/contact" className="btn-primary">
              Request Custom Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// FAQ Item Component
interface FAQItemProps {
  question: string
  answer: string
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-champagne-50/10 clip-corner overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-obsidian-800/30 transition-colors"
      >
        <h3 className="font-display font-semibold text-lg text-champagne-50 pr-4">
          {question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-bronze-400 text-2xl flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-champagne-100/70 leading-relaxed">
          {answer}
        </p>
      </motion.div>
    </div>
  )
}

export default Pricing
