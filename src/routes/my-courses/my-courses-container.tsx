import React from 'react'
import useMyCoursesHook from './use-my-courses-hook'
import CourseCard from './course-card/course-card'

type Props = {}

const MyCoursesContainer = (props: Props) => {
  const { loading, allCoursesList, currentUser } = useMyCoursesHook()
  return (
    <>
      {loading ?
        <div>Loading...</div>
        :
        <div className='max-w-[1440px] mx-auto xxl:px-20 md:px-10 xxs:px-5 px-2'>
          <div className='flex flex-col gap-y-6'>
            <p className='text-4xl text-black font-semibold'>Good Morning, {currentUser?.displayName}</p>
            <p className='mt-2 text-xl'>View all <span className='text-[#7E3AF2]'>courses</span></p>
            <div className='flex flex-wrap gap-x-8'>
              {allCoursesList.map((courseData: any, index: number) => {
                return (
                  <CourseCard courseData={courseData} key={index} />
                )
              })}
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default MyCoursesContainer