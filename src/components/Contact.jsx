import { contact } from '../../portfolio'

const Contact = () => {
  return (
    <section id="contact" className="mt-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <a
        href={`mailto:${contact.email}`}
        className="border px-6 py-2 rounded"
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