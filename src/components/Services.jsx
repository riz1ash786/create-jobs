import React from 'react';
import referral from '../assets/referral.png';
import lifecycle from '../assets/lifecycle.png';
import calculator from '../assets/calculator.png';

const Services = () => {
  return (
    <div name='services' className='w-full md:h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center max-w-[1000px] w-full grid gap-8'>
          {/* move text right on expand over small */}
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              Services
            </p>
          </div>
          </div>
          
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>

            <div>
              <div
            style={{ backgroundImage: `url(${lifecycle})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>RECRUITMENT LIFECYCLE</p> <br />
                <br /><p className='text-center'>We offer a full recruitment lifecycle service to both our clients and candidates. It is important to us that we support all parties throughout the recruitment process. We also follow up with an after-placement care service to ensure we offer the best service possible.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${calculator})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>OUR PAYMENT TERMS</p> <br />
                <br /><p className='text-center'>We ask the clients that we work with for 30-day payment terms for the services undertaken and placements that we make.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${referral})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='text-center text-[#dbb434]'>REFERRAL SCHEME</p> <br />
                <br /> <p className='text-center'>We offer a referral bonus to those who successfully recommend a friend or colleague for one of our open positions. For every successful placement made from a recommended candidate you've referred, we're pleased to pay up to £500 as a token of our appreciation.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Services;