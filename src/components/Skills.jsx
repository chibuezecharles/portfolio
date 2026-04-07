import { skills } from '../../portfolio'

const Skills = () => {
  return (
   <section id="skills" className="mt-16 text-center px-4">
    <h2 className="text-3xl font-bold font-['poppins'] mb-8">Skills</h2>

    <div className="flex flex-wrap gap-4 justify-center items-center max-w-5xl mx-auto ">
      {skills?.map((skill, i) => (
        <div key={i} className="px-4 py-2 rounded card w-35 text-center" >
          {skill}
        </div>
      ))}
    </div>
  </section>
  )
}

export default Skills