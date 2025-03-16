import React from 'react'
import honey from '@/public/Images/honey.png'
import bg from '@/public/Images/bg.png'
import { HeroContent } from '../heroContent/HeroContent'
import Image from 'next/image'

export const Hero = () => {
    return (
        <div>
            <div className={`grid grid-cols-2 h-screen bg-[url(${bg})] bg-amber-800 rounded-4xl`}>
                <div>

                    <Image
                        src={honey}
                        alt="Picture of the author"
                        placeholder='blur'
                    />
                </div>
                <div className='grid items-center'>
                    <HeroContent />
                </div>
            </div>
        </div>
    )
}
