import React from "react";

const Categories = () => {
  const data = [
    {
      label: "Medical Entrance",
      description:
        "A medical entrance exam is a standardized test conducted to assess the.. ",
      button: "Start Quiz",
    },

    {
      label: "Engneering Test",
      description:
        "An engineering entrance exam is a standardized test designed to evaluate the..",
      button: "Start Quiz",
    },

    {
      label: "Programming",
      description:
        "Programming refers to the process of designing, writing, testing, and maintaining..",
      button: "Start Quiz",
    },

    {
      label: "IQ",
      description:
        "IQ (Intelligence Quotient) is a measure of a person's cognitive abilities and intellectual..",
      button: "Start Quiz",
    },
  ];

  return (
    <div>
      <div className="flex  flex-wrap justify-center mt-[60px] mb-10 gap-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-[300px] w-[550px] p-[20px]   mx-10 text-center items-center shadow-2xl rounded-[30px]"
          >
            <div className="text-4xl mb-4 text-slate-900 py-3 font-bold ">
              {item.label}
            </div>
            <div className="text-xl">{item.description}</div>
            <div>
              <button className="bg-slate-900 text-white text-2xl mt-10 px-6 py-3 rounded-[20px]">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
