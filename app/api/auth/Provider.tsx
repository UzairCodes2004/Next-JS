'use client'

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

interface Props {
  children: ReactNode  // Fixed the typo: "childern" → "children"
}

const AuthProvider = ({ children }: Props) => {  // Accept props correctly
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}

export default AuthProvider