import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop with fine pointer
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!mediaQuery.matches) return

    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.classList.contains('cursor-pointer')

      setIsPointer(isInteractive)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-bronze-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-bronze-400/40 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      />

      {/* Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-bronze-500/10 rounded-full blur-2xl pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          opacity: isPointer ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 20,
        }}
      />
    </>
  )
}

export default CustomCursor
