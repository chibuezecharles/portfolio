import { skills } from '../../portfolio'

const Skills = () => {
  return (
    <section id="skills" className="mt-16 text-center">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, i) => (
          <span key={i} className="bg-gray-200 px-4 py-2 rounded shadow">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills