import { contact } from '../../portfolio'

const Contact = () => {
  return (
    <section id="contact" className="mt-16 text-center">
      <h2 className="text-3xl font-bold mb-8 font-['poppins']">Contact</h2>

      <a
        href={`mailto:${contact?.email}`}
        className="border px-6 py-3 rounded font-bold font-['nunito']"
        style={{
          borderColor: 'var(--color-primary)',
          color: 'var(--color-primary)'
        }}
      >
        Email Me
      </a>
    </section>
  )
}

export default Contact