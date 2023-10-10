import React from 'react'
import check from '../public/Component_41_d6f13ecb33.png.png'
import HeroImg from '../public/Group 11.png'
import Image from 'next/image'
export default function Hero() {
  return (
    <div className='mt-7 max-w-5xl mx-auto'>
      <div>
        <h1>A UI/UX Design Subscription So <span> Good </span>
          It Should Come With A <span>Warning</span> Label</h1>
      </div>
      <div className='md:grid md:grid-cols-3 flex mt-7  md:gap-4 gap-2 md:px-10 px-4'>
        <div className='flex items-center gap-3'>
          <Image src={check} alt='' />
          <p className='font-bold text-[10px] md:text-lg '>No hiring headaches</p>


        </div>
        <div className='flex items-center gap-3'>
          <Image src={check} alt='' />
          <p className='font-bold  text-[10px] md:text-lg  '>Weekly turnaround times</p>


        </div>
        <div className='flex items-center gap-3'>
          <Image src={check} alt='' />
          <p className='font-bold text-[10px] md:text-lg '>One flat monthly rate</p>


        </div>

      </div>
      <div className='grid justify-center mt-10'>
        <button>Start Your Risk Free Trial</button>
      </div>
     <div className='grid justify-center mt-10 '>
     <Image  src={HeroImg} alt='' />
     </div>
    </div>
  )
}
