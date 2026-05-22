if(!localStorage.getItem("studentName")){
  window.location.href = "login.html";
}

let studentName = localStorage.getItem("studentName");
let users = JSON.parse(localStorage.getItem("users")) || [];
let results = JSON.parse(localStorage.getItem("studentResults")) || [];

let currentUser = users.find(user => user.name === studentName);
let studentResults = results.filter(r => r.name === studentName);

document.getElementById("profileName").innerText = studentName;
document.getElementById("profileEmail").innerText =
  currentUser ? currentUser.email : "";

document.getElementById("profileAttempts").innerText =
  studentResults.length;

let bestScore = 0;
let averageScore = 0;

if(studentResults.length > 0){
  bestScore = Math.max(...studentResults.map(r => Number(r.score)));

  let totalScore = studentResults.reduce((sum, r) => {
    return sum + Number(r.score);
  }, 0);

  averageScore = (totalScore / studentResults.length).toFixed(2);
}

document.getElementById("profileBest").innerText = bestScore;
document.getElementById("profileAverage").innerText = averageScore;