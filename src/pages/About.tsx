import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import WolfMascot from '../components/wolf/WolfMascot'

const About = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'We pursue perfection in every pixel, every interaction, every line of code. Quality is non-negotiable.',
      icon: '✦',
    },
    {
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and design trends while maintaining timeless aesthetic principles.',
      icon: '◆',
    },
    {
      title: 'Partnership',
      description: 'Your success is our success. We collaborate closely, communicate transparently, and deliver consistently.',
      icon: '▲',
    },
    {
      title: 'Craft',
      description: 'Digital experiences are our craft. We bring artistry, precision, and passion to every project.',
      icon: '●',
    },
  ]

  const capabilities = [
    'UI/UX Design',
    'Web Development',
    'Brand Integration',
    'Responsive Design',
    'Performance Optimization',
    'SEO Implementation',
    'Content Strategy',
    'Animation & Motion',
    'E-commerce Solutions',
    'Custom Functionality',
    'Analytics Integration',
    'Ongoing Support',
  ]

  return (
    <div className="pt-32 pb-20">
      <div className="container-haven">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-section mb-8">
              We are
              <br />
              <span className="text-gradient-bronze">HAVEN</span>
            </h1>
            <div className="space-y-4 text-luxury">
              <p>
                HAVEN is a premium digital studio dedicated to creating remarkable website experiences.
              </p>
              <p>
                We believe the web should be beautiful, functional, and memorable. Every project 
                we undertake reflects our commitment to excellence and our passion for digital craft.
              </p>
              <p>
                Founded on principles of quality over quantity, we work with brands that appreciate 
                the value of exceptional design and development. We don't just build websites—we 
                create digital experiences that elevate brands.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <WolfMascot variant="hero" enableInteraction={true} />
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="heading-section text-center mb-16">
            Our
            <br />
            <span className="text-gradient-bronze">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium p-8"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-bronze-500/10 border border-bronze-500/30 mb-6 clip-corner">
                  <span className="text-2xl text-bronze-400">{value.icon}</span>
                </div>
                <h3 className="heading-card mb-4">{value.title}</h3>
                <p className="text-champagne-100/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="heading-section text-center mb-16">
            What We
            <br />
            <span className="text-gradient-bronze">Do</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="border border-champagne-50/10 p-4 text-center hover:border-bronze-500/40 hover:bg-obsidian-800/30 transition-all duration-300 clip-corner"
              >
                <span className="text-champagne-50 font-medium text-sm">
                  {capability}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-section mb-8">
              Our
              <br />
              <span className="text-gradient-bronze">Philosophy</span>
            </h2>
            <div className="space-y-6 text-luxury">
              <p className="text-xl">
                "Digital experiences should be more than functional—they should be memorable."
              </p>
              <p>
                In an age of templates and mass production, HAVEN stands for craftsmanship. 
                We believe every brand deserves a unique digital presence that reflects its identity 
                and values.
              </p>
              <p>
                We combine aesthetic excellence with technical precision. Beautiful design means 
                nothing without performance. Powerful functionality falls flat without elegance. 
                HAVEN delivers both.
              </p>
              <p>
                We work with brands that understand the value of quality. Brands that see their 
                website not as an expense, but as an investment in their digital future.
              </p>
            </div>
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
              Let's create something remarkable together
            </h2>
            <p className="text-luxury mb-8">
              HAVEN is ready to transform your digital vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link to="/templates" className="btn-secondary">
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
