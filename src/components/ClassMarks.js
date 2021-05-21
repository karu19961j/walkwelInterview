import React, { useState, useRef } from "react";
import { getResultOfClass } from "../utils";
import StudentList from "./StudentList";

const ClassMarks = () => {
  const [error, setError] = useState({ message: "", isError: false });
  const [result, setResult] = useState([]);
  const inputEl = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    setError({ message: "", isError: false });
    setResult([]);
    try {
      if (inputEl.current.value) {
        const classResult = getResultOfClass(inputEl.current.value);
        setResult(() => classResult);
      } else {
        setError({
          message: "Please enter value",
          isError: true,
        });
      }
    } catch (error) {
      setError({
        message: error.message,
        isError: true,
      });
    }
  };
  return (
    <div className="student-form-container">
      <h1>Calculate class marks</h1>
      <div>
        <form>
          <input type="text" ref={inputEl} placeholder="Enter class" />
          <button onClick={onSubmit}>Get Top 3 Students</button>
          {error.message && (
            <p className={`message ${error.isError ? "error" : ""}`}>
              {error.message}
            </p>
          )}
        </form>
      </div>

      {result.length > 0 && <StudentList result={result} />}
    </div>
  );
};

export default ClassMarks;
