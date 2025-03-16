
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <div className='flex text-black gap-x-4 max-w-44 mx-auto border justify-center p-1 px-2 my-2 rounded-full'>
            <Link href={'/'}>Home</Link>
            <Link href={'/blogs'}>Blogs</Link>

        </div>
    )
}
