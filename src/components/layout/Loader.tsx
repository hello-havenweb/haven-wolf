import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian-950"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      <div className="relative">
        {/* HAVEN Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="font-display font-bold text-6xl md:text-8xl tracking-luxury text-champagne-50">
            HAVEN
          </h1>
          
          {/* Animated Underline */}
          <motion.div
            className="h-0.5 bg-gradient-to-r from-transparent via-bronze-500 to-transparent mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
          />
        </motion.div>
        
        {/* Ambient Glow */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bronze-500/20 blur-3xl rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
