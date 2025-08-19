// import React, { createContext, useContext, useEffect, useState } from 'react'

// interface CursorContextType {
//   cursorText: string
//   setCursorText: (text: string) => void
//   isHovering: boolean
//   setIsHovering: (hovering: boolean) => void
// }

// const CursorContext = createContext<CursorContextType | undefined>(undefined)

// export const useCursor = () => {
//   const context = useContext(CursorContext)
//   if (context === undefined) {
//     throw new Error('useCursor must be used within a CursorProvider')
//   }
//   return context
// }

// interface CursorProviderProps {
//   children: React.ReactNode
// }

// export const CursorProvider: React.FC<CursorProviderProps> = ({ children }) => {
//   const [cursorText, setCursorText] = useState('')
//   const [isHovering, setIsHovering] = useState(false)

//   const value = {
//     cursorText,
//     setCursorText,
//     isHovering,
//     setIsHovering,
//   }

//   return (
//     <CursorContext.Provider value={value}>
//       {children}
//     </CursorContext.Provider>
//   )
// } 