import Link from 'next/link'
import React from 'react'

const Career = () => {
  return (
    <div className='text-center py-10'> 
      <p className='font-medium text-2xl m-auto my-5 w-fit md:w-1/2 '>
        Enroll now and achieve your goals with our education courses. Start your learning journey today!
      </p>
      <Link href={'/courses'} className='bg-[#7E3AF2] text-white rounded px-8 py-1'>
        Advance my career now
      </Link>
    </div>
  )
}

export default Career
