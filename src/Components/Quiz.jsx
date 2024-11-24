import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0); 
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); 
  const [timeTaken, setTimeTaken] = useState(0); 

  useEffect(() => {
    if (timeLeft > 0 && !isQuizFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsQuizFinished(true); 
    }
  }, [timeLeft, isQuizFinished]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      if (selectedOption === questions[currentQuestion].answer) {
        setScore(score + 1);
      } else {
        setWrongAnswers(wrongAnswers + 1);
      }
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setIsQuizFinished(true);
        setTimeTaken(600 - timeLeft); // Calculate total time taken
      }
    } else {
      alert("Please select an option before proceeding!");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="">
    <div style={styles.container}>
      {!isQuizFinished ? (
        <>
          <h3  style={styles.timer} >
            Time Left:{" "}
            <span className=" text-red" >{formatTime(timeLeft)}</span>
          </h3>
          <h3 style={styles.question}>
            Question {currentQuestion + 1}:{" "}
            {questions[currentQuestion].question}
          </h3>
          <div>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                style={{
                  ...styles.optionButton,
                  backgroundColor:
                    selectedOption === option ? "#d1e7dd" : "#fff",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-around" style={styles.navigation}>
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              style={{
                ...styles.navButton,
                opacity: currentQuestion === 0 ? 0.5 : 1,
                cursor: currentQuestion === 0 ? "not-allowed" : "pointer",
              }}
            >
              Previous
            </button>
            <button 
              onClick={handleNext}
              style={{
                ...styles.navButton,
              }}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
          <p className="text-2xl mt-5">
            {currentQuestion + 1} of {questions.length} questions
          </p>
        </>
      ) : (
        <div>
          <h2>Quiz Finished!</h2>
          <p>
            Your Score: <strong>{score}</strong> / {questions.length}
          </p>
          <p>
            Time Taken: <strong>{formatTime(timeTaken)}</strong>
          </p>
          <PieChart correctAnswers={score} wrongAnswers={wrongAnswers} />
        </div>
      )}
    </div>
    </div>
  );
};

// PieChart Component
const PieChart = ({ correctAnswers, wrongAnswers }) => {
  const data = {
    labels: ["Correct Answers", "Wrong Answers"],
    datasets: [
      {
        data: [correctAnswers, wrongAnswers],
        backgroundColor: ["#36a2eb", "#ff6384"],
      },
    ],
  };

  return <Pie data={data} />;
};

// Inline CSS
const styles = {
  container: {
    padding: "20px",
    border: "2px solid black",
    borderRadius: "10px",
    width: "550px",
    margin: "18px auto",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  timer: {
    fontSize: "25px",
    marginBottom: "10px",
    color: "red",
    fontWeight: "bold",
  },
  question: {
    fontSize: "22px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  optionButton: {
    display: "block",
    margin: "10px auto",
    padding: "10px",
    width: "80%",
    border: "1px solid #000",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "20px",
  },
  navigation: {
    marginTop: "22px",
  },
  navButton: {
    padding: "10px 20px",
    margin: "0 5px",
    fontSize: "18px",
    cursor: "pointer",
    border: "1px solid black",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
  },
};

export default Quiz;
