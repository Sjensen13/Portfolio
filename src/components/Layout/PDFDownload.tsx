import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, AlertCircle } from 'lucide-react'

interface PDFDownloadProps {
  href: string
  filename: string
  className?: string
  children?: React.ReactNode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

const PDFDownload: React.FC<PDFDownloadProps> = ({
  href,
  filename,
  className = "btn-secondary flex items-center space-x-2",
  children,
  onMouseEnter,
  onMouseLeave
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault()
    
    // Try HTML download first (most reliable)
    try {
      const link = document.createElement('a')
      link.href = href
      link.download = filename
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return
    } catch (err) {
      console.log('HTML download failed, trying fetch method...')
    }

    // Fallback to fetch method
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch(href, {
        credentials: 'include',
        headers: {
          'Accept': 'application/pdf'
        }
      })

      if (!response.ok) {
        throw new Error(`Download failed: ${response.status} ${response.statusText}`)
      }

      const blob = await response.blob()
      
      // Verify it's actually a PDF
      if (blob.type !== 'application/pdf' && !blob.type.includes('pdf')) {
        // Check first few bytes for PDF signature
        const arrayBuffer = await blob.arrayBuffer()
        const uint8Array = new Uint8Array(arrayBuffer)
        const pdfSignature = [0x25, 0x50, 0x44, 0x46] // %PDF
        const isPDF = pdfSignature.every((byte, index) => uint8Array[index] === byte)
        
        if (!isPDF) {
          throw new Error('File is not a valid PDF')
        }
      }

      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
      
    } catch (err) {
      console.error('PDF download error:', err)
      setError(err instanceof Error ? err.message : 'Download failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
      ) : error ? (
        <AlertCircle className="w-5 h-5 text-red-500" />
      ) : (
        <Download className="w-5 h-5" />
      )}
      <span>
        {isLoading ? 'Downloading...' : error ? 'Download Failed' : children || 'Download Resume'}
      </span>
    </motion.button>
  )
}

export default PDFDownload
