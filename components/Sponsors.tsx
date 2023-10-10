import React from 'react'
import sponsor1 from '../public/y_combinator_0dd7d14b20.svg.png'
import sponsor2 from '../public/sequioia_70b028d972.svg.png'
import sponsor3 from '../public/a16z_3853ceb4aa.svg.png'
import sponsor4 from '../public/accel_1cb5297bba.svg.png'
import Image from 'next/image'
export default function Sponsors() {
  return (
    <div className='bg-background-black '>
        <div className='max-w-5xl mx-auto py-20'>
            <div>
                <h1 className='text-white'>We helped our customers raise <span>$1B+</span></h1>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 mt-10 '>
             <Image src={sponsor1} alt='' />
                <Image src={sponsor2} alt='' />
                <Image src={sponsor3} alt='' />
                <Image src={sponsor4} alt='' />

            </div>

        </div>
    </div>
  )
}
