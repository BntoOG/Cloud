import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Integrations from './components/Integrations'
import Spaces from './components/Spaces'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatAssistant from './components/ChatAssistant'
import GalaxyBackground from './components/GalaxyBackground'

export default function App() {
  return (
    <>
      <GalaxyBackground />
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Integrations />
        <Spaces />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  )
}
