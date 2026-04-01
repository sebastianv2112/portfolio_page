import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import Work from './components/work/Work'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
