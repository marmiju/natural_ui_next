import blogsData from '@/public/Data/Blogs'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
    const blogs = await blogsData() // Ensure blogsData() is an async function returning data

    return (
        <div>
            {blogs.map((data: any, index: number) => (
                <Link key={data.id} href={`/blogs/${data.id}`}>
                    <h1 className='hover:cursor-pointer shadow m-2 rounded-4xl p-2 hover:bg-gray-200' >{index + 1 + '. ' + data.title}</h1>
                </Link>
            ))}
        </div>
    )
}

export default Page
