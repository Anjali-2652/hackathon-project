import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {

  const data = [
    {label:"Medical Entrance", description:"A medical entrance exam is a standardized competitive test conducted to select candidates aspiring to pursue careers in the field of medicine.", link:"/medical"},

    {label:"Engineering Test", description:"An engineering entrance exam is a competitive assessment designed to evaluate the aptitude, knowledge, and problem-solving skills of students aspiring to pursue careers in engineering and technology.", link:"/engineering"},

    {label:"Programming", description:"Programming is the process of designing, writing, testing, and maintaining the code that powers software applications, websites, and digital systems.", link:"/programming"},
    
    {label:"IQ", description:"IQ(Intelligence Quotient) is assessed through standardized tests that evaluate various mental capabilities, such as reasoning, problem-solving, memory, and logical thinking", link:"/iq"},

    {label:"Loksewa", description:" Loksewa (Public Service Commission) is a competitive examination process conducted to recruit individuals for various government positions.", link:"/loksewa"}

]



  return (
    <div className="bg-gray-300">
      <h1 className="text-center text-[60px] font-bold pt-10">Our Courses</h1>

      <div className="flex  flex-wrap justify-center mt-[60px] gap-y-10">

      {data.map((item, index)=>(
              <div key={index} className="h-fit w-[550px] p-[20px] pb-10 shadow-2xl bg-gray-200 mx-10 text-center items-center  rounded-[30px]">
              <div className="text-4xl mb-4 text-slate-900 py-3 font-bold ">{item.label}</div>
              <div className="text-xl mb-10">
                {item.description}
              </div>


              
              <Link to={item.link}>
              <div>

                <a href="" className="bg-slate-900 text-white  text-2xl px-6 py-3 rounded-[20px]">View More</a>
              </div>
              </Link>

            </div>
        ))}
      
      </div>
      
    </div>
  );
};

export default Courses;
