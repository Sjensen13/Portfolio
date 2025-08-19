import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import emailjs from '@emailjs/browser'
import { getEmailJSConfig } from '../config/emailjs'
// import { useCursor } from '../contexts/CursorContext'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const { t } = useLanguage()
  // const { setCursorText, setIsHovering } = useCursor()

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'shumajensen522@gmail.com',
      link: 'mailto:shumajensen522@gmail.com',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/shuma-jensen',
      link: 'https://www.linkedin.com/in/shuma-jensen',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Irvine, CA',
      link: undefined,
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Sjensen13',
      icon: <Github className="w-6 h-6" />,
      color: 'hover:bg-gray-900',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shuma-jensen',
      icon: <Linkedin className="w-6 h-6" />,
      color: 'hover:bg-blue-600',
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const config = getEmailJSConfig()
      
      // EmailJS configuration
      const templateParams = {
        name: formData.name,
        email: formData.email,
        title: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString()
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        config.SERVICE_ID,
        config.TEMPLATE_ID,
        templateParams,
        config.PUBLIC_KEY
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

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
            <span className="gradient-text">{t('contact.title')}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Send me a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="input"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="input"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="input resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  onMouseEnter={() => handleMouseEnter('Send Message')}
                  onMouseLeave={handleMouseLeave}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <p className="text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                  >
                    <p className="text-red-800 dark:text-red-200">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Get in touch
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors"
                    onMouseEnter={() => handleMouseEnter(info.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-gray-100">
                        {info.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Follow me
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-50 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-200 ${social.color}`}
                    onMouseEnter={() => handleMouseEnter(social.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {social.icon}
                    <span className="text-sm font-medium">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Chat */}
            <div className="card p-8 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <MessageCircle className="w-8 h-8" />
                <h3 className="text-xl font-bold">Quick Chat</h3>
              </div>
              <p className="mb-6 text-primary-100">
                Prefer a quick conversation? I'm available for video calls and instant messaging.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-white font-medium py-3 px-6 rounded-lg hover:bg-white/30 transition-colors"
                onMouseEnter={() => handleMouseEnter('Schedule Call')}
                onMouseLeave={handleMouseLeave}
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact 