import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, GitCommit, GitBranch, Star, Eye, Calendar, Clock } from 'lucide-react'

interface GitHubCommit {
  id: string
  message: string
  repository: string
  date: string
  author: string
  avatar: string
}

interface GitHubRepo {
  id: number
  name: string
  description: string
  language: string
  stars: number
  forks: number
  watchers: number
  updated_at: string
  html_url: string
}

const GitHubActivity: React.FC = () => {
  const [commits, setCommits] = useState<GitHubCommit[]>([])
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Mock data for demonstration - replace with actual GitHub API calls
  useEffect(() => {
    const mockCommits: GitHubCommit[] = [
      {
        id: '1',
        message: 'feat: Add interactive timeline component',
        repository: 'portfolio-website',
        date: '2024-01-15T10:30:00Z',
        author: 'Shuma Jensen',
        avatar: 'https://github.com/Sjensen13.png',
      },
      {
        id: '2',
        message: 'fix: Resolve responsive design issues',
        repository: 'ecommerce-platform',
        date: '2024-01-14T15:45:00Z',
        author: 'Shuma Jensen',
        avatar: 'https://github.com/Sjensen13.png',
      },
      {
        id: '3',
        message: 'docs: Update README with new features',
        repository: 'react-components',
        date: '2024-01-13T09:20:00Z',
        author: 'Shuma Jensen',
        avatar: 'https://github.com/Sjensen13.png',
      },
      {
        id: '4',
        message: 'refactor: Optimize performance with React.memo',
        repository: 'portfolio-website',
        date: '2024-01-12T14:15:00Z',
        author: 'Shuma Jensen',
        avatar: 'https://github.com/Sjensen13.png',
      },
      {
        id: '5',
        message: 'feat: Implement dark mode toggle',
        repository: 'ui-library',
        date: '2024-01-11T11:30:00Z',
        author: 'Shuma Jensen',
        avatar: 'https://github.com/Sjensen13.png',
      },
    ]

    const mockRepos: GitHubRepo[] = [
      {
        id: 1,
        name: 'portfolio-website',
        description: 'Interactive portfolio website built with React, TypeScript, and modern web technologies.',
        language: 'TypeScript',
        stars: 45,
        forks: 12,
        watchers: 8,
        updated_at: '2024-01-15T10:30:00Z',
        html_url: 'https://github.com/Sjensen13/portfolio-website',
      },
      {
        id: 2,
        name: 'ecommerce-platform',
        description: 'Full-stack e-commerce platform with payment integration and admin dashboard.',
        language: 'JavaScript',
        stars: 32,
        forks: 8,
        watchers: 5,
        updated_at: '2024-01-14T15:45:00Z',
        html_url: 'https://github.com/Sjensen13/ecommerce-platform',
      },
      {
        id: 3,
        name: 'react-components',
        description: 'Reusable React component library with TypeScript and Storybook.',
        language: 'TypeScript',
        stars: 28,
        forks: 6,
        watchers: 4,
        updated_at: '2024-01-13T09:20:00Z',
        html_url: 'https://github.com/Sjensen13/react-components',
      },
    ]

    // Simulate API call
    setTimeout(() => {
      setCommits(mockCommits)
      setRepos(mockRepos)
      setLoading(false)
    }, 1000)
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return date.toLocaleDateString()
  }

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      Python: 'bg-green-500',
      React: 'bg-cyan-500',
      'CSS': 'bg-purple-500',
      'HTML': 'bg-orange-500',
    }
    return colors[language] || 'bg-gray-500'
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading GitHub activity...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <button className="btn-primary">Retry</button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Recent Commits */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <GitCommit className="w-6 h-6 text-primary-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Recent Commits
          </h3>
        </div>
        
        <div className="space-y-4">
          {commits.map((commit, index) => (
            <motion.div
              key={commit.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start space-x-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
            >
              <img
                src={commit.avatar}
                alt={commit.author}
                className="w-8 h-8 rounded-full"
              />
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {commit.message}
                </p>
                <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center space-x-1">
                    <GitBranch className="w-3 h-3" />
                    <span>{commit.repository}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{formatDate(commit.date)}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Popular Repositories */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="card p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <Github className="w-6 h-6 text-primary-500" />
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Popular Repositories
          </h3>
        </div>
        
        <div className="space-y-4">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4 rounded-lg bg-gray-50 dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                  {repo.name}
                </h4>
                <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3" />
                    <span>{repo.stars}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <GitBranch className="w-3 h-3" />
                    <span>{repo.forks}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{repo.watchers}</span>
                  </span>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {repo.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {repo.language}
                  </span>
                </div>
                
                <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>Updated {formatDate(repo.updated_at)}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <a
            href="https://github.com/Sjensen13"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Github className="w-5 h-5" />
            <span>View All on GitHub</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default GitHubActivity 