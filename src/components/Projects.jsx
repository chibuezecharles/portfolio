import { projects } from '../../portfolio'
import ProjectContainer from './ProjectContainer'

const Projects = () => {
  return (
    <section id="projects" className="mt-16 px-4">
      <h2 className="text-2xl text-center font-bold mb-6">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <ProjectContainer key={i} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects