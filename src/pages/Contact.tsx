import { motion } from 'framer-motion'
import { useState } from 'react'

interface FormData {
  name: string
  email: string
  business: string
  websiteType: string
  budget: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    business: '',
    websiteType: '',
    budget: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const websiteTypes = [
    'Business Website',
    'Portfolio',
    'E-commerce',
    'Landing Page',
    'Custom Application',
    'Not Sure Yet',
  ]

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Not Sure Yet',
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    // In production, this would send to your backend or email service
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitStatus('success')
      setIsSubmitting(false)
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          business: '',
          websiteType: '',
          budget: '',
          message: '',
        })
        setSubmitStatus('idle')
      }, 3000)
    }, 2000)
  }

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
            Start a
            <br />
            <span className="text-gradient-bronze">Project</span>
          </h1>
          <p className="text-luxury max-w-2xl mx-auto">
            Let's discuss your vision. Tell us about your project and we'll create 
            a tailored solution that exceeds expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email */}
            <div className="card-premium p-6">
              <h3 className="font-display font-semibold text-lg text-champagne-50 mb-3">
                Email Us
              </h3>
              <a
                href="mailto:hello.havenweb@gmail.com"
                className="text-bronze-400 hover:text-bronze-300 transition-colors break-all"
              >
                hello.havenweb@gmail.com
              </a>
            </div>

            {/* What to Expect */}
            <div>
              <h3 className="font-display font-semibold text-xl text-champagne-50 mb-6">
                What to Expect
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-bronze-400 mt-1">01</span>
                  <div>
                    <h4 className="font-medium text-champagne-50 mb-1">Initial Response</h4>
                    <p className="text-champagne-100/70 text-sm">
                      We'll reply within 24 hours to schedule a discovery call.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-bronze-400 mt-1">02</span>
                  <div>
                    <h4 className="font-medium text-champagne-50 mb-1">Discovery Call</h4>
                    <p className="text-champagne-100/70 text-sm">
                      We'll discuss your vision, goals, and requirements in detail.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-bronze-400 mt-1">03</span>
                  <div>
                    <h4 className="font-medium text-champagne-50 mb-1">Custom Proposal</h4>
                    <p className="text-champagne-100/70 text-sm">
                      Receive a detailed proposal with timeline and pricing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-bronze-400 mt-1">04</span>
                  <div>
                    <h4 className="font-medium text-champagne-50 mb-1">Project Kickoff</h4>
                    <p className="text-champagne-100/70 text-sm">
                      Once approved, we begin creating your digital experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="border border-champagne-50/10 p-6 clip-corner">
              <h4 className="font-display font-semibold text-champagne-50 mb-4">
                Why Choose HAVEN?
              </h4>
              <ul className="space-y-2 text-sm text-champagne-100/70">
                <li className="flex items-start space-x-2">
                  <span className="text-bronze-400">→</span>
                  <span>Premium quality guaranteed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-bronze-400">→</span>
                  <span>Transparent communication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-bronze-400">→</span>
                  <span>On-time delivery</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-bronze-400">→</span>
                  <span>Ongoing support included</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-champagne-50 font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-champagne-50/20 text-champagne-50 placeholder-champagne-100/30 focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all clip-corner"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-champagne-50 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-champagne-50/20 text-champagne-50 placeholder-champagne-100/30 focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all clip-corner"
                  placeholder="john@example.com"
                />
              </div>

              {/* Business */}
              <div>
                <label htmlFor="business" className="block text-champagne-50 font-medium mb-2">
                  Business/Brand Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-champagne-50/20 text-champagne-50 placeholder-champagne-100/30 focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all clip-corner"
                  placeholder="Your Company"
                />
              </div>

              {/* Website Type */}
              <div>
                <label htmlFor="websiteType" className="block text-champagne-50 font-medium mb-2">
                  Website Type *
                </label>
                <select
                  id="websiteType"
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-champagne-50/20 text-champagne-50 focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all clip-corner cursor-pointer"
                >
                  <option value="">Select a type</option>
                  {websiteTypes.map((type) => (
                    <option key={type} value={type} className="bg-obsidian-900">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-champagne-50 font-medium mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-champagne-50/20 text-champagne-50 focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all clip-corner cursor-pointer"
                >
                  <option value="">Select a range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range} className="bg-obsidian-900">
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-champagne-50 font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-obsidian-800/50 border border-champagne-50/20 text-champagne-50 placeholder-champagne-100/30 focus:border-bronze-500 focus:outline-none focus:ring-2 focus:ring-bronze-500/20 transition-all resize-none clip-corner"
                  placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
                className="btn-primary w-full relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center space-x-2">
                    <span className="w-5 h-5 border-2 border-obsidian-950 border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : submitStatus === 'success' ? (
                  <span className="flex items-center justify-center space-x-2">
                    <span>✓</span>
                    <span>Message Sent!</span>
                  </span>
                ) : (
                  'Send Project Request'
                )}
              </button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-bronze-500/20 border border-bronze-500/40 text-champagne-50 text-center clip-corner"
                >
                  Thank you! We'll get back to you within 24 hours.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
