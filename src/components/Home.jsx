import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-8xl font-bold text-[#ccd6f6]'>
          CREATE
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
        IT Recruitment
        </h2>
        <i className='pt-4 text-[#dbb434]'>Technology Recruitment Experts - Create IT, Create Jobs!</i>
        <p className='text-[#8892b0] max-w-[700px]'>
       
        Welcome to Create IT Recruitment, where innovation meets talent in the dynamic world of technology. Our mission is to revolutionise the tech recruitment experience, offering a personalised approach that goes beyond traditional methods. At Create IT, we're not just shaping careers; we're building the future of tech together.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000]'>
          <Link to='contact' smooth={true} duration={500}>Get in Touch </Link>
            {/* rotate arrow on hover */}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;