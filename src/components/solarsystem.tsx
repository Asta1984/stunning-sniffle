import React from 'react'
import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"

// Planet data with unique characteristics
const planets = [
  { 
    name: 'Mercury', 
    color: 'bg-gray-400', 
    size: 'w-4 h-4', 
    orbit: 'w-48 h-48', 
    distance: 1,
    period: 8
  },
  { 
    name: 'Venus', 
    color: 'bg-orange-300', 
    size: 'w-6 h-6', 
    orbit: 'w-64 h-64', 
    distance: 2,
    period: 12
  },
  { 
    name: 'Earth', 
    color: 'bg-blue-500', 
    size: 'w-8 h-8', 
    orbit: 'w-80 h-80', 
    distance: 3,
    period: 16
  },
  { 
    name: 'Mars', 
    color: 'bg-red-500', 
    size: 'w-7 h-7', 
    orbit: 'w-96 h-96', 
    distance: 4,
    period: 20
  },
  { 
    name: 'Jupiter', 
    color: 'bg-amber-600', 
    size: 'w-16 h-16', 
    orbit: 'w-[30rem] h-[30rem]', 
    distance: 5,
    period: 24
  },
  { 
    name: 'Saturn', 
    color: 'bg-yellow-800', 
    size: 'w-14 h-14', 
    orbit: 'w-[36rem] h-[36rem]', 
    distance: 6,
    period: 28
  }
]

export function SolarSystem() {
  return (
    <div 
      className="relative w-full h-[600px] bg-black overflow-hidden 
                 flex items-center justify-center perspective-[1000px] 
                 transform-style-3d"
    >
      {/* Starry Background */}
      <motion.div 
        className="absolute inset-0 bg-black"
        animate={{
          background: [
            'radial-gradient(circle, rgba(10,10,30,1) 0%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle, rgba(15,15,40,1) 0%, rgba(0,0,0,1) 100%)',
            'radial-gradient(circle, rgba(10,10,30,1) 0%, rgba(0,0,0,1) 100%)'
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      >
        {/* Generate random stars */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </motion.div>

      {/* Sun */}
      <motion.div 
        className="absolute w-24 h-24 bg-yellow-500 rounded-full shadow-2xl"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 0px rgba(255,255,0,0.5)',
            '0 0 50px rgba(255,255,0,0.7)',
            '0 0 0px rgba(255,255,0,0.5)'
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />

      {/* Planets */}
      {planets.map((planet, index) => (
        <motion.div
          key={planet.name}
          className={`absolute border-2 border-white/10 rounded-full ${planet.orbit}`}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: planet.period,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <motion.div
            className={`absolute ${planet.color} rounded-full ${planet.size}`}
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              rotate: -360
            }}
            transition={{
              duration: planet.period / 2,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}