import React from 'react'
import usePurchaseCourseHook from './use-purchase-course-hook'
import Image from 'next/image'

type Props = {
  courseData: any
}

const CourseCard = ({ courseData }: Props) => {

  const { showButtonLoader, makeCheckout } = usePurchaseCourseHook(courseData?.recordId,courseData?.pricingINR)

  return (
    <div className='flex flex-col border justify-between w-72 rounded-[20px] shadow-lg'>
      <div className=''>
        <Image
          alt='Course Image'
          src={courseData?.thumbnailUrl || ""}
          width={288}
          height={144}
          className='h-36 border rounded-t-[20px] object-cover' />
        <div className='flex flex-col gap-y-2 p-4'>
          <p className='text-lg tracking-wide font-semibold'>₹{courseData?.pricingINR}</p>
          <p className='text-lg tracking-wider font-light'>{courseData?.name}</p>
        </div>
      </div>
      <button
        disabled={showButtonLoader}
        className='mt-3 rounded-b-[20px] text-center text-lg tracking-wider font-light py-4 border bg-[#7E3AF2] hover:bg-[#7e3af2c7] text-white w-full '
        onClick={makeCheckout}
      >
        {showButtonLoader ? "Loading..." : "Buy Now"}
      </button>
    </div>
  )
}

export default CourseCard