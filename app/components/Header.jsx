import { assets } from '@/assets/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6'>
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt='Profile Picture'
          className='rounded-full w-32 h-32 object-cover border-4 border-white shadow-lg'
        />
      </motion.div>

      {/* Greeting */}
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-center gap-2 text-xl md:text-2xl font-Ovo'
      >
        Hi, I&apos;m Muhammad Faisal{' '}
        <Image src={assets.hand_icon} alt='Wave' className='w-6' />
      </motion.h3>

      {/* Title */}
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-4xl sm:text-5xl lg:text-6xl font-Ovo leading-tight'
      >
        Full-Stack Web Developer
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className='max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-Ovo'
      >
        I’m an MIT-certified MERN developer with a passion for building fast, scalable, and secure web applications. Let’s create something amazing!
      </motion.p>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        {/* Contact Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href='#contact'
          className='px-8 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-rose-500 hover:border-rose-500 transition-colors font-Outfit'
          aria-label='Contact Me'
        >
          Contact Me{' '}
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href='/sample-resume.pdf'
          download
          className='px-8 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white hover:bg-gray-100 transition-colors font-Outfit'
          aria-label='Download Resume'
        >
          My Resume{' '}
          <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;