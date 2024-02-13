import React from 'react';
import profilePic from '../assets/profilePic.png';
import education from '../assets/education.png';
import goals from '../assets/goals.png';

const About = () => {
  return (
    <div name='about' className='w-full md:h-screen bg-gradient-to-r from-[#071c05] to-[#6b8869] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* move text right on expand over small */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rizwan, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have always  had an interest in technology development which consequently 
                  has led me to pursue a career as a Full Stack Software Developer. I am interested in exploring 
                  how websites work and the intricate details of creating interactive 
                  and immersive web pages.</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
           <div>
            <div
            style={{ backgroundImage: `url(${profilePic})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center'>I am a graduate of the University of Birmingham Coding Bootcamp. 
                I have the skills to build a website from the ground up, utilising a multitude of technical tools 
                and languages to write testable, syntax-efficient code.</p>
            </div>
            <div>
              <div
            style={{ backgroundImage: `url(${education})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
              <p className='text-center'>University of Birmingham <br /> Coding Bootcamp Graduate <br /> Grade A+
                <br />
                <br />
                Coventry University <br /> B.A. (Hons) Business Management<br /> Grade 2:1</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${goals})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center'>I am ambitious, creative, hardworking and keen to demonstrate my skills in a new and exciting role.
             My goal is to work within an organisation where I can further build and expand upon my technical skill set.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;