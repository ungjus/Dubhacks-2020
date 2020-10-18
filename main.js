window.addEventListener("load", hello);
let races = {
   black: 0,
   white: 0,
   hispanic: 0,
   asian: 0,
   other: 0
};
function hello() {
   document.getElementById("studentForm").addEventListener("submit", getStudentInfo);
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
