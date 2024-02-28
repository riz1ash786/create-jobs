import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Privacy = () => {
  return (
    <div  name='privacy' className='w-full h-auto bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      {/* Container */}
      <div className='text-center max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>Privacy</p>
              <p className='font-bold pt-8 text-left'>Create IT fully supports your right to privacy. The treatment of your personal data is of utmost important to us</p>
              <p className='py-4 text-left'>We collect your personal data for two reasons. <br /> 1.  To explicitly contact you about a legitimate career opportunity with one of our clients. <br /> 2. To process your job application to the respective client</p>
              <p className='py-4 text-left'>We shall only request your full name; email; phone; and CV. This is the only personal data we need to go about our day-to-day recruiting duties, relevant to the job in question. There may be times where we will request your address; NI number; and/or Visa status; for the purpose of providing our client with the personal data required to send you their formal employment offer, and/or complete their background checks. We shall collect such data from you in-person, by phone, or email. On occasions, we may request to disclose your personal data to third-party partners, if they have a vested interest, such as those who perform intermediary services to contractors, and HMRC. Unless required or permitted to do so by law, we shall not otherwise collect, share, or sell any personal data without your prior consent.</p>
              <p className='py-4 text-left'>We keep your personal data no longer than necessary, in order to maintain communication channels regarding; <br /> 1.  Relevant new career opportunities with our clients. <br /> 2. The status of ongoing job applications. </p>
              <p className='py-4 text-left'>We store your personal data electronically and have procedures in place to protect from misuse, loss, unauthorised access, modification or disclosure. We take reasonable steps to ensure your personal data is accurate, complete, and up to date.  Please do inform us of any changes to your details as soon as reasonably possible. </p>
              <p className='py-4 text-left'>If you wish to access, change, or erase your personal data, please drop us a message. We’re happy to oblige. </p>
              <button className='text-white group border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-4 py-3 my-8 mx-auto flex items-center'>
          <Link to='contact' smooth={true} duration={500}>Contact </Link>
            {/* rotate arrow on hover */}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </div>
      </div>
    </div>
  );
};

export default Privacy;