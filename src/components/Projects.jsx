import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../portfolio';
import ProjectContainer from './ProjectContainer';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects?.slice(0, 3);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="projects" className="mt-16 px-4">
      <motion.h2 
        className="text-3xl text-center font-bold mb-8 font-['poppins']"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {displayedProjects?.map((p, i) => (
          <ProjectContainer key={i} project={p} index={i} />
        ))}
      </motion.div>

      {projects?.length > 3 && (
        <div className="flex justify-center mt-10">
          <motion.button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-3 flex items-center gap-2 border rounded font-bold hover:bg-opacity-10 transition-all cursor-pointer font-['nunito']"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showAll ? 'See Less' : 'See More'}
          </motion.button>
        </div>
      )}
    </section>
  );
};

export default Projects;