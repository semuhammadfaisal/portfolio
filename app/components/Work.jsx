import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Work = ({ isDarkMode }) => {
  return (
    <motion.section
      id='work'
      className='w-full px-5 md:px-[12%] py-20 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300'
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className='text-center text-4xl sm:text-5xl font-Ovo mb-10'
      >
        My Latest Work
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-lg text-gray-600 dark:text-gray-300 font-Outfit'
      >
        A showcase of my recent projects — crafted with creativity, precision, and a passion for excellence. Note: Some projects are still in development and not yet deployed.
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='flex justify-center gap-6 overflow-x-auto pb-4' // Flex layout with no wrapping
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='w-[300px] aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group overflow-hidden flex-shrink-0' // Fixed width for cards
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            {/* Project Info */}
            <div className='bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold font-Outfit'>{project.title}</h2>
                <p className='text-sm text-gray-700 font-Outfit'>{project.description}</p>
              </div>
              <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                <Image src={assets.send_icon} alt='send icon' className='w-5' />
              </div>
            </div>

            {/* Deployment Status Badge */}
            {!project.isDeployed && (
              <div className='absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full'>
                Not Deployed
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Show More Button */}
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href='#'
        className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover font-Outfit'
      >
        Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4' />
      </motion.a>
    </motion.section>
  );
};

export default Work;