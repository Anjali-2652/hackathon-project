import React from 'react'
import { Link } from 'react-router-dom'

const LoksewaPage = () => {
  return (
    <div>
    <div className='flex bg-slate-300 h-dvh '>
      <div className="m-[100px] flex flex-wrap gap-y-10 ">
        <a href="" className='bg-gradient-to-r bg-slate-800 text-white  rounded-2xl  text-4xl font-bold h-fit py-7 px-[100px]'>Medical Entrance Notes</a>

        <Link to={"/medicalsubjects"}>
        <div className='bg-slate-800 text-white rounded-2xl  text-4xl font-bold py-7 h-fit px-[100px] '>Medical Entrance Quiz</div>
        </Link>
     
      </div>
      <div>
        <img src="src/assets/mediimage.jpg"  className='h-2/3 mt-10 rounded-full'/>
      </div>
    </div>    
    </div>
  )
}

export default LoksewaPage
