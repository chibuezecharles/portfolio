import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa'
import { about } from '../../portfolio'
import { useState } from 'react';

const About = () => {
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  // Replace with your actual file ID from Google Drive
  const FILE_ID = "1HW7Xgbz9CyOu8CCf01dFIo0Xe32HmK1s";   

  const previewUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  return (
    <section className=" px-4 mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
      <div className='items-center'>
        <h1 className="text-3xl md:text-6xl font-bold font-['poppins'] text-center" style={{ color: 'var(--headingtext-color)' }}>
          Hi, I am <span style={{ color: 'var(--color-primary)' }}>{about?.name}</span>
        </h1>

        <h2 className="mt-6 text-3xl text-center font-bold font-['poppins']" style={{ color: 'var(--color-headingtext-color)' }}>
          {about?.role}
        </h2>

        <p className="mt-6 w-full md:w-1/2 text-center font-['nunito'] mx-auto">{about?.description}</p>

        <div className="flex gap-4 mt-6 items-center justify-center">
          <button
            onClick={() => setShowPdfPreview(true)}
            className="flex items-center gap-2 border px-6 py-3 rounded font-bold hover:bg-opacity-10 transition-all cursor-pointer font-['nunito']"
            style={{
              borderColor: 'var(--color-primary)',
              color: 'var(--color-primary)'
            }}
          >
            <FaFilePdf className="text-xl" />
            Resume
          </button>

          <a href={about?.social?.github} target='_blank'><FaGithub style={{width:'22px', height:'22px'}} /></a>
          <a href={about?.social?.linkedin} target='_blank'><FaLinkedin style={{width:'22px', height:'22px'}} /></a>
        </div>
      </div>
      {/* PDF Preview Modal */}
      {showPdfPreview && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#1e2937] rounded-2xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden">
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
                <button
                  onClick={() => setShowPdfPreview(false)}
                  className="px-5 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg transition"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="flex-1 p-4 bg-gray-100 dark:bg-gray-900">
              <iframe
                src={previewUrl}
                className="w-full h-full rounded-lg border-0"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About