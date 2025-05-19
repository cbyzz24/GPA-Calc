// Steps to enable calculator functionality:
// Append grade input to list container
// Build empty grades array
// Push grade inputs into array
// Calculate total grade values
// Count number of grades
// Calculate average grade

const entryEl = document.getElementById("entryField");
const submitEl = document.getElementById("submitBtn");
let resultEl = document.getElementById("result");
const listEl = document.getElementById("gradeList");

let grades = [];

function submitGrade(){
    let listItem = document.createElement("p");
    listItem.innerText = entryEl.value;
    listEl.appendChild(listItem);
    grades.push(listItem.innerHTML);
    const totalValue = grades.reduce((currentTotal, grades) =>{
        return parseFloat(grades) + currentTotal
    }, 0);
    const gradesLength = grades.length;
    const gpa = totalValue/gradesLength;
    resultEl.innerHTML = gpa.toFixed(1) + " %";
    console.log(gpa);
    entryEl.value = "";
};

function clearResults(){
    grades = [];
    resultEl.innerHTML = "";
    listEl.innerHTML = "";
}


