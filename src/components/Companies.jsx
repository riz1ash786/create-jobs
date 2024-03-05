import React from 'react';
import lifecycle from '../assets/lifecycle.png';

import screening from '../assets/screening.png';
import calculator from '../assets/calculator.png';

const Companies = () => {
  return (
    <div name='companies' className='w-full md:h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center max-w-[1000px] w-full grid gap-8'>
          {/* move text right on expand over small */}
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              Companies
            </p>
          </div>
          </div>
          <div> 
            <p className='text-gray-300 py-4 text-center'>We help companies attract the best technical talent</p>
            </div>
            <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div>
              <div
            style={{ backgroundImage: `url(${lifecycle})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>RECRUITMENT LIFECYCLE</p><p className='pt-2 text-center'>We offer a full recruitment lifecycle service to both our clients and candidates. It is important to us that we support all parties throughout the recruitment process. We also follow up with an after-placement care service to ensure we offer the best service possible.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${calculator})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>OUR PAYMENT TERMS</p><p className='pt-2 text-center'>We ask the clients that we work with for 30-day payment terms for the services undertaken and placements that we make.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${screening})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>CANDIDATE SCREENING</p><p className='pt-2 text-center'>Create Jobs focuses on sourcing the best-in-class candidates for rewarding positions. Our recruitment process involves thorough screening to ensure candidates possess both the right technical and cultural expertise.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Companies;