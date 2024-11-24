import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      text: "Engineering ",
      description:
        "The Institute of Engineering (IOE) is a prestigious engineering education and research institution under Tribhuvan University in Nepal. Established in 1930, it offers undergraduate, postgraduate, and doctoral programs in various engineering disciplines.",
      image: "src/assets/ram.jpg",
    },
    {
      id: 2,
      text: "Medical",
      description:
        "Medical entrance exams are competitive tests designed to assess a candidate's aptitude and knowledge in subjects like Biology, Chemistry, and Physics for admission to medical colleges.",
      image: "src/assets/mediimage.jpg",
    },
    {
      id: 3,
      text: "Programming",
      description:
        "Programming is the process of designing and writing instructions for computers to execute tasks or solve problems. It involves using languages like Python, JavaScript, or C++.",
      image: "src/assets/programming.jpg",
    },
    {
      id: 4,
      text: "Cmat",
      description:
        "IQ, or Intelligence Quotient, is a measure of cognitive abilities and intellectual potential, often assessed through standardized tests. While it reflects problem-solving and reasoning skills, it doesn't encompass creativity, emotional intelligence, or practical knowledge.",
      image: "public/iq.jpg",
    },

    {
      id: 5,
      text: "Loksewa",
      description:
        "Loksewa, also known as the Public Service Commission (PSC) exam in Nepal, is a competitive civil service examination that recruits candidates for various government positions.",
      image: "src/assets/loksewa.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen overflow-hidden ">
        <img src="src/assets/library.jpg" className="h-full w-full"/>
      {slides.map((slide, index) => {
        console.log(slide)
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative text-white text-center p-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.text}
              </h1>
              <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                {slide.description}
              </p>
              {/* <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                Read More
              </button> */}
            </div>
          </div>
        );
      })}

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
