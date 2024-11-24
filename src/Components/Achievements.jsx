import React from 'react';

const Achievements = () => {
  const data = [
    { value: "50", label: "Students Enrolled", icon: "🎓" },
    { value: "10+", label: "Expert Teachers", icon: "👩‍🏫" },
    { value: "4", label: "Courses", icon: "📚" },
    { value: "100+", label: "Total Students", icon: "👥" },
  ];

  return (
    <div className="bg-gray-300  py-12 pb-[150px] pt-[80px]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[50px] font-bold text-gray-800 mb-[60px]">Our Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col flex-wrap items-center bg-white shadow-lg rounded-lg p-6"
            >
              <div className="text-6xl mb-4">{item.icon}</div>
              <div className="text-4xl font-semibold text-orange-500">{item.value}</div>
              <p className="text-gray-600  text-2xl mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
