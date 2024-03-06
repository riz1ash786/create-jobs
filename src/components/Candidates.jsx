import React from 'react';
import support from '../assets/support.png';
import listen from '../assets/listen.png';
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
            <p className='text-gray-300 py-6 text-center'>We help talented technologists find rewarding, purpose-driven employment opportunities.</p>
            </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
          <div>
            <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>LISTEN</p> <p className=' pt-2 pb-8 text-center'>We aim to understand you: your motivations, aspirations, needs, desires, preferences, and aversions. Meaningful conversations drive us forward.</p>
            </div>

            <div>
              <div
            style={{ backgroundImage: `url(${interview})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>ADVISE</p><p className='pt-2 pb-8 text-center'>Our responsibility is to provide you with all the necessary information to facilitate informed career choices. We're advisors, not salespeople.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${support})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>SUPPORT</p> <p className='pt-2 pb-8 text-center'>We offer our candidates valuable tips, our dedicated support ensures you're guided and informed at every step, empowering you to approach the recruitment process with confidence.</p>
            </div>
          </div>
          <div>
              <p className='py-8 text-center'>Here are some of our candidate testimonials</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-2 pt-8 gap-4'>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
                Solo-Traveller <br /> Full-Stack
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
                Cryptocurrency Guide <br /> Full-Stack
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
                Note Taker <br /> Back-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
                Team Profile Generator<br /> Back-end
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
                Weather Dashboard <br /> Front-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${listen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Candidates;