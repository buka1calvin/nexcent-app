import NavBar from '@/components/NavBar'
import React from 'react'

const RootLayout = ({children}:{children:React.ReactNode}) => {
    return (
      <main>
        <NavBar/>
        {children}
        </main>
    )
  }

export default RootLayout