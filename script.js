/** @format */

let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    let studentsWithMarksOver50 = arr.map(function(student) {
      return student.marks > 50;
    });
    // Log the array of students with marks over 50
    console.log(studentsWithMarksOver50);
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach(function(student) {
      if (student.marks > 50) {
        console.log(student);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newStudent = {
      id: 4,
      name: "susan",
      age: "20",
      marks: 45
    };
  
    // Append the new student object to the array
    arr.push(newStudent);
  
    // Log the array
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
      let failedStudentIndex = arr.findIndex(function(student) {
      return student.marks < 50;
    });
  
    // Remove the student from the array
    arr.splice(failedStudentIndex, 1);
  
    // Log the array
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
     let newStudents = [
      { id: 5, name: "michael", age: "21", marks: 80 },
      { id: 6, name: "mary", age: "22", marks: 85 },
      { id: 7, name: "james", age: "23", marks: 90 }
    ];
  
    // Concatenate the new array with the existing array
    arr = arr.concat(newStudents);
  
    // Log the array
    console.log(arr);
  }
  PrintStudentswithMap()
  PrintStudentsbyForEach()
  addData();
  removeFailedStudent();
  concatenateArray() 
