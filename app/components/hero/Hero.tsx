import React from 'react'
import honey from '@/public/Images/honey.png'
import { HeroContent } from '../heroContent/HeroContent'

export const Hero = () => {
    return (
        <div>
            <div className='grid grid-cols-2 h-screen bg-amber-700 bg-[url(/images/bg.png)] bg-cover bg-blend-overlay'>
                <div><img src='Images/honey.png' alt="Honey.png" /></div>
                <div className='grid items-center'>
                    <HeroContent />
                </div>
            </div>
        </div>
    )
}
