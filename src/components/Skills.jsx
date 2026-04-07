import { skills } from '../../portfolio'
import { motion } from 'framer-motion'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, type: "spring", stiffness: 120 }
    }
  }

  return (
    <section id="skills" className="mt-16 text-center px-4">
      <motion.h2 
        className="text-3xl font-bold font-['poppins'] mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div 
        className="flex flex-wrap gap-4 justify-center items-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills?.map((skill, i) => (
          <motion.div 
            key={i} 
            className="px-6 py-3 rounded card text-center font-medium cursor-pointer"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.08, 
              y: -5,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills