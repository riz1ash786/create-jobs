import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/xboMzBeg" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dbb434] text-gray-300'>Contact Us</p>
            </div>
            <div className='pb-8 max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  text-gray-300'>
            <div className='sm:text-center'>
            <div className='sm:text-center'>
              <p>Rizwan</p>
              <p className='hover:text-[#dbb434]'><a href='mailto:rizwan@createjobs.co.uk'>Email: rizwan@createjobs.co.uk</a></p>
              <p>Mobile: +44 7976 257860</p>
              <p className='hover:text-[#dbb434]'><a href='https://www.linkedin.com/in/riz1ash786/'>LinkedIn: Connect with Rizwan</a></p>
            </div>
            </div>
            <div className='sm:text-center'>
              <p>Business Enquiries</p>
              <p className='hover:text-[#dbb434]'><a href='mailto:hello@createjobs.co.uk'>Email: hello@createjobs.co.uk</a></p>
              <p>Whatsapp: +44 7976 257860</p>
              <p className='hover:text-[#dbb434]'><a href='https://www.linkedin.com/company/create-jobs-recruitment/'>LinkedIn: Connect with Create Jobs</a></p>
            </div>
          </div>
            <input className='bg-[#e3f7ff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e3f7ff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e3f7ff] p-2' name="message" rows="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact