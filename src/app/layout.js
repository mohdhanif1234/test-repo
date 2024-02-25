import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


export const metadata = {
  title: 'Blog',
  description: 'I am a blog',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
