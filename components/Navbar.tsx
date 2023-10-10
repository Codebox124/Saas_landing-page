import Image from 'next/image'
import React from 'react'
import Logo from '../public/fad_modrandom.png'

export default function Navbar() {
    return (
        <div className='py-4 px-4 mt-2 flex justify-between items-center max-w-5xl mx-auto'>
            <div>
                <Image src={Logo} alt='' />
            </div>
            <div>
                <ul className='md:flex hidden gap-9'>
                    <li>HOW IT WORKS </li>

                    <li>ABOUT</li>
                    <li>WORK</li>
                    <li>PRICING</li>
                    <li>BLOG</li>

                </ul>
            </div>
            <div>
                <button>GET STARTED</button>

            </div>

        </div>
    )
}
