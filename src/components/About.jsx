import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { about } from '../../portfolio'

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-10 flex flex-col md:flex-row items-center gap-6">
      
      <img
        src={about.picture}
        alt={about.name}
        className="w-40 h-40 rounded-full object-cover shadow-md"
      />

      <div>
        <h1 className="text-3xl font-bold">
          Hi, I am <span className="text-blue-500">{about.name}</span>
        </h1>

        <h2 className="mt-2 text-xl text-gray-500">{about.role}</h2>

        <p className="mt-4 max-w-md">{about.description}</p>

        <div className="flex gap-4 mt-4">
          <a href={about.resume} className="border px-4 py-2 rounded border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
            Resume
          </a>

          <a href={about.social.github}><FaGithub /></a>
          <a href={about.social.linkedin}><FaLinkedin /></a>
        </div>
      </div>
    </section>
  )
}

export default About