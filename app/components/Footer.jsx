import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className='mt-20'>
      {/* Logo and Email */}
      <div className='text-center'>
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt='Logo'
          className='w-36 mx-auto mb-4'
        />

        <div className='w-max flex items-center gap-2 mx-auto font-Outfit text-gray-600 dark:text-gray-300'>
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt='Email Icon'
            className='w-6'
          />
          sefaisal17@gmail.com
        </div>
      </div>

      {/* Footer Content */}
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='font-Outfit text-gray-600 dark:text-gray-300'>
          © 2025 Muhammad Faisal. All rights reserved
        </p>

        {/* Social Links */}
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0 font-Outfit'>
          <li>
            <a
              className='text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/semuhammadfaisal'
              aria-label='GitHub'
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className='text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors'
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/faisal-fullstackdev'
              aria-label='LinkedIn'
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;