// src/components/Navbar.jsx
import { useContext, useState } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'
import { ThemeContext } from '../contexts/theme'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12">
      
      <h1 className="text-xl font-bold">MyPortfolio</h1>

      <ul
        className={`
          fixed top-0 left-0 w-full h-screen 
          bg-white dark:bg-gray-900
          flex flex-col items-center justify-center gap-8
          text-lg font-medium
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:static md:h-auto md:flex-row md:flex md:translate-x-0 md:bg-transparent
        `}
      >
        <li>
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
        </li>
        <li>
          <a href="#skills" onClick={() => setOpen(false)} className="hover:text-blue-500 dark:hover:text-blue-400">Skills</a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <button onClick={toggleTheme} className="text-xl hover:text-blue-500 dark:hover:text-blue-400 transition">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
        </button>

        <button className="text-xl md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar