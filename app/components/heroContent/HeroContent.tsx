import React from 'react'

export const HeroContent = () => {
    return (
        <div className='grid text-amber-500 font-semibold'>
            <div><h1 className='border w-40 text-center text-sm rounded-full px-4 py-1 hover:px-6 transition-all duration-300'>100% organic</h1></div>
            <h1 className='text-9xl text-amber-950 font-bold'>YOUR BEST HONEY IS HERE</h1>
            <div>
                <button className='border rounded-full px-4 py-2 bg-white text-amber-700 font-semibold hover:px-6 transition-all duration-300'>Shop Now</button>
            </div>
        </div>
    )
}
