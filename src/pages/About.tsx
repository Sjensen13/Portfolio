import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Calendar, Download, Github, Linkedin, Twitter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import PDFDownload from '../components/Layout/PDFDownload'
// import { useCursor } from '../contexts/CursorContext'

const About: React.FC = () => {
  const { t } = useLanguage()
  // const { setCursorText, setIsHovering } = useCursor()

  const skills = [
    { name: 'React', level: 60, category: 'Frontend' },
    { name: 'JavaScript', level: 65, category: 'Frontend' },
    { name: 'Node.js', level: 60, category: 'Backend' },
    { name: 'Python', level: 65, category: 'Backend' },
    { name: 'PostgreSQL', level: 60, category: 'Database' },
    { name: 'React Native', level: 60, category: 'Mobile' },
    { name: 'C++', level: 65, category: 'Backend' },
  ]

  const experiences = [
    {
      year: 'January 2025 - Present',
      title: 'UCLA Japanese Student Association Website',
      company: 'Web Developer',
      description: 'Developing the main website for the Japanese Student Association club at the university. Collaborating with other teams within the club to incorporate their ideas and needs into the website. Implementing user-friendly navigation and layout, interactive features, and a language translation tool for Japanese speakers.',
      technologies: 'HTML, JavaScript, CSS, Ruby on Rails, Figma',
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
            <span className="gradient-text">{t('about.title')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card p-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-dark-700 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600 dark:text-gray-400">YN</span>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Shuma Jensen
              </h2>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>ShumaJensen522@gmail.com</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>Irvine, CA</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Available for opportunities</span>
                </div>
              </div>
              
              <div className="flex justify-center space-x-4 mb-6">
                <a
                  href="https://github.com/Sjensen13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                  onMouseEnter={() => handleMouseEnter('GitHub')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shuma-jensen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
                  onMouseEnter={() => handleMouseEnter('LinkedIn')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              
              <PDFDownload
                href="/Resume.pdf"
                filename="Shuma_Jensen_Resume.pdf"
                className="btn-primary w-full flex items-center justify-center space-x-2"
                onMouseEnter={() => handleMouseEnter('Download Resume')}
                onMouseLeave={handleMouseLeave}
              >
                Download Resume
              </PDFDownload>
            </div>
          </motion.div>

          {/* Skills & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Skills & Technologies
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                    
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {skill.category}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
                Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="card p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {exp.year.split(' ')[0].slice(-2)}
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                          {exp.title}
                        </h4>
                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {exp.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {exp.year}
                          </span>
                          <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                            {exp.technologies}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About 