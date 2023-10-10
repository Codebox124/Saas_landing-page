import React from 'react'
import HeroImg from '../public/Group 10.png'
import Image from 'next/image'
export default function Pricing() {
    return (
        <div className='bg-white pt-20'>
            <div className='max-w-5xl mx-auto md:px-0 px-6'>
                <h3 className='text-center text-4xl mb-8 '>Pricing</h3>
                <div className='grid md:grid-cols-3 gap-5'>
                    <div className='border border-primary text-center py-5 rounded-lg'>
                        <div className='mb-10'>
                            <h3 className='text-lg font-bold'>Essential</h3>
                            <p className='text-sm'>Great for basic UI/UX design needs</p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='text-primary font-medium text-center'>$2,600</h2>
                            <p className='text-primary'>PER MONTH</p>
                        </div>
                        <div className='py-[1px] mx-9 mb-8 bg-primary'>

                        </div>
                        <div className='mb-8'>
                            <h3 className='text-sm font-bold'>What’s included:</h3>
                            <ul className='text-sm text-start px-5'>
                                <li>UI execution</li>
                                <li>Connect on Slack</li>
                                <li>One 30 minute meeting a week</li>
                            </ul>
                        </div>
                        <div className='mb-8'>
                            <h3 className='text-sm font-bold'>Design Team</h3>
                            <p className='text-sm text-start px-5'>
                                1 designer working with 4-5 other customers at the same time
                            </p>
                        </div>
                        <div>
                            <button className='bg-white py-3 text-background-black border-black px-20 border-2'>
                                Try free
                            </button>
                        </div>

                    </div>

                    <div className='bg-primary text-center py-5 text-white rounded-lg' >
                        <div className='mb-10'>
                            <h3 className='text-lg font-bold'>Pro</h3>
                            <p className='text-sm'>Great for end-to-end product design</p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='font-medium text-center text-black'>$3,595</h2>
                            <p className=''>PER MONTH</p>
                        </div>
                        <div className='py-[1px] mx-9 mb-8 bg-white'>

                        </div>
                        <div className='mb-8'>
                            <h3 className='text-sm font-bold'>What’s included:</h3>
                            <ul className='text-sm text-start px-5'>
                                <li>UI execution</li>
                                <li>Connect on Slack</li>
                                <li>One 30 minute meeting a week</li>
                            </ul>
                        </div>
                        <div className='mb-8'>
                            <h3 className='text-sm font-bold'>Design Team</h3>
                            <p className='text-sm text-start px-5'>
                                1 designer working with 4-5 other customers at the same time
                            </p>
                        </div>
                        <div>
                            <button className=' py-3  border-white px-20 border-2'>
                                Try free
                            </button>
                        </div>

                    </div>

                    <div className='border border-primary text-center py-5 rounded-lg'>
                        <div className='mb-10'>
                            <h3 className='text-lg font-bold'>Turbo</h3>
                            <p className='text-sm'>Great for basic UI/UX design needs</p>
                        </div>

                        <div className='mb-5'>
                            <h2 className='text-primary font-medium text-center'>$2,600</h2>
                            <p className='text-primary'>PER MONTH</p>
                        </div>
                        <div className='py-[1px] mx-9 mb-8 bg-primary'>

                        </div>
                        <div className='mb-8'>
                            <h3 className='text-sm font-bold'>What’s included:</h3>
                            <ul className='text-sm text-start px-5'>
                                <li>UI execution</li>
                                <li>Connect on Slack</li>
                                <li>One 30 minute meeting a week</li>
                            </ul>
                        </div>
                        <div className='mb-8'>
                            <h3 className='text-sm font-bold'>Design Team</h3>
                            <p className='text-sm text-start px-5'>
                                1 designer working with 4-5 other customers at the same time
                            </p>
                        </div>
                        <div>
                            <button className='bg-white py-3 text-background-black border-black px-20 border-2'>
                                Try free
                            </button>
                        </div>

                    </div>

                </div>
                <div className='text-center mt-20'>
                    <h2  className='text-center'>Let’s <span>Build</span> Something <span>Awesome</span> Together!</h2>
                    <p className='text-sm mt-5'>Try us risk free for 7 days, if you don’t love us, get your money back.</p>

                    <div className='mt-10'>
                        <button>Get Started </button>
                    </div>
                </div>
                <div className='grid justify-center mt-10 '>
                    <Image src={HeroImg} alt='' />
                </div>

            </div>

        </div>
    )
}
