import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../contexts/ThemeContext'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

const ParticleEffect: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 2,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 5,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  const getParticleColor = () => {
    switch (theme) {
      case 'light':
        return 'from-primary-400 to-secondary-400'
      case 'dark':
        return 'from-primary-500 to-secondary-500'
      case 'retro':
        return 'from-yellow-400 to-red-500'
      default:
        return 'from-primary-400 to-secondary-400'
    }
  }

  return (
    <div className="particles">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`particle bg-gradient-to-r ${getParticleColor()}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default ParticleEffect 