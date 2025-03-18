import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.section
      id='services'
      className='w-full px-5 md:px-[12%] py-20 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-lg font-Ovo text-gray-600 dark:text-gray-300'
      >
        What I Offer
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center text-4xl sm:text-5xl font-Ovo mb-10'
      >
        My Services
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 text-lg text-gray-600 dark:text-gray-300 font-Outfit'
      >
        I offer web development, mobile app development, SEO optimization, and graphic design services to bring your ideas to life.
      </motion.p>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className='border border-gray-300 rounded-lg px-6 py-8 cursor-pointer hover:shadow-lg hover:bg-lightHover transition-all duration-300 dark:border-white/20 dark:hover:bg-darkHover/50'
          >
            <Image src={icon} alt={title} className='w-10' />
            <h3 className='text-xl my-4 text-gray-700 dark:text-white font-Outfit'>
              {title}
            </h3>
            <p className='text-sm text-gray-600 leading-6 dark:text-white/80 font-Outfit'>
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;