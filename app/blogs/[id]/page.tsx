import getComments from '@/public/Data/comments/Comments'
import getblog from '@/public/Data/getblog'
import React from 'react'

const Page = async ({ params }: { params: { id: string } }) => {
    const blogPromis = getblog(params.id)
    const commentsPromis = getComments()
    const [blog, comment] = await Promise.all([blogPromis, commentsPromis])
    return (
        <div className='grid justify-center mt-10 w-96 mx-auto  border border-gray-100 bg-gray-50 p-2 gap-2 rounded-2xl shadow-lg'>
            <h1 className='font-bold text-xl line-clamp-2 border-b'>{blog.title}</h1>
            <h1>{blog.body}</h1>
            {/* Comments section */}

            <h1 className='font-bold text-lg'>All Comments</h1>
            <div className='space-y-1.5'>
                {
                    comment.map((data: any) => {
                        return <div key={data.id} className='p-2 shadow-sm border border-gray-300 grid gap-2 rounded-2xl'>
                            <h1 className='font-semibold'>{data.id + '.  ' + data.name}</h1>
                            <h1 className='line-clamp-2'>{data.body}</h1>

                        </div>
                    })

                }
            </div>
        </div>
    )
}
export default Page
