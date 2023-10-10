import React from 'react'
import Image from 'next/image'
import articleImg from '../public/article.png'
import articleImg2 from '../public/article (1).png'
import articleImg3 from '../public/article (2).png'
export default function Article() {
  return (
    <div className='bg-background-black py-20  text-white text-center '>
       <div className='max-w-5xl mx-auto md:px-0 px-6 '>
       <div>
            <h2 className='text-center'>How <span>accessible</span> UX design is changing the <span>businesses</span> for the better</h2>
        </div>
        <div className='grid grid-cols-1 mt-10 gap-4'>
        <Image src={articleImg} alt='' />
        <Image src={articleImg2} alt='' />
        <Image src={articleImg3} alt='' />
        </div>

       </div>


    </div>
  )
}
