import { assets } from '@/assets/assets';
import Image from 'next/image';
import { React, useEffect, useRef, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    sideMenuRef.current.style.transform = isMenuOpen ? 'translateX(16rem)' : 'translateX(-16rem)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Background Gradient */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      {/* Navbar */}
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg dark:bg-darkTheme dark:shadow-white/20 shadow-sm' : ''
        }`}
      >
        {/* Logo */}
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt='Logo'
            className='w-28 cursor-pointer mr-14'
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'
          }`}
        >
          {['Home', 'About me', 'Services', 'My work', 'Contact me'].map((item, index) => (
            <li key={index}>
              <a className='font-Ovo hover:text-rose-500 transition-colors' href={`#${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className='flex items-center gap-4'>
          {/* Dark/Light Mode Toggle */}
          <button onClick={() => setIsDarkMode((prev) => !prev)} aria-label='Toggle Dark Mode'>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=''
              className='w-6 hover:opacity-80 transition-opacity'
            />
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors dark:border-white/50'
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              alt=''
              className='w-3'
            />
          </a>

          {/* Mobile Menu Button */}
          <button className='block md:hidden ml-3' onClick={toggleMenu} aria-label='Open Menu'>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=''
              className='w-6'
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-transform duration-500 dark:bg-darkHover dark:text-white'
        >
          {/* Close Button */}
          <div className='absolute right-6 top-6' onClick={toggleMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=''
              className='w-5 cursor-pointer'
            />
          </div>

          {/* Menu Items */}
          {['Home', 'About me', 'Services', 'My work', 'Contact me'].map((item, index) => (
            <li key={index}>
              <a
                className='font-Ovo hover:text-rose-500 transition-colors'
                onClick={toggleMenu}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;