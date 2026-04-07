import { useContext, useState } from 'react'
import {FaBars, FaTimes } from 'react-icons/fa'
import { ThemeContext } from '../contexts/theme'
import { CiLight } from 'react-icons/ci'
import { IoIosMoon } from 'react-icons/io'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex items-center justify-between py-4 px-6 md:px-12 gap-4">
      <ul
        className={`
          fixed top-0 left-0 w-full h-screen 
          flex flex-col items-center justify-center gap-8
          text-['16px'] font-poppins
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          md:static md:h-auto md:flex-row md:flex md:translate-x-0
          z-40
        `}
        style={{ background: 'var(--color-bg)' }}
      >

        {/* CLOSE BUTTON */}
        <button
          className="absolute top-6 right-6 text-2xl md:hidden"
          onClick={() => setOpen(false)}
        >
          <FaTimes style={{width: "20px", height:"20px"}} />
        </button>

        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <div className="flex items-center gap-4 ml-2 cursor-pointer">
        <button onClick={toggleTheme} className="text-xl">
          {theme === 'dark' ? <CiLight  style={{width: "20px", height:"20px"}} /> : <IoIosMoon style={{width: "20px", height:"20px"}} />}
        </button>

        <button className="text-xl md:hidden" onClick={() => setOpen(!open)}>
          {
          // open ? <FaTimes /> : 
            <FaBars style={{width: "22px", height:"22px"}} />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar