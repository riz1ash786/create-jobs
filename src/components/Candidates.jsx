import React from 'react';
import referral from '../assets/referral.png';
import career from '../assets/career.png';
import interview from '../assets/interview.png';

const Candidates = () => {
  return (
    <div name='candidates' className='w-full md:h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='text-center max-w-[1000px] w-full grid gap-8'>
          {/* move text right on expand over small */}
          <div className='pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>
              Candidates
            </p>
          </div>
          </div>
          <div> 
            <p className='text-gray-300 py-4 text-center'>We help talented technologists find rewarding, purpose-driven employment opportunities.</p>
            </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
          <div>
            <div
            style={{ backgroundImage: `url(${career})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>CONTRACT / PERMANENT</p> <p className=' pt-2 text-center'>We specialise in contract (interim / temp / fixed-term), statement-of-work, and permanent recruitment, providing comprehensive services to fulfill all our clients' hiring needs, including RPO packages.</p>
            </div>

            <div>
              <div
            style={{ backgroundImage: `url(${interview})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>INTERVIEW PREPARATION</p><p className='pt-2 text-center'>We offer our candidates valuable tips to equip them for every stage of the interview process. Our dedicated support ensures you're guided and informed at every step, empowering you to approach interviews with confidence and ease.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${referral})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>REFERRAL SCHEME</p> <p className='pt-2 text-center'>We offer a referral bonus to those who successfully recommend a friend or colleague for one of our open positions. For every successful placement made from a recommended candidate you've referred, we're pleased to pay up to £500 as a token of our appreciation.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Candidates;