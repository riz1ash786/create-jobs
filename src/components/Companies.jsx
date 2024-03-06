import React from 'react';
import learn from '../assets/learn.png';
import balloons from '../assets/balloons.png';
import engage from '../assets/engage.png';
import wordpress from '../assets/wordpress.png';
import monzo from '../assets/monzo.png';
import slack from '../assets/slack.png';
import emirates from '../assets/emirates.png';
import emaar from '../assets/emaar.png';
import mclaren from '../assets/mclaren.png';
import cisco from '../assets/cisco.png';
import ring from '../assets/ring.png';
import mandm from '../assets/mandm.png';
import cognizant from '../assets/cognizant.png';
import aliexpress from '../assets/aliexpress.png';
import salesforce from '../assets/salesforce.png';
import danone from '../assets/danone.png';
import zalando from '../assets/zalando.png';
import microsoft from '../assets/microsoft.png';
import aramco from '../assets/aramco.png';


const Companies = () => {
  return (
    <div name='companies' className='w-full md:h-auto bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
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
            <p className='text-gray-300 py-6 text-center'>We work with companies to attract and retain top-tier technical talent, driving innovation and success.</p>
            </div>
            <div className='pt-8 max-w-[1000px] w-full grid sm:grid-cols-3 gap-8 px-4'>
            <div>
              <div
            style={{ backgroundImage: `url(${learn})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>LEARN</p><p className='pt-2 text-center'>Throughout your Company's journey, from inception to where you are now and where you aim to be, we strive to comprehend every aspect. Exceptional recruiters enhance brands, and we're dedicated to advocating for yours.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${engage})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>ENGAGE</p><p className='pt-2 text-center'>We'll ensure that your requirements are communicated effectively, reaching out to the appropriate talent. You'll only engage with candidates who meet your technical and cultural requirements.</p>
            </div>
            <div>
            <div
            style={{ backgroundImage: `url(${balloons})` }}
            className='shadow-lg shadow-[#040c16] mx-auto profile-div mt-6 mb-6 hover:scale-110 duration-500'>
            </div>
            <p className='pt-8 text-center text-[#dbb434]'>DELIVER</p><p className='pt-2 text-center'>There's no greater accomplishment for us than connecting individuals who significantly impact your business. Our commitment to delivering exceptional candidates ensures that our clients thrive with the right talent by their side.</p>
            </div>
          </div>
          <div>
              <p className='py-8 text-center'>Here are some of our candidate testimonials</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-2 pt-8 gap-4'>
          <div
            style={{ backgroundImage: `url(${wordpress})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
              Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${emaar})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
              Company <br /> Testimonial
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${slack})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
              Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${emirates})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
              Company<br /> Testimonial
              </span>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${mclaren})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${aramco})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-white tracking-wider'>
              Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ring})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
              Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${mandm})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${salesforce})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${microsoft})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${monzo})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${danone})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${zalando})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cisco})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
              Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${aliexpress})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
              Company <br /> Testimonial
              </span>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cognizant})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center testimonial-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className= 'text-white tracking-wider'>
                Company <br /> Testimonial
              </span>
            </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default Companies;