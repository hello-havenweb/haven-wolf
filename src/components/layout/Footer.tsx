import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { name: 'Templates', path: '/templates' },
      { name: 'Services', path: '/services' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'About', path: '/about' },
    ],
    services: [
      { name: 'Web Design', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'Business Websites', path: '/services' },
      { name: 'Landing Pages', path: '/services' },
    ],
  }

  return (
    <footer className="relative z-10 border-t border-champagne-50/10 bg-obsidian-900/50 backdrop-blur-sm">
      <div className="container-haven section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block group mb-6">
              <span className="font-display font-bold text-3xl tracking-luxury text-champagne-50 group-hover:text-bronze-400 transition-colors duration-300">
                HAVEN
              </span>
            </Link>
            
            <p className="text-champagne-100/70 leading-relaxed max-w-md mb-6">
              Creating premium digital experiences for brands that demand excellence. 
              Where luxury meets technology.
            </p>
            
            <a
              href="mailto:hello.havenweb@gmail.com"
              className="inline-flex items-center space-x-2 text-bronze-400 hover:text-bronze-300 transition-colors group"
            >
              <span className="font-medium">hello.havenweb@gmail.com</span>
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-display font-semibold text-lg text-champagne-50 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-champagne-100/70 hover:text-bronze-400 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-semibold text-lg text-champagne-50 mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-champagne-100/70 hover:text-bronze-400 transition-colors duration-300 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-champagne-50/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-champagne-100/50 text-sm">
            © {currentYear} HAVEN. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6 text-sm text-champagne-100/50">
            <span>Built with precision</span>
            <span className="w-1 h-1 bg-bronze-500 rounded-full" />
            <span>Designed for impact</span>
          </div>
        </div>
      </div>

      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-bronze-500/5 blur-3xl rounded-full pointer-events-none" />
    </footer>
  )
}

export default Footer
