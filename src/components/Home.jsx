import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-r from-[#071c05] to-[#6b8869]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        
        <h1 className='text-4xl sm:text-9xl font-bold text-[#ccd6f6]'>
          CREATE
        </h1>
        <h2 className='text-4xl sm:text-8xl font-bold text-[#8892b0]'>
        IT Recruitment.
        </h2>
        <p className='text-[#dbb434]'>Technology Recruitment Experts - Recruitment made easy!</p>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        We are experienced recruiters of tech staff and offer a professional service with a personable touch. Create IT Recruitment breaks away from the cumbersome reigns of traditional recruitment. The technology industry is constantly evolving and moving forwards, we feel that the recruitment industry should be no different.
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