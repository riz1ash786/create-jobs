import React from 'react';
import career from '../assets/career.png';
import interview from '../assets/interview.png';
import screening from '../assets/screening.png';

const Aim = () => {
  return (
    <div name='aim' className='w-full md:h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          {/* move text right on expand over small */}
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              Our Aim
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>At Create IT we aim to fulfil the recruitment needs of our clients seeking the best technical staff.</p>
            </div>
            <div>
              <p>Our aim is to assist our clients and candidates with their company and career goals. We do this with effective and efficient recruitment methods. <br /> We are here to ease the strain caused to our clients when recruiting for staff and minimise the stress of finding a new role for our expert candidates!</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
           <div>
            <div
            style={{ backgroundImage: `url(${career})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>CONTRACT / PERMANENT</p> <br />
                <br /> <p className='text-center'>We specialise in contract (interim / temp / fixed-term), statement-of-work, and permanent recruitment, providing comprehensive services to fulfill all our clients' hiring needs, including RPO packages.</p>
            </div>
            <div>
              <div
            style={{ backgroundImage: `url(${interview})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>INTERVIEW PREPARATION</p> <br />
                <br /><p className='text-center'>We offer our candidates valuable tips to equip them for every stage of the interview process. Our dedicated support ensures you're guided and informed at every step, empowering you to approach interviews with confidence and ease.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${screening})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>CANDIDATE SCREENING</p> <br />
                <br /><p className='text-center'>Create IT focuses on sourcing the best-in-class candidates for rewarding positions. Our recruitment process involves thorough screening to ensure candidates possess both the technical expertise required for the role but also align with the person specification</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Aim;