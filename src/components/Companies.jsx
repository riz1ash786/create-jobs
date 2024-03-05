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
            <p className='text-gray-300 py-6 text-center'>We help companies attract the best technical talent</p>
            </div>
            <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div>
              <div
            style={{ backgroundImage: `url(${lifecycle})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>LEARN</p><p className='pt-2 text-center'>Throughout your company's journey and culture, from inception to where you are now and where you aim to be, we strive to comprehend every aspect. Exceptional recruiters enhance brands, and we're dedicated to advocating for yours.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${calculator})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>ENGAGE</p><p className='pt-2 text-center'>We'll ensure that your proposition is communicated effectively, reaching the appropriate audience at the perfect moment. You'll exclusively encounter candidates who meet your technical and cultural requirements.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${screening})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>DELIVER</p><p className='pt-2 text-center'>There's no greater accomplishment for us than connecting individuals who significantly impact your business. New hires are your VIPs, and we're committed to being their dedicated guides.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Companies;