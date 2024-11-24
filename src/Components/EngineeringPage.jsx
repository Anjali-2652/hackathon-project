import React from 'react'
import { Link } from 'react-router-dom'

const EngineeringPage = () => {
  return (
    <div>
    <div className='flex bg-slate-300 h-dvh '>
      <div className="m-[100px] flex flex-wrap gap-y-10 ">
        <a href="src/assets/engineering.pdf" className='bg-slate-800 text-white rounded-2xl  text-4xl font-bold h-[120px] py-7 px-[100px]'>Notes</a>

        <Link to={"/engineeringsubjects"}>
        <div className='bg-slate-800 text-white rounded-2xl  text-4xl font-bold py-7 h-[120px] px-[100px] '>Quiz</div>
        </Link>
     
      </div>
      <div>
        <img src="src/assets/mediimage.jpg"  className='h-2/3 mt-10 rounded-full'/>
      </div>
    </div>




 


    
    </div>
  )
}

export default EngineeringPage
