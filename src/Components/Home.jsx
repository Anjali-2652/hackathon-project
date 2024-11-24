import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import "./Home.css";
import Login from "./Login";
import Contact from "./Contact";
import About from "./About";
import Slider from "./Slider";
import Courses from "./Courses";
import Achievements from "./Achievements";
import Choose from "./Choose";
import Welcome from "./Welcome";
import End from "./end";
const Home = () => {


  return (
    <div>
      {/* <About/> */}
      <Slider/>
      <Welcome/>
      <Courses/>
      <Achievements/>
      <Choose/>
      <End/>

    </div>
  );
};

export default Home;


