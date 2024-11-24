import React from 'react'

const Play = () => {
  return (
    <div className='bg-slate-300 h-screen'>
        <div>
        <div className='font-bold text-[50px] tracking-wide flex justify-center pt-5 mb-10'>Categories</div>

      <div className='flex flex-wrap gap-y-4 justify-center text-center gap-x-10 text-[30px]'>
        <div className='border-black shadow-2xl rounded-2xl p-3  bg-gray-200 h-[150px] w-[400px]'>
          <div>Programming</div>
          <button className='bg-blue-500 py-1  mt-4 px-5 rounded-2xl'>Start</button>
        </div>
        </div>
      </div>
    </div>

  )
}

export default Play
