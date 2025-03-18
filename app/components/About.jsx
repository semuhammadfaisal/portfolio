import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = ({ isDarkMode }) => {
  return (
    <motion.section
      id='about'
      className='w-full px-5 md:px-[12%] py-20 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300'
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-4xl sm:text-5xl font-Ovo mb-10'
      >
        About Me
      </motion.h2>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col lg:flex-row items-center gap-10 lg:gap-20'
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-64 sm:w-80 rounded-3xl overflow-hidden shadow-lg'
        >
          <Image
            src={assets.user_image}
            alt='Profile Picture'
            className='w-full h-full object-cover'
          />
        </motion.div>

        {/* Description and Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1'
        >
          <p className='mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300 font-Ovo'>
            Hi, I’m Muhammad Faisal — a full-stack MERN developer with expertise in DevOps and web security. As an MIT-certified developer, I’m passionate about building fast, scalable, and secure web applications. I love learning new technologies and taking on innovative projects. Let’s connect and build something amazing!
          </p>

          {/* Info Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className='border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:shadow-lg transition-all duration-300 dark:border-white/20 dark:hover:bg-darkHover/50'
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className='w-7'
                />
                <h3 className='my-4 text-xl font-semibold text-gray-700 dark:text-white font-Outfit'>
                  {title}
                </h3>
                <p className='text-gray-600 text-sm dark:text-white/80 font-Outfit'>
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='my-6 text-xl text-gray-700 dark:text-white/80 font-Ovo'
          >
            Tools I Use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex flex-wrap items-center gap-4'
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300 dark:border-white/20'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;