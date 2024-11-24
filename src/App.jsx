import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MainLayout from "./Components/MainLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Categories from "./Components/Categories";
import MockTest from "./Components/MockTest";
import MedicalPage from "./Components/MedicalPage";
import EngineeringPage from "./Components/EngineeringPage";
import ProgrammingPage from "./Components/ProgrammingPage";
import IqPage from "./Components/IqPage";
import LoksewaPage from "./Components/LoksewaPage";
import MedicalQuiz from "./Components/MedicalQuiz";
import Ioequiz from "./Components/Ioequiz";
import ProgrammingQuiz from "./Components/ProgrammingQuiz";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/medical" element={<MedicalPage />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
          <Route path="/iq" element={<IqPage />} />
          <Route path="/loksewa" element={<LoksewaPage/>} />
          <Route path="/mocktest" element={<MockTest/>} />
          <Route path="/medicalsubjects" element={<MedicalQuiz/>} />
          <Route path="/engineeringsubjects" element={<Ioequiz/>} />
          <Route path="/programmingsubjects" element={<ProgrammingQuiz/>} />

          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
