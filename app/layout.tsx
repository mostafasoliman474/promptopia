import '@/styles/globals.css'
import Nav from '@/components/nav'
import provider from '@/components/provider'
export const metadata={
          title:'Promptopia',
          description:'Discover & Share AI'
}
const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
     <html lang='en'>
      <body>
       
          <div className="main">
            <div className="gradient"/> 
          </div>
          <main className='app'>
            <Nav/>
            {children}
          </main>
      </body>
     </html>
  )
}

export default RootLayout