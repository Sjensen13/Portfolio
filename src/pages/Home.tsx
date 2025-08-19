import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { useNavigate } from 'react-router-dom'
import PDFDownload from '../components/Layout/PDFDownload'
// import { useCursor } from '../contexts/CursorContext'

const Home: React.FC = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  // const { setCursorText, setIsHovering } = useCursor()

  const projects = [
    {
      id: 1,
      title: 'UCLA Japanese Student Association Website',
      description: 'Developing the main website for the Japanese Student Association club at the university. Collaborating with other teams within the club to incorporate their ideas and needs into the website. Implementing user-friendly navigation and layout, interactive features, and a language translation tool for Japanese speakers.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'JavaScript', 'CSS', 'Ruby on Rails', 'Figma'],
      category: 'web',
      featured: true,
      liveUrl: 'https://jsa-website-demo.com',
      githubUrl: 'https://github.com/Sjensen13/jsa-website',
    },
    {
      id: 2,
      title: 'Budget App',
      description: 'A comprehensive personal finance management application built with React, Node.js, and Supabase. Features include user authentication, budget management with customizable categories, transaction tracking for income and expenses, real-time data persistence, and responsive design. The app provides complete financial overview with summary statistics, transaction history filtering, and budget vs actual spending tracking.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Express.js', 'Supabase', 'PostgreSQL', 'React Router', 'CSS3'],
      category: 'web',
      featured: true,
      liveUrl: 'https://budget-app-demo.com',
      githubUrl: 'https://github.com/Sjensen13/budget-app',
    },
    {
      id: 3,
      title: 'Recipe App',
      description: 'Built a full-stack social media platform for food enthusiasts, enabling users to share, discover, and manage recipes. Integrated Spoonacular API to add recipes onto the server, recommending based on available ingredients and dietary preferences. Users can upload their own recipes for others to view. Developed real-time social features including messaging, notifications (likes/comments/follows), and hashtag-based discovery. Enabled detailed recipe creation with ingredients, steps, difficulty, cooking time, and category tagging.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node', 'Tailwind CSS', 'Express.js', 'Supabase', 'PostgreSQL', 'Cloudinary API', 'Spoonacular API'],
      category: 'web',
      featured: true,
      liveUrl: 'https://recipe-app-demo.com',
      githubUrl: 'https://github.com/Sjensen13/recipe-app',
    },
    {
      id: 4,
      title: 'BruinClubs',
      description: 'Developed a full-stack club discovery platform for UCLA students featuring SSO login, profile creation, and onboarding UI. Built search and recommendation systems based on user interests, with real-time filtering and interactive club cards. Designed and connected the frontend and backend for bookmarking clubs, joining, and tracking user-club relationships.',
      image: '/api/placeholder/600/400',
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'TailwindCSS', 'Python'],
      category: 'web',
      featured: true,
      liveUrl: 'https://bruinclubs-demo.com',
      githubUrl: 'https://github.com/Sjensen13/bruinclubs',
    },
    {
      id: 5,
      title: 'Stock Market Recommender',
      description: 'Utilized APIs from different stock market data websites and compared the data they provided. Created a dataframe using the API data and developed functions to calculate changes over time. Trained a machine learning model with the dataframe to predict whether the stock trend would go up or down.',
      image: '/api/placeholder/600/400',
      technologies: ['Numpy', 'Pandas', 'Scikit-Learn', 'Keras', 'MLP', 'CNN'],
      category: 'ai',
      featured: true,
      liveUrl: 'https://stock-recommender-demo.com',
      githubUrl: 'https://github.com/Sjensen13/stock-recommender',
    },
    {
      id: 6,
      title: 'Rolling Logs Game',
      description: 'A 3D web-based game built with Three.js where players control a frog character navigating through rolling logs. Features include dynamic day/night cycles, power-ups (speed boost, invincibility, jump boost), collision detection, lives system, and smooth camera transitions between first-person and third-person views. The game includes realistic physics, particle effects, and progressive difficulty scaling.',
      image: '/api/placeholder/600/400',
      technologies: ['Three.js', 'JavaScript', 'WebGL', 'OBJ Loader', 'MTL Loader', 'HTML5 Canvas'],
      category: 'game',
      featured: true,
      liveUrl: 'https://rolling-logs-game-demo.com',
      githubUrl: 'https://github.com/Sjensen13/rolling-logs-game',
    },
    {
      id: 7,
      title: 'Blackjack Backend',
      description: 'A backend implementation of the classic Blackjack card game built in C++. Features include deck management, card dealing, hand evaluation, betting system, and game state management. The project demonstrates object-oriented programming principles, data structures, and algorithmic logic for card game mechanics.',
      image: '/api/placeholder/600/400',
      technologies: ['C++', 'Object-Oriented Programming', 'Data Structures', 'Algorithms'],
      category: 'desktop',
      featured: false,
      liveUrl: 'https://blackjack-backend-demo.com',
      githubUrl: 'https://github.com/Sjensen13/blackjack-backend',
    },
    {
      id: 8,
      title: 'E-Commerce Website',
      description: 'Developing an E-Commerce Web Application where people can browse products, view details, and add items to the shopping cart. Data handling will be incorporated to store and manage product, user, and order data.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      featured: false,
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/Sjensen13/ecommerce-website',
    },
  ]

  const handleMouseEnter = (text: string) => {
    // setCursorText(text)
    // setIsHovering(true)
  }

  const handleMouseLeave = () => {
    // setCursorText('')
    // setIsHovering(false)
  }

  const scrollToTimeline = () => {
    document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
  }

  const navigateToContact = () => {
    navigate('/contact')
  }



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gray-900 dark:text-gray-100">{t('hero.title')} </span>
              <span className="gradient-text">{t('name')}</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
              {t('hero.subtitle')}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center space-x-2"
                onMouseEnter={() => handleMouseEnter('View Projects')}
                onMouseLeave={handleMouseLeave}
                onClick={scrollToTimeline}
              >
                <span>{t('hero.cta')}</span>
                <ArrowDown className="w-5 h-5" />
              </motion.button>
              
              <PDFDownload
                href="/Portfolio/Resume.pdf"
                filename="Shuma_Jensen_Resume.pdf"
                className="btn-secondary flex items-center space-x-2"
                onMouseEnter={() => handleMouseEnter('Download CV')}
                onMouseLeave={handleMouseLeave}
              >
                Download Resume
              </PDFDownload>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center space-x-2"
                onMouseEnter={() => handleMouseEnter('Contact Me')}
                onMouseLeave={handleMouseLeave}
                onClick={navigateToContact}
              >
                <Mail className="w-5 h-5" />
                <span>Contact Me</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <button
            onClick={scrollToTimeline}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-colors"
            onMouseEnter={() => handleMouseEnter('Scroll Down')}
            onMouseLeave={handleMouseLeave}
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </motion.div>
      </section>

      {/* Projects Timeline Section */}
      <section id="timeline" className="py-20 bg-gray-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">My Journey</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A timeline of my education, projects, and career milestones
            </p>
          </motion.div>
          
          {/* Projects Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 h-full"></div>
            
            {projects.map((project, index) => (
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
      </section>


    </div>
  )
}

export default Home 