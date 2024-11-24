import React from 'react'
import Courses from './Courses'
import { Outlet } from 'react-router-dom'

const CoursesLayout = () => {
  return (
    <div>
      <Courses/>
      <Outlet/>
    </div>
  )
}

export default CoursesLayout
