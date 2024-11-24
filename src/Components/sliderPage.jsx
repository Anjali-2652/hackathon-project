import React, { useState } from 'react';
import "./Slider.css";

const SliderPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleThumbClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div className="carousel">
                {items.map((item, index) => (
                    <div key={index} className={`item ${index === activeIndex ? 'active' : ''}`}>
                        <div className="bg"></div>
                        <div className="info-box">
                            <div className="info-slider" style={{ transform: `translateY(${activeIndex * -100}%)` }}>
                                <div className="info-item" style={{ '--i': index }}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <a href="#" className="btn">View More</a>
                                </div>
                            </div>
                        </div>
                        <div className="img-box">
                            <div className="img-slider" style={{ transform: `translateX(${activeIndex * -100}%)` }}>
                                <div className="img-item" style={{ '--i': index }}>
                                    <img src={item.imgSrc} alt={item.title} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <ul className="thumb">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={index === activeIndex ? 'selected' : ''}
                            onClick={() => handleThumbClick(index)}
                        >
                            <img src={item.thumbSrc} alt={`Thumbnail ${index}`} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// Example items data
const items = [
    {
        title: "IOE Preparation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum doloremque eveniet minima, alias id voluptate aliquam culpa fugiat fuga! Quam natus nam iste odio!",
        imgSrc: "src/assets/IOE.jpg",
        thumbSrc: "src/assets/IOE.jpg"
    },
    {
        title: "IT Preparation",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nostrum doloremque eveniet minima, alias id voluptate aliquam culpa fugiat fuga! Quam natus nam iste odio!",
        imgSrc: "src/assets/engineer.jpg",
        thumbSrc: "src/assets/engineer.jpg"
    },
    // Add more items as needed
];

export default SliderPage;
