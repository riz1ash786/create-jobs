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
              <p>We move away from ineffective and dated methods of recruiting. Our aim is to assist our clients and candidates with their company and career goals. We do this with effective and efficient recruitment methods. <br /> We are here to ease the strain caused to our clients when recruiting for staff and minimise the stress of finding a new role for our expert candidates!</p>
            </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
           <div>
            <div
            style={{ backgroundImage: `url(${career})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>CONTRACT / PERMANENT</p> <br />
                <br /> <p className='text-center'>We specialise in contract (interim / temp / fixed term), statement-of-work and permanent recruitment. We offer services to cover all aspects of our clients hiring needs including RPO packages. We understand how important it can be finding quality candidates at short notice and we think you will be impressed with our existing and growing pool of candidates.</p>
            </div>
            <div>
              <div
            style={{ backgroundImage: `url(${interview})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>INTERVIEW PREPARATION</p> <br />
                <br /><p className='text-center'>We provide our candidates with helpful tips to prepare them for each interview stage. We will support and guide you throughout, ensuring you are provided with all the information that you need to feel confident and comfortable with the interview process.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${screening})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>CANDIDATE SCREENING</p> <br />
                <br /><p className='text-center'>Here at Create IT Recruitment we focus on sourcing the best-in-class candidates for rewarding positions. Our recruitment process includes screening of candidates to ensure that not only are they the right technical fit for your role but meet the person specification criteria too.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Aim;