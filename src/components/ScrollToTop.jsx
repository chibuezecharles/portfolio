import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handle = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', handle)
    return () => window.removeEventListener('scroll', handle)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow"
    >
      <FaArrowUp />
    </button>
  )
}

export default ScrollToTop