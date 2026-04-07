import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen transition-all duration-300">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <About />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>
      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App