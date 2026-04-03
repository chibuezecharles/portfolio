import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const ProjectContainer = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:scale-105 transition">

      {project.image && (
        <img
          src={project.image}
          className="w-full h-44 object-cover rounded mb-4"
        />
      )}

      <h3 className="text-xl font-semibold">{project.name}</h3>

      <p className="mt-2 text-sm text-gray-500">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {project.stack.map((item, i) => (
          <span key={i} className="text-xs bg-gray-200 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <a href={project.sourceCode}><FaGithub /></a>
        <a href={project.livePreview}><FiExternalLink /></a>
      </div>
    </div>
  )
}

export default ProjectContainer