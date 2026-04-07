import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const ProjectContainer = ({ project }) => {
  return (
    <div className="p-5 rounded-lg card transition hover:scale-105">

      {project?.image && (
        <img src={project?.image} className="w-full h-44 object-cover rounded mb-4" />
      )}

      <h3 className="text-xl font-bold font-['poppins'] text-center">{project?.name}</h3>

      <p className="mt-2 text-sm font-['nunito'] text-center">{project?.description}</p>

      <div className="flex flex-wrap gap-2 mt-3 justify-center align-center">
        {project?.stack?.map((item, i) => (
          <span key={i} className="text-xs px-2 py-1 rounded-lg font-['nunito'] overflow-hidden"
            style={{ background: 'var(--color-bg)' }}>
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4 justify-center align-center">
        <a href={project?.sourceCode} target='_blank'><FaGithub style={{width:'22px', height:'22px'}} /></a>
        <a href={project?.livePreview} target='_blank'><FiExternalLink style={{width:'22px', height:'22px'}} /></a>
      </div>
    </div>
  )
}

export default ProjectContainer