import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-r from-[#050d1c] to-[#0d8bb9] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/xboMzBeg" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dbb434] text-gray-300'>Contact Us</p>
                <p className='text-gray-300 py-4'>Submit your enquiries in the form below or contact us directly; <br /> email: <a className='hover:text-[#dbb434]' href="hello@createjobs.co.uk">hello@createjobs.co.uk</a> <br />mobile: 07976 257860 </p>
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