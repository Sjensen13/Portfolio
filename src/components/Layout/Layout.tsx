import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
// import CustomCursor from './CustomCursor'
import ParticleEffect from './ParticleEffect'
import ScrollToTop from './ScrollToTop'
import { useTheme } from '../../contexts/ThemeContext'

const Layout: React.FC = () => {
  const { theme } = useTheme()

  return (
    <div className={`app theme-${theme}`}>
      <ScrollToTop />
      <ParticleEffect />
      {/* <CustomCursor /> */}
      <Navigation />
      <main className="relative z-10 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout 