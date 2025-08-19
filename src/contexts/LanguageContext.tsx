import React, { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'ja'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: React.ReactNode
}

       // Translation data
       const translations = {
         en: {
           'nav.home': 'Home',
           'nav.about': 'About',
           'nav.projects': 'Projects',
           'nav.contact': 'Contact',
           'name': 'Shuma Jensen',
           'hero.title': 'Hi, I\'m',
           'hero.subtitle': 'Full Stack Developer & Designer',
           'hero.description': 'I create beautiful, interactive web experiences with modern technologies.',
           'hero.cta': 'View My Work',
           'about.title': 'About Me',
           'about.description': 'Passionate developer with expertise in modern web technologies.',
           'projects.title': 'My Projects',
           'projects.subtitle': 'A showcase of my recent work',
           'contact.title': 'Get In Touch',
           'contact.subtitle': 'Let\'s work together',
           'footer.copyright': '© 2024 Shuma Jensen. All rights reserved.',
         },
         ja: {
           'nav.home': 'ホーム',
           'nav.about': '私について',
           'nav.projects': 'プロジェクト',
           'nav.contact': 'お問い合わせ',
           'name': '茂木秀磨',
           'hero.title': 'こんにちは、私は',
           'hero.subtitle': 'フルスタック開発者＆デザイナー',
           'hero.description': 'モダンな技術で美しくインタラクティブなWeb体験を作成します。',
           'hero.cta': '作品を見る',
           'about.title': '私について',
           'about.description': 'モダンなWeb技術に精通した情熱的な開発者です。',
           'projects.title': '私のプロジェクト',
           'projects.subtitle': '最近の作品のショーケース',
           'contact.title': 'お問い合わせ',
           'contact.subtitle': '一緒に働きましょう',
           'footer.copyright': '© 2024 茂木秀磨. 全著作権所有.',
         },
       }

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
           const savedLanguage = localStorage.getItem('language') as Language
       if (savedLanguage && ['en', 'ja'].includes(savedLanguage)) {
      return savedLanguage
    }
    
               // Check browser language
           const browserLang = navigator.language.split('-')[0]
           if (['ja'].includes(browserLang)) {
             return browserLang as Language
           }
    
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('language', language)
    document.documentElement.lang = language
  }, [language])

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  const value = {
    language,
    setLanguage,
    t,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
} 