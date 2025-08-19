import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TechStackVisualizerProps {
  technologies: string[]
}

const TechStackVisualizer: React.FC<TechStackVisualizerProps> = ({ technologies }) => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const techCategories = {
    frontend: {
      color: '#3B82F6',
      techs: ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Sass', 'Next.js', 'Nuxt.js']
    },
    backend: {
      color: '#10B981',
      techs: ['Node.js', 'Python', 'Java', 'C#', 'PHP', 'Ruby', 'Go', 'Rust', 'FastAPI', 'Express', 'Django', 'Spring']
    },
    database: {
      color: '#F59E0B',
      techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLite', 'Firebase', 'Supabase', 'DynamoDB']
    },
    devops: {
      color: '#8B5CF6',
      techs: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'CI/CD', 'Git', 'Jenkins', 'Terraform']
    },
    mobile: {
      color: '#EF4444',
      techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Ionic']
    },
    ai: {
      color: '#06B6D4',
      techs: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Machine Learning', 'Deep Learning']
    }
  }

  const getTechCategory = (tech: string) => {
    for (const [category, config] of Object.entries(techCategories)) {
      if (config.techs.some(t => tech.toLowerCase().includes(t.toLowerCase()) || t.toLowerCase().includes(tech.toLowerCase()))) {
        return category
      }
    }
    return 'other'
  }

  const getTechColor = (tech: string) => {
    const category = getTechCategory(tech)
    return techCategories[category as keyof typeof techCategories]?.color || '#6B7280'
  }

  const getTechDescription = (tech: string) => {
    const descriptions: { [key: string]: string } = {
      'React': 'A JavaScript library for building user interfaces, particularly single-page applications.',
      'Node.js': 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side development.',
      'TypeScript': 'A strongly typed programming language that builds on JavaScript.',
      'PostgreSQL': 'A powerful, open source object-relational database system.',
      'Docker': 'A platform for developing, shipping, and running applications in containers.',
      'Python': 'A high-level, interpreted programming language known for its simplicity and readability.',
      'TensorFlow': 'An open-source machine learning framework for dataflow and differentiable programming.',
      'AWS': 'Amazon Web Services - a comprehensive cloud computing platform.',
      'React Native': 'A framework for building native applications using React.',
      'Firebase': 'A platform developed by Google for creating mobile and web applications.',
      'Next.js': 'A React framework for production with server-side rendering and static site generation.',
      'Tailwind CSS': 'A utility-first CSS framework for rapidly building custom user interfaces.',
      'MongoDB': 'A source-available cross-platform document-oriented database program.',
      'Redis': 'An in-memory data structure store, used as a database, cache, and message broker.',
      'Express': 'A minimal and flexible Node.js web application framework.',
      'FastAPI': 'A modern, fast web framework for building APIs with Python.',
      'Django': 'A high-level Python web framework that encourages rapid development.',
      'Kubernetes': 'An open-source container orchestration platform for automating deployment.',
      'Git': 'A distributed version control system for tracking changes in source code.',
      'JavaScript': 'A programming language that is one of the core technologies of the World Wide Web.'
    }
    return descriptions[tech] || 'A technology used in modern software development.'
  }

  const getRelatedTechs = (tech: string) => {
    const relationships: { [key: string]: string[] } = {
      'React': ['TypeScript', 'JavaScript', 'Node.js', 'Next.js'],
      'Node.js': ['Express', 'PostgreSQL', 'MongoDB', 'JavaScript'],
      'TypeScript': ['React', 'Node.js', 'Angular', 'JavaScript'],
      'Python': ['FastAPI', 'Django', 'TensorFlow', 'PostgreSQL'],
      'PostgreSQL': ['Node.js', 'Python', 'Express', 'Django'],
      'Docker': ['Node.js', 'Python', 'PostgreSQL', 'Redis'],
      'AWS': ['Docker', 'Node.js', 'PostgreSQL'],
      'React Native': ['React', 'JavaScript', 'TypeScript'],
      'TensorFlow': ['Python', 'Machine Learning'],
      'Firebase': ['React', 'React Native', 'JavaScript'],
      'Next.js': ['React', 'TypeScript', 'JavaScript'],
      'Tailwind CSS': ['React', 'Vue.js', 'HTML', 'CSS'],
      'MongoDB': ['Node.js', 'Express', 'JavaScript'],
      'Redis': ['Node.js', 'Python', 'Docker'],
      'Express': ['Node.js', 'JavaScript', 'MongoDB'],
      'FastAPI': ['Python', 'PostgreSQL', 'Docker'],
      'Django': ['Python', 'PostgreSQL', 'Redis'],
      'Kubernetes': ['Docker', 'AWS', 'Azure'],
      'Git': ['GitHub', 'CI/CD', 'Docker'],
      'JavaScript': ['React', 'Node.js', 'TypeScript', 'Express']
    }
    return relationships[tech] || []
  }

  return (
    <div className="relative">
      {/* Tech Stack Grid */}
      <div className="card p-8 bg-gray-50 dark:bg-dark-800">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const color = getTechColor(tech)
            const category = getTechCategory(tech)
            const relatedTechs = getRelatedTechs(tech)
            const isRelated = hoveredTech && relatedTechs.includes(hoveredTech)
            
            return (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: hoveredTech ? (isRelated || tech === hoveredTech ? 1 : 0.3) : 1,
                  scale: hoveredTech ? (isRelated || tech === hoveredTech ? 1.05 : 0.95) : 1
                }}
                transition={{ duration: 0.3 }}
                className={`relative group cursor-pointer ${
                  hoveredTech && !isRelated && tech !== hoveredTech ? 'pointer-events-none' : ''
                }`}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <motion.div
                  className="p-6 rounded-xl border-2 border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-700 hover:shadow-lg transition-all duration-300"
                  style={{ borderColor: hoveredTech === tech ? color : undefined }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-center">
                    <div 
                      className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: color }}
                    >
                      {tech.charAt(0)}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                      {tech}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                      {category}
                    </span>
                  </div>
                  
                  {/* Connection Lines */}
                  {hoveredTech === tech && relatedTechs.length > 0 && (
                    <div className="absolute inset-0 pointer-events-none">
                      {relatedTechs.map((relatedTech, relatedIndex) => {
                        const relatedElement = document.querySelector(`[data-tech="${relatedTech}"]`)
                        if (!relatedElement) return null
                        
                        return (
                          <svg
                            key={relatedIndex}
                            className="absolute inset-0 w-full h-full"
                            style={{ zIndex: -1 }}
                          >
                            <line
                              x1="50%"
                              y1="50%"
                              x2="50%"
                              y2="50%"
                              stroke={color}
                              strokeWidth="2"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                          </svg>
                        )
                      })}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Technology Info Panel */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute top-4 right-4 w-80 card p-6 bg-white dark:bg-dark-800 shadow-xl z-10"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: getTechColor(selectedTech) }}
              />
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {selectedTech}
              </h3>
            </div>
            
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full">
                {getTechCategory(selectedTech)}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
              {getTechDescription(selectedTech)}
            </p>
            
            {getRelatedTechs(selectedTech).length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
                  Related Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {getRelatedTechs(selectedTech).map((relatedTech) => (
                    <span
                      key={relatedTech}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {relatedTech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <button
              onClick={() => setSelectedTech(null)}
              className="text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
            >
              Close
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {Object.entries(techCategories).map(([category, config]) => (
          <div key={category} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: config.color }}
            />
            <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackVisualizer 