import React, { useState } from "react";
import Quiz from "./Quiz";
import PhysicsData from "./Physics";
import ChemistryData from "./Chemistry";
import BiologyData from "./Biology";

const App = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
  };

  
  const getQuestions = () => {
    switch (selectedSubject) {
      case "Physics":
        return PhysicsData;
      case "Chemistry":
        return ChemistryData;
      case "Biology":
        return BiologyData;
      default:
        return [];
    }
  };

  return (
    <div className="p-5 text-center ">
      <h1 className="font-bold text-4xl mb-5">Medical Entrance</h1>

      {!selectedSubject ? (
        <div>
          <h2 className="text-3xl mb-10">Select a Subject</h2>
          <button
            className="h-fit w-[550px] p-[20px] pb-10 bg-gradient-to-r  from-sky-300 to-blue-900 mx-10 text-center items-center shadow-2xl rounded-[30px]"
            onClick={() => handleSubjectSelect("Physics")}
            style={styles.subjectButton}
          >
            Physics
          </button>
          <button
            className="h-fit w-[550px] p-[20px] pb-10 bg-gradient-to-r  from-sky-300 to-blue-900 mx-10 text-center items-center shadow-2xl rounded-[30px]"
            onClick={() => handleSubjectSelect("Chemistry")}
            style={styles.subjectButton}
          >
            Chemistry
          </button>
          <button
            className="h-fit w-[550px] p-[20px]  pb-10 bg-gradient-to-r  from-sky-300 to-blue-900 mx-10 text-center items-center shadow-2xl rounded-[30px]"
            onClick={() => handleSubjectSelect("Biology")}
            style={styles.subjectButton}
          >
            Biology
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-3xl mt-3 ">{selectedSubject} Quiz</h2>
          <Quiz questions={getQuestions()} />
          <button
            className="bg-gradient-to-r from-blue-500 to-sky-500 p-5 rounded-2xl text-2xl"
            onClick={() => setSelectedSubject(null)}
            style={{ marginTop: "20px" }}
          >
            Back to Subject Selection
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  subjectButton: {
    margin: "20px",
    padding: "25px 20px",
    fontSize: "38px",
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: "5px",
    backgroundColor: "#f0f0f0",
  },
};

export default App;
