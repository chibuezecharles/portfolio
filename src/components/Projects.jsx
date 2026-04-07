import { useState } from 'react';
import { projects } from '../../portfolio';
import ProjectContainer from './ProjectContainer';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll 
    ? projects 
    : projects?.slice(0, 3);

  const toggleProjects = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="mt-16 px-4">
      <h2 className="text-3xl text-center font-bold mb-8 font-['poppins']">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {displayedProjects?.map((p, i) => (
          <ProjectContainer key={i} project={p} />
        ))}
      </div>

      {projects?.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={toggleProjects}
            className="px-6 py-3 flex items-center gap-2 border rounded font-bold hover:bg-opacity-10 transition-all cursor-pointer font-['nunito']"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)'
            }}
          >
            {showAll ? 'See Less' : 'See More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;