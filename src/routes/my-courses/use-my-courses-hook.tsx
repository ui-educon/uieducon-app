import { handleGet } from '@/core/api-calls/Axios'
import { useAppSelector } from '@/core/redux/hooks'
import React, { useEffect, useState } from 'react'

type Props = {}

const useMyCoursesHook = () => {
  const [allCoursesList, setAllCoursesList] = useState<any[]>([])
  const { currentUser } = useAppSelector(state => state.authState)
  const [loading, setLoading] = useState(true)

  const fetchAllCourses = async () => {
    const allCoursesRes = await handleGet("/course/get-all-courses")
    setAllCoursesList(allCoursesRes.data)
    setLoading(false)
  }

  useEffect(() => {
    fetchAllCourses()
  }, [])

  return { loading, allCoursesList,currentUser }
}

export default useMyCoursesHook