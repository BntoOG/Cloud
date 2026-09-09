import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Integrations from './components/Integrations'
import Certificates from './components/Certificates'
import Spaces from './components/Spaces'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatAssistant from './components/ChatAssistant'
import GalaxyBackground from './components/GalaxyBackground'
import { useLanguage } from './context/LanguageContext'

export default function App() {
  const { t } = useLanguage()
  return (
    <>
      <GalaxyBackground />
      <a href="#main" className="skip-link">{t.a11y.skip}</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Integrations />
        <Certificates />
        <Spaces />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  )
}
