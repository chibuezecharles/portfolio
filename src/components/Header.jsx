import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
      <h2 className="text-xl font-bold text-blue-500">CC.</h2>
      <Navbar />
    </header>
  )
}

export default Header