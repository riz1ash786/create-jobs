import React from 'react'

import {
    FaLinkedin,
} from 'react-icons/fa'
import { BsBook,} from "react-icons/bs";
import { MdOutlineDiversity3 } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from 'react-icons/hi';
import pdf from "./create_jobs_info_pack.pdf"



const Footer = () => {
  return (
    <div className='w-full mx-auto grid md:grid-cols-3 py-12 px-4 gap-12 text-gray-300 bg-[#050d1c]'>
    <div>
    <h1 className='w-full text-3xl font-bold text-[#dbb434] flex '>CREATE JOBS</h1>
    <p className='py-4'>Thank you for visiting Create Jobs. Stay connected by following us on Linkedin for updates and industry insights. 
    We would love to hear from you, for collaboration enquiries please get in touch at hello@createjobs.co.uk.
    Copyright&#169; 2021 Create Jobs Limited. All rights reserved.</p>
  
  <div className='flex justify-between md:w-[75%] my-4'>
        <FaXTwitter size={30} className='hover:text-[#dbb434]' />
        <MdOutlineDiversity3 size={30} className='hover:text-[#dbb434]'/>
        <HiOutlineMail size={30} className='hover:text-[#dbb434]'/>
        <BsBook size={30} className='hover:text-[#dbb434]' />
        <FaLinkedin size={30} className='hover:text-[#dbb434]'/>
  </div>
  </div>
  <div className='lg:col-span-2 flex justify-between pt-4 gap-16'>
<div>
<h1 className='font-medium text-gray-500 flex'>Information</h1>
    <p className='text-gray-300 py-2'>Create Jobs aims to not only fill vacancies but also facilitate long-term career growth and development. To learn more about us, view our company information pack by clicking 
    <a className='hover:text-[#dbb434] hover:font-bold' href={pdf} download="Create Jobs Info Pack.pdf"> here.</a></p>

</div>
<div>
<h1 className='font-medium text-gray-500 flex'>Diversity</h1>
    <p className='text-gray-300 py-2'>Commitment to Diversity and Inclusion: Create Jobs values diversity and inclusion in the workplace. 
    They strive to connect employers with a diverse pool of talented candidates, fostering environments where all individuals can contribute and succeed.</p>
</div>
<div>
<h1 className='font-medium text-gray-500 flex'>Services</h1>
    <p className='text-gray-300 py-2'>Create Jobs offers a wide range of recruitment services, 
    including candidate sourcing, screening, interviewing, and free CV advice. Get in touch to find out more.</p>
</div>
  </div>
  </div>
    );
};

export default Footer