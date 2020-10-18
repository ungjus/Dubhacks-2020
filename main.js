window.addEventListener("load", hello);
// let display = document.getElementById('display');
let races = {
   black: 0,
   white: 0,
   hispanic: 0,
   asian: 0,
   other: 0
};
function hello() {
   //document.getElementById("studentForm").addEventListener("submit", getStudentInfo);
   //document.getElementById("predictForm").addEventListener("submit", predict);
   let student = document.getElementById('studentForm');
   let predict = document.getElementById('predictForm');
   if(student){
      console.log("setting event");
      student.addEventListener("submit", getStudentInfo);
   } else {
      console.log("not setting");
   }
   if(predict){
      console.log("setting event");
      predict.addEventListener("submit", predict);
   } else {
      console.log("not setting");
   }
}

function getStudentInfo() {
   let studentData = document.getElementById("studentForm").elements;
   let sat = studentData["SAT"].value;
   let act = studentData["ACT"].value;
   let gpa = studentData['GPA'].value;
   setRace(studentData['race'].value);
   let inState = toBinary(studentData['inState'].value);
   let domestic = toBinary(studentData['domestic'].value);
   let privateSchool = toBinary(studentData['privateSchool'].value);
   let accepted = toBinary(studentData['accepted'].value);
   insertDatabase(sat, act, gpa, races.black, races.white, races.hispanic,
      races.asian, races.other, inState, domestic, privateSchool, accepted);
   console.log("sent!");
}

function predict() {
   console.log("predicting")
   let display = document.getElementById('display');
   console.log(display.value);
   alert("Your chances of getting in is 80%")
   display.value= "80%";
}

function toBinary(feature) {
   if(feature == "yes"){
      return 1;
   } else {
      return 0;
   }
}

function setRace(race) {
   for(key in races) {
      if(key == race){
         races[key] = 1;
         break;
      }
   }
}
