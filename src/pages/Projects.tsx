import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye, Code, Database, Palette, Zap } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
// import { useCursor } from '../contexts/CursorContext'
import TechStackVisualizer from '../components/Projects/TechStackVisualizer'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: 'web' | 'mobile' | 'desktop' | 'ai' | 'game'
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Budget App',
    description: 'A comprehensive personal finance management application built with React, Node.js, and Supabase. Features include user authentication, budget management with customizable categories, transaction tracking for income and expenses, real-time data persistence, and responsive design. The app provides complete financial overview with summary statistics, transaction history filtering, and budget vs actual spending tracking.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'React Router', 'CSS3'],
    category: 'web',
    featured: true,
  },
  {
    id: 2,
    title: 'Recipe App',
    description: 'Built a full-stack social media platform for food enthusiasts, enabling users to share, discover, and manage recipes. Integrated Spoonacular API to add recipes onto the server, recommending based on available ingredients and dietary preferences. Users can upload their own recipes for others to view. Developed real-time social features including messaging, notifications (likes/comments/follows), and hashtag-based discovery. Enabled detailed recipe creation with ingredients, steps, difficulty, cooking time, and category tagging.',
    image: '/api/placeholder/600/400',
    technologies: ['React', 'Node', 'Tailwind CSS', 'Express.js', 'Supabase', 'PostgreSQL', 'Cloudinary API', 'Spoonacular API'],
    category: 'web',
    featured: true,
  },
  {
    id: 3,
    title: 'BruinClubs',
    description: 'Developed a full-stack club discovery platform for UCLA students featuring SSO login, profile creation, and onboarding UI. Built search and recommendation systems based on user interests, with real-time filtering and interactive club cards. Designed and connected the frontend and backend for bookmarking clubs, joining, and tracking user-club relationships.',
    image: '/api/placeholder/600/400',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'TailwindCSS', 'Python'],
    category: 'web',
    featured: true,
  },
  {
    id: 4,
    title: 'Stock Market Recommender',
    description: 'Utilized APIs from different stock market data websites and compared the data they provided. Created a dataframe using the API data and developed functions to calculate changes over time. Trained a machine learning model with the dataframe to predict whether the stock trend would go up or down.',
    image: '/api/placeholder/600/400',
    technologies: ['Numpy', 'Pandas', 'Scikit-Learn', 'Keras', 'MLP', 'CNN'],
    category: 'ai',
    featured: true,
  },
  {
    id: 5,
    title: 'Rolling Logs Game',
    description: 'A 3D web-based game built with Three.js where players control a frog character navigating through rolling logs. Features include dynamic day/night cycles, power-ups (speed boost, invincibility, jump boost), collision detection, lives system, and smooth camera transitions between first-person and third-person views. The game includes realistic physics, particle effects, and progressive difficulty scaling.',
    image: '/api/placeholder/600/400',
    technologies: ['Three.js', 'JavaScript', 'WebGL', 'OBJ Loader', 'MTL Loader', 'HTML5 Canvas'],
    category: 'game',
    featured: true,
  },
  {
    id: 6,
    title: 'Blackjack Backend',
    description: 'A backend implementation of the classic Blackjack card game built in C++. Features include deck management, card dealing, hand evaluation, betting system, and game state management. The project demonstrates object-oriented programming principles, data structures, and algorithmic logic for card game mechanics.',
    image: '/api/placeholder/600/400',
    technologies: ['C++', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
    category: 'desktop',
    featured: false,
  },
  {
    id: 7,
    title: 'E-Commerce Website',
    description: 'Developing an E-Commerce Web Application where people can browse products, view details, and add items to the shopping cart. Data handling will be incorporated to store and manage product, user, and order data.',
    image: '/api/placeholder/600/400',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    featured: false,
  },
]

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const { t } = useLanguage()
  // const { setCursorText, setIsHovering } = useCursor()

  const categories = [
    { id: 'all', name: 'All Projects', icon: <Code className="w-5 h-5" /> },
    { id: 'web', name: 'Web Apps', icon: <Code className="w-5 h-5" /> },
    { id: 'mobile', name: 'Mobile Apps', icon: <Zap className="w-5 h-5" /> },
    { id: 'desktop', name: 'Desktop Apps', icon: <Database className="w-5 h-5" /> },
    { id: 'ai', name: 'AI/ML', icon: <Zap className="w-5 h-5" /> },
    { id: 'game', name: 'Games', icon: <Palette className="w-5 h-5" /> },
  ]

  const filteredProjects = projects

  const handleMouseEnter = (text: string) => {
    // setCursorText(text)
    // setIsHovering(true)
  }

  const handleMouseLeave = () => {
    // setCursorText('')
    // setIsHovering(false)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">{t('projects.title')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>



        {/* Projects Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mb-16"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 h-full"></div>
          
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full border-4 border-white dark:border-dark-800 shadow-lg z-10"></div>
              
              {/* Project Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <motion.div
                  className="card bg-white dark:bg-dark-800 shadow-xl transition-all duration-300"
                  onMouseEnter={() => handleMouseEnter(project.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {project.title}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {project.category.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 text-primary-700 dark:text-primary-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </div>
  )
}

export default Projects 