import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { about } from '../../portfolio'

const About = () => {
  return (
    <section className=" px-4 mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
      <div className='items-center'>
        <h1 className="text-3xl md:text-6xl font-bold font-['poppins'] text-center" style={{ color: 'var(--headingtext-color)' }}>
          Hi, I am <span style={{ color: 'var(--color-primary)' }}>{about.name}</span>
        </h1>

        <h2 className="mt-6 text-3xl text-center font-bold font-['poppins']" style={{ color: 'var(--color-headingtext-color)' }}>
          {about?.role}
        </h2>

        <p className="mt-6 w-full md:w-1/2 text-center font-['nunito'] mx-auto">{about?.description}</p>

        <div className="flex gap-4 mt-6 items-center justify-center">
          <a
            href={about?.resume}
            className="border px-4 py-2 rounded"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)'
            }}
          >
            Resume
          </a>

          <a href={about?.social?.github}><FaGithub /></a>
          <a href={about?.social?.linkedin}><FaLinkedin /></a>
        </div>
      </div>
    </section>
  )
}

export default About