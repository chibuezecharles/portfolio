import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { about } from '../../portfolio'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  
  const FILE_ID = "1HW7Xgbz9CyOu8CCf01dFIo0Xe32HmK1s";
  const previewUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="px-4 mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
      <motion.div
        className="items-center text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 
          className="text-3xl md:text-6xl font-bold font-['poppins']" 
          style={{ color: 'var(--headingtext-color)' }}
          variants={itemVariants}
        >
          Hi, I am <span style={{ color: 'var(--color-primary)' }}>{about?.name}</span>
        </motion.h1>

        <motion.h2 
          className="mt-6 text-3xl font-bold font-['poppins']" 
          style={{ color: 'var(--color-headingtext-color)' }}
          variants={itemVariants}
        >
          {about?.role}
        </motion.h2>

        <motion.p 
          className="mt-6 w-full md:w-1/2 mx-auto font-['nunito']"
          variants={itemVariants}
        >
          {about?.description}
        </motion.p>

        <motion.div 
          className="flex gap-4 mt-6 items-center justify-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => setShowPdfPreview(true)}
            className="flex items-center gap-2 border px-6 py-3 rounded font-bold hover:bg-opacity-10 transition-all cursor-pointer font-['nunito']"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilePdf className="text-xl" />
            Resume
          </motion.button>

          <motion.a 
            href={about?.social?.github} 
            target='_blank'
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub style={{width:'28px', height:'28px'}} />
          </motion.a>

          <motion.a 
            href={about?.social?.linkedin} 
            target='_blank'
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin style={{width:'28px', height:'28px'}} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* PDF Preview Modal with Animation */}
      <AnimatePresence>
        {showPdfPreview && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-[#1e2937] rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <h3 className="font-semibold text-lg">Resume Preview</h3>
                <div className="flex gap-3">
                  <a
                    href={downloadUrl}
                    download
                    className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition"
                  >
                    ↓ Download PDF
                  </a>
                  <motion.button
                    onClick={() => setShowPdfPreview(false)}
                    className="px-5 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
              <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-900">
                <iframe
                  src={previewUrl}
                  className="w-full h-full rounded-lg border-0"
                  title="Resume Preview"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About