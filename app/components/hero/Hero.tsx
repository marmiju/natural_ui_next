import React from 'react'
import honey from '@/public/Images/honey.png'
import { HeroContent } from '../heroContent/HeroContent'
import Image from 'next/image'

export const Hero = () => {
    return (
        <div>
            <div className='grid grid-cols-2 h-screen'>
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
