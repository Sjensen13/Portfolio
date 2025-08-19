import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Monitor, Globe, Github, Linkedin } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
// import { useCursor } from '../../contexts/CursorContext'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  // const { setCursorText, setIsHovering } = useCursor()

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ja', name: '日本語' },
  ]

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (text: string) => {
    // setCursorText(text)
    // setIsHovering(true)
  }

  const handleMouseLeave = () => {
    // setCursorText('')
    // setIsHovering(false)
  }

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />
      case 'dark':
        return <Moon className="w-5 h-5" />

      default:
        return <Sun className="w-5 h-5" />
    }
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-200 dark:border-dark-700'
            : 'bg-white/10 dark:bg-dark-900/10 backdrop-blur-sm'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold gradient-text"
              onMouseEnter={() => handleMouseEnter('Home')}
              onMouseLeave={handleMouseLeave}
            >
              {t('name')}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-primary-500'
                      : 'text-white dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-500"
                      layoutId="activeTab"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Controls */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative group">
                <button
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-white hover:bg-white/20 dark:hover:bg-dark-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('Language')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {languages.find(lang => lang.code === language)?.name}
                  </span>
                </button>
                <div className="absolute top-full right-0 mt-2 w-32 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors ${
                        language === lang.code ? 'text-primary-500' : ''
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-white hover:bg-white/20 dark:hover:bg-dark-700 transition-colors"
                onMouseEnter={() => handleMouseEnter('Theme')}
                onMouseLeave={handleMouseLeave}
              >
                {getThemeIcon()}
              </button>

              {/* Social Links */}
              <div className="flex items-center space-x-2">
                <a
                  href="https://github.com/Sjensen13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white hover:bg-white/20 dark:hover:bg-dark-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('GitHub')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/shuma-jensen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-white hover:bg-white/20 dark:hover:bg-dark-700 transition-colors"
                  onMouseEnter={() => handleMouseEnter('LinkedIn')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Linkedin className="w-4 h-4" />
                </a>

              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              onMouseEnter={() => handleMouseEnter('Menu')}
              onMouseLeave={handleMouseLeave}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-white dark:bg-dark-900"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full pt-20 px-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-4 text-xl font-medium border-b border-gray-200 dark:border-dark-700 ${
                    location.pathname === item.path
                      ? 'text-primary-500'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="mt-8 flex items-center justify-between">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-700"
                >
                  {getThemeIcon()}
                  <span>Theme</span>
                </button>
                
                <div className="flex items-center space-x-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as any)}
                      className={`px-3 py-1 rounded text-sm ${
                        language === lang.code
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 dark:bg-dark-700'
                      }`}
                    >
                      {lang.code.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation 