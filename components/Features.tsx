import Image from 'next/image'
import React from 'react'
import img1 from '../public/svg.png'
import img3 from '../public/svg (1).png'
import img2 from '../public/Frame.png'
import img4 from '../public/Group 2.png'
import img5 from '../public/Group 5.png'
import img6 from '../public/Group 7.png'
export default function Features() {
    return (
        <div className='bg-white py-20 md:px-0 px-6'>
            <div className='max-w-5xl mx-auto'>
                <div>
                    <h2 className='text-center'>A diverse Team Of <span>Passionate</span> UX Nerds Who Are Here To Help Your <span>Startup Succeed</span></h2>
                </div>
                <div className='mt-5'>
                    <p className='text-center'>From ideation to expansion, TDP understands the unique demands of your startup—providing you with optimized design strategies and fast turnarounds for an affordable monthly subscription.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-4 mt-20 '>
                    <div>
                        <div className='grid justify-center'>
                            <Image src={img1} alt='' />
                        </div>
                        <div className='text-center mt-10'>
                            <h3 className='text-background-black font-bold'>Costs 70% less</h3>
                            <p>We developed highly-optimized design processes to let us work fast and deliver incredible results—and we pass those savings on to you</p>

                        </div>
                    </div>
                    <div>
                        <div className='grid justify-center'>
                            <Image src={img2} alt='' />
                        </div>
                        <div className='text-center mt-10'>
                            <h3 className='text-background-black font-bold'>Adaptable and scalable</h3>
                            <p>High-velocity is crucial to a startup’s success, and that’s why TDP delivers new designs every week so your momentum never falters</p>

                        </div>
                    </div>
                    <div>
                        <div className='grid justify-center'>
                            <Image src={img3} alt='' />
                        </div>
                        <div className='text-center mt-10'>
                            <h3 className='text-background-black font-bold'>Fast turnaround times</h3>
                            <p>TDP was built for flexibility—we quickly adapt and grow as you grow</p>

                        </div>
                    </div>

                </div>

                <div className='mt-24'>
                    <h2 className='text-center'>How <span>signing</span> up with The Design Project <span>works</span>!?</h2>
                </div>
                <div className='mt-5'>
                    <p className='text-center'>Take a minute to imagine how you’d feel watching your user count grow, and retention rates stay consistently high. When you prioritize effective UX, better retention and growth are natural consequences. Backed by countless hours of research and testing, TDP blends UX, UI, and Product design into a deliciously smooth process that fuels productivity and success.</p>
                </div>
                <div className='grid md:grid-cols-3 gap-4 mt-20 '>
                    <div>
                        <div className='grid justify-center'>
                            <Image src={img4} alt='' />
                        </div>
                        <div className='text-center mt-10'>
                            
                            <p>Sign up for one of our affordable subscription play which offer a variety of options to fit your unique needs.</p>

                        </div>
                    </div>
                    <div>
                        <div className='grid justify-center'>
                            <Image src={img5} alt='' />
                        </div>
                        <div className='text-center mt-10'>
                            
                            <p>We match you with the best TDP design expert for your needs. Then we schedule a call to learn about your startup.</p>

                        </div>
                    </div>
                    <div>
                        <div className='grid justify-center'>
                            <Image src={img6} alt='' />
                        </div>
                        <div className='text-center mt-10'>
                        
                            <p>TDP manages the project, learns the intimate details of what your users want, and delivers impactful design iterations.</p>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
