import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

const ProjectContainer = ({ project, index }) => {
  return (
    <motion.div 
      className="p-5 rounded-lg card transition hover:scale-105"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        transition: { duration: 0.8 }
      }}
    >
      {project?.image && (
        <motion.img 
          src={project?.image} 
          className="w-full h-44 object-cover rounded mb-4" 
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.4 }}
        />
      )}

      <h3 className="text-xl font-bold font-['poppins'] text-center">{project?.name}</h3>
      <p className="mt-2 text-sm font-['nunito'] text-center">{project?.description}</p>

      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {project?.stack?.map((item, i) => (
          <span 
            key={i} 
            className="text-xs px-2 py-1 rounded-lg font-['nunito'] overflow-hidden"
            style={{ background: 'var(--color-bg)' }}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4 justify-center">
        <motion.a 
          href={project?.sourceCode} 
          target='_blank'
          whileHover={{ scale: 1.3, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub style={{width:'26px', height:'26px'}} />
        </motion.a>
        <motion.a 
          href={project?.livePreview} 
          target='_blank'
          whileHover={{ scale: 1.3, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiExternalLink style={{width:'26px', height:'26px'}} />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default ProjectContainer