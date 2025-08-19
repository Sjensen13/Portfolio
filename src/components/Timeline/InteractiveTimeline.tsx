import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Award, Code, GraduationCap, Briefcase } from 'lucide-react'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineItem {
  id: number
  year: string
  title: string
  subtitle: string
  description: string
  type: 'education' | 'work' | 'project' | 'achievement'
  location?: string
  technologies?: string[]
  icon: React.ReactNode
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: '2024',
    title: 'Senior Full Stack Developer',
    subtitle: 'Tech Company Inc.',
    description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies.',
    type: 'work',
    location: 'San Francisco, CA',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 2,
    year: '2023',
    title: 'E-commerce Platform',
    subtitle: 'Personal Project',
    description: 'Built a full-featured e-commerce platform with payment integration and admin dashboard.',
    type: 'project',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 3,
    year: '2022',
    title: 'Frontend Developer',
    subtitle: 'Startup XYZ',
    description: 'Developed responsive web applications and improved user experience across multiple products.',
    type: 'work',
    location: 'Remote',
    technologies: ['React', 'Vue.js', 'Sass', 'Jest'],
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 4,
    year: '2021',
    title: 'Best Developer Award',
    subtitle: 'Tech Conference 2021',
    description: 'Recognized for outstanding contributions to open-source projects and innovative solutions.',
    type: 'achievement',
    icon: <Award className="w-6 h-6" />,
  },
  {
    id: 5,
    year: '2020',
    title: 'Computer Science Degree',
    subtitle: 'University of Technology',
    description: 'Graduated with honors in Computer Science with focus on software engineering and web development.',
    type: 'education',
    location: 'New York, NY',
    technologies: ['Java', 'Python', 'Algorithms', 'Data Structures'],
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: 6,
    year: '2019',
    title: 'Portfolio Website',
    subtitle: 'Personal Project',
    description: 'Created an interactive portfolio website showcasing projects and skills with modern animations.',
    type: 'project',
    technologies: ['React', 'Framer Motion', 'GSAP', 'Three.js'],
    icon: <Code className="w-6 h-6" />,
  },
]

const InteractiveTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!timelineRef.current) return

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    })

    // Animate timeline line
    timeline.fromTo(
      '.timeline-line',
      { scaleY: 0 },
      { scaleY: 1, duration: 1, ease: 'power2.out' }
    )

    // Animate timeline items
    itemsRef.current.forEach((item, index) => {
      if (!item) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
      )
    })

    return () => {
      timeline.kill()
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const getTypeColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500'
      case 'work':
        return 'bg-green-500'
      case 'project':
        return 'bg-purple-500'
      case 'achievement':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  const getTypeBgColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return 'bg-blue-50 dark:bg-blue-900/20'
      case 'work':
        return 'bg-green-50 dark:bg-green-900/20'
      case 'project':
        return 'bg-purple-50 dark:bg-purple-900/20'
      case 'achievement':
        return 'bg-yellow-50 dark:bg-yellow-900/20'
      default:
        return 'bg-gray-50 dark:bg-gray-900/20'
    }
  }

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 timeline-line origin-top" />
      
      {/* Timeline Items */}
      <div className="space-y-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-dark-800 border-4 border-primary-500 rounded-full z-10" />
            
            {/* Content Card */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
              <motion.div
                className={`card p-6 ${getTypeBgColor(item.type)} hover:shadow-xl transition-all duration-300 group`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${getTypeColor(item.type)} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {item.year}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {item.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                      {item.subtitle}
                    </p>
                    
                    {item.location && (
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    )}
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {item.technologies && (
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-dark-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default InteractiveTimeline 