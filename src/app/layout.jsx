import './globals.css'
import Header from '@/components/Header'
import Provider from './provider'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Header */}
            <Header />
          {/* NavBar */}

          {/* SearchBox */}
          {children}
        </Provider>
      </body>
    </html>
  )
}
