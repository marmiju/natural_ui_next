import blogsData from '@/public/Data/Blogs'
import React from 'react'

const Page = async () => {
    const blogs = await blogsData() // Ensure blogsData() is an async function returning data

    return (
        <div>
            {blogs.map((data: any) => (
                <h1 key={data.id}>{data.title}</h1> // Fix map issue
            ))}
        </div>
    )
}

export default Page
