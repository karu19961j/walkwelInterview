const classData = require("../dataset/students.json");
const maximumScore = 50;
export const getResultOfClass = (className) => {
  const updatedClassData = classData.filter((item) => item.class === className);
  if (updatedClassData.length > 0) {
    const classResult = [];
    updatedClassData.forEach((item) => {
      const markScored = [];
      let totalMarks = 0;
      let status = "";
      item.marks.forEach((mark) => {
        const percentage = (mark.marks * 100) / maximumScore;
        if (percentage > 33) {
          status = "Pass";
          totalMarks += mark.marks;
          markScored.push(`${mark.subject}(${mark.marks}) ${status}`);
        } else {
          status = "Fail";
        }
        console.log(percentage, mark.subject);
      });
      classResult.push({
        name: `${item.name.first} ${item.name.last}`,
        marks: markScored,
        total: totalMarks,
        status,
      });
    });
    return sortArray(classResult);
  } else {
    throw Error("You have entered an wrong class");
  }
};

export const sortArray = (ar) => {
  ar.sort(function (a, b) {
    const keyA = a.total;
    const keyB = b.total;
    if (keyA > keyB) return -1;
    if (keyA < keyB) return 1;
    return 0;
  });

  return ar;
};

export const position = ["st", "nd", "rd"];
