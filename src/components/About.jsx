import React from 'react';

const About = () => {
  return (
    <div  name='about' className='w-full h-auto bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] text-gray-300'>
      {/* Container */}
      <div className='text-center max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-[#dbb434]'>WHO WE ARE</p>
              <p className='font-bold pt-8'>At Create IT Recruitment, we have developed a simplified approach to recruitment which, we know you’ll love!</p>
              <p className='py-4'>You’re in the market to hire experts, you have a million and one things to do and before you know it, you’re inundated with calls from recruiters who get in touch just to pitch a generalised service and then follow up with attached terms of 30% fee on hire. </p>
              <p className='py-4'>Well, we’re not like that. </p>
              <p className='py-4'>We pride ourselves on offering a simple yet efficient service; after all our ethos is to make the recruitment process easy! With industry experience of over 17 years, we base our values on our proven track record which is backed with testimonials from not only our existing clients but candidates too.</p>
              <p className='py-4'>We can assist in all your recruitment needs and offer a complete service from start to finish. We also strive to the challenge of recruiting for those ‘hard to fill’ roles, whether it be a niche skillset you’re seeking or individuals who are experienced in a new cutting-edge technology.</p>
              <p className='py-4'>We are constantly engaging with the market and staying close to what’s going on which, helps us build relationships with both active and passive candidates. Most importantly for you it puts us in a position to represent individuals for the roles that you are hiring. Our candidate base includes individuals that other recruiters have not kept in touch with; they are not always on job boards or applying to adverts. </p>
              <p className='py-4'>At Create IT Recruitment we understand your needs, we source relevant candidates and help manage the recruitment process so you can concentrate on your day job! </p>
          </div>
      </div>
    </div>
  );
};

export default About;