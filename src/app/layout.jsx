import './globals.css'
import Header from '@/components/Header'
import Provider from './provider'
import Navbar from '@/components/Navbar'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Header */}
            <Header />
          {/* NavBar */}
            <Navbar />
          {/* SearchBox */}
          {children}
        </Provider>
      </body>
    </html>
  )
}
