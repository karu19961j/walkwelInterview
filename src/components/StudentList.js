import React from "react";
import { position } from "../utils";

const StudentList = ({ result }) => {
  return (
    <div className="student-list-container">
      <ol>
        {result.map((item, index) => {
          return (
            <li>{`${item.name} got ${item.total} marks ${JSON.stringify(
              item.marks
            )} ${
              index <= 2 && item.status === "Pass"
                ? `got ${index + 1}${position[index]} Position`
                : ""
            }`}</li>
          );
        })}
      </ol>
    </div>
  );
};

export default StudentList;
