import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface WolfMascotProps {
  variant?: 'hero' | 'compact'
  enableInteraction?: boolean
}

const WolfMascot = ({ variant = 'hero', enableInteraction = true }: WolfMascotProps) => {
  const wolfRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isClicked, setIsClicked] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!enableInteraction) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!wolfRef.current) return

      const rect = wolfRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / (rect.width / 2)
      const deltaY = (e.clientY - centerY) / (rect.height / 2)

      setRotation({
        x: deltaY * 5,
        y: deltaX * 5,
      })

      setMousePosition({
        x: deltaX * 10,
        y: deltaY * 10,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [enableInteraction])

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 600)
  }

  const sizeClasses = variant === 'hero' 
    ? 'w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'
    : 'w-48 h-48 md:w-56 md:h-56'

  return (
    <motion.div
      ref={wolfRef}
      className={`relative ${sizeClasses} cursor-pointer select-none`}
      onClick={handleClick}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      animate={{
        rotateX: rotation.x,
        rotateY: rotation.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
      }}
    >
      {/* Wolf SVG Container */}
      <div className="relative w-full h-full">
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-radial from-bronze-500/30 to-transparent blur-2xl"
          animate={{
            scale: isClicked ? 1.5 : 1,
            opacity: isClicked ? 0.8 : 0.4,
          }}
          transition={{ duration: 0.6 }}
        />

        {/* Wolf Body */}
        <svg
          viewBox="0 0 400 400"
          className="relative z-10 w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 40px rgba(184, 147, 95, 0.3))',
          }}
        >
          {/* Head */}
          <motion.path
            d="M200 100 Q250 120 260 160 Q265 200 250 230 Q240 250 200 260 Q160 250 150 230 Q135 200 140 160 Q150 120 200 100Z"
            fill="url(#wolfGradient)"
            stroke="url(#wolfStroke)"
            strokeWidth="2"
            animate={{
              d: isClicked
                ? "M200 95 Q252 120 262 160 Q267 200 252 230 Q242 250 200 262 Q158 250 148 230 Q133 200 138 160 Q148 120 200 95Z"
                : "M200 100 Q250 120 260 160 Q265 200 250 230 Q240 250 200 260 Q160 250 150 230 Q135 200 140 160 Q150 120 200 100Z",
            }}
          />

          {/* Ears */}
          <motion.path
            d="M160 100 Q150 70 165 60 Q175 55 180 80 Z"
            fill="url(#wolfGradient)"
            stroke="url(#wolfStroke)"
            strokeWidth="1.5"
            animate={{
              y: isClicked ? -5 : 0,
            }}
          />
          <motion.path
            d="M240 100 Q250 70 235 60 Q225 55 220 80 Z"
            fill="url(#wolfGradient)"
            stroke="url(#wolfStroke)"
            strokeWidth="1.5"
            animate={{
              y: isClicked ? -5 : 0,
            }}
          />

          {/* Eyes */}
          <motion.circle
            cx={180 + mousePosition.x}
            cy={170 + mousePosition.y}
            r="8"
            fill="#faf8f4"
            animate={{
              r: isClicked ? 12 : 8,
            }}
          />
          <motion.circle
            cx={180 + mousePosition.x}
            cy={170 + mousePosition.y}
            r="4"
            fill="#b8935f"
            animate={{
              scale: isClicked ? 1.5 : 1,
            }}
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.circle>

          <motion.circle
            cx={220 + mousePosition.x}
            cy={170 + mousePosition.y}
            r="8"
            fill="#faf8f4"
            animate={{
              r: isClicked ? 12 : 8,
            }}
          />
          <motion.circle
            cx={220 + mousePosition.x}
            cy={170 + mousePosition.y}
            r="4"
            fill="#b8935f"
            animate={{
              scale: isClicked ? 1.5 : 1,
            }}
          >
            <animate
              attributeName="opacity"
              values="1;0.5;1"
              dur="4s"
              repeatCount="indefinite"
            />
          </motion.circle>

          {/* Snout */}
          <motion.path
            d="M190 200 Q200 210 210 200"
            stroke="#faf8f4"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{
              d: isClicked
                ? "M190 200 Q200 215 210 200"
                : "M190 200 Q200 210 210 200",
            }}
          />

          {/* Nose */}
          <motion.circle
            cx="200"
            cy="195"
            r="5"
            fill="#1a1a1a"
            animate={{
              scale: isClicked ? 1.2 : 1,
            }}
          />

          {/* Neck/Body Connection */}
          <path
            d="M180 250 Q200 280 220 250"
            fill="url(#wolfGradient)"
            stroke="url(#wolfStroke)"
            strokeWidth="2"
          />

          {/* Gradients */}
          <defs>
            <linearGradient id="wolfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#faf8f4" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f5f1e8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#ebe4d4" stopOpacity="0.5" />
            </linearGradient>
            <linearGradient id="wolfStroke" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b8935f" />
              <stop offset="100%" stopColor="#c9a574" />
            </linearGradient>
          </defs>
        </svg>

        {/* Click Ripple Effect */}
        {isClicked && (
          <motion.div
            className="absolute inset-0 border-2 border-bronze-400 rounded-full"
            initial={{ scale: 1, opacity: 0.6 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </div>

      {/* Floating Animation */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}

export default WolfMascot
