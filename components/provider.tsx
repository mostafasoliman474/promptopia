'use client'
import { SessionProvider } from "next-auth/react"
const provider = ({children}:{children:React.ReactNode},session:null) => {
  return (
    <SessionProvider session={session}>
          {children}
    </SessionProvider>
  )
}

export default provider