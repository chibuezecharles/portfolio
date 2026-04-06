import Navbar from './Navbar'
import profilrPics from "../assets/my-profile-pics.jpeg"

const Header = () => {
  return (
    <header className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
      <div className="text-xl font-bold" style={{ color: 'var(--color-primary)' }}>
        <img src={profilrPics} alt="Profile" className="w-12 h-12 rounded-full object-cover" />
      </div>
      <Navbar />
    </header>
  )
}

export default Header