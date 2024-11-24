import React from "react";
import { Link } from "react-router-dom";

const MockTest = () => {
  const data = [
    { label: "Medical Entrance", link: "/medicalsubjects" },

    { label: "Engineering Test", link: "/engineeringsubjects" },

    { label: "Programming", link: "/programmingsubjects" },

    { label: "IQ", link: "/iqsubjects" },

    { label: "Loksewa", link: "/loksewasubjects" },
  ];

  return (
    <div className="bg-gray-200">
      <div className="flex  flex-wrap justify-center pt-[60px] pb-10 gap-y-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="h-fit w-[550px] p-[15px] pb-10 mx-10 text-center items-center shadow-2xl rounded-[30px] bg-gray-200"
          >
            <div className="text-4xl mb-4 text-slate-900 py-3 font-bold ">
              {item.label}
            </div>

            <Link to={item.link}>
              <div>
                <a
                  href=""
                  className="bg-slate-900 text-white  text-3xl px-8 py-1 rounded-[20px]"
                >
                  View
                </a>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockTest;
