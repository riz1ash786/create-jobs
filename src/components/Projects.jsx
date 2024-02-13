import React from 'react';
import soloTrav from '../assets/soloTrav.gif';
import cryptoGuide from '../assets/crypto-finder.gif';
import noteTaker from '../assets/note-taker.gif';
import teamGen from '../assets/teamGen.png';
import workScheduler from '../assets/work-day-scheduler.png';
import weatherDashboard from '../assets/weatherdashboard.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-gradient-to-r from-[#071c05] to-[#6b8869]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#dbb434]'>
            Projects
          </p>
          <p className='py-6'>Here are some examples of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${soloTrav})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Solo-Traveller <br /> Full-Stack
              </span>
              <div className='pt-8 text-center'>
                <a href='https://tranquil-garden-06194.herokuapp.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/riz1ash786/solo-traveller/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cryptoGuide})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Cryptocurrency Guide <br /> Full-Stack
              </span>
              <div className='pt-8 text-center'>
                <a href='https://josephcurtis1999.github.io/CryptocurrencyFinder/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/riz1ash786/CryptocurrencyFinder/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${noteTaker})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Note Taker <br /> Back-end
              </span>
              <div className='pt-8 text-center'>
                <a href='https://powerful-atoll-97832.herokuapp.com/notes/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/riz1ash786/note-taker/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${teamGen})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Team Profile Generator<br /> Back-end
              </span>
              <div className='pt-8 text-center'>
                <a href='https://drive.google.com/file/d/1CACjaI0ldtUd12tCyW55wnLUxb6ftt4i/view?usp=sharing/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/riz1ash786/team-profile-generator'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${workScheduler})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Work Day Scheduler <br /> Front-end
              </span>
              <div className='pt-8 text-center'>
                <a href='https://riz1ash786.github.io/work-day-scheduler/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/riz1ash786/week5-work-day-scheduler'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${weatherDashboard})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto sm:text-center content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather Dashboard <br /> Front-end
              </span>
              <div className='pt-8 text-center'>
                <a href='https://riz1ash786.github.io/weather-dashboard/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/riz1ash786/weather-dashboard/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg hover:bg-[#dbb434]'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;