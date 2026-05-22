console.log("Dashboard JS connected");

if(!localStorage.getItem("studentName")){
  window.location.href = "login.html";
}

const studentName = localStorage.getItem("studentName") || "Student";

document.getElementById("studentName").innerText =
  `${studentName}'s Dashboard`;

function goToExam(){
  sessionStorage.removeItem("examAllowed");
  window.location.href = "instructions.html";
}

async function loadHistory(){
  try{
    let response = await fetch("http://localhost:5000/api/results");
    let results = await response.json();

    let studentResults =
      results.filter(r => r.studentName === studentName);

    let html = `
      <table>
        <tr>
          <th>Date</th>
          <th>Total</th>
          <th>Attempted</th>
          <th>Correct</th>
          <th>Wrong</th>
          <th>Score</th>
        </tr>
    `;

    if(studentResults.length === 0){
      html += `
        <tr>
          <td colspan="6">No exam history found</td>
        </tr>
      `;
    }

    studentResults.forEach(result => {
      html += `
        <tr>
          <td>${new Date(result.date).toLocaleString()}</td>
          <td>${result.totalQuestions}</td>
          <td>${result.attempted}</td>
          <td>${result.correct}</td>
          <td>${result.wrong}</td>
          <td>${result.score}</td>
        </tr>
      `;
    });

    html += "</table>";
    document.getElementById("historyTable").innerHTML = html;

  }catch(error){
    console.log(error);
    document.getElementById("historyTable").innerHTML =
      "<p>Failed to load history</p>";
  }
}

async function loadCharts(){

  try{

    let scoreCanvas = document.getElementById("scoreChart");
    let attemptCanvas = document.getElementById("attemptChart");

    if(!scoreCanvas || !attemptCanvas){
      console.log("Chart canvas not found");
      return;
    }

    if(typeof Chart === "undefined"){
      console.log("Chart.js not loaded");
      return;
    }

    let response = await fetch("http://localhost:5000/api/results");
    let results = await response.json();

    let studentResults =
      results.filter(r => r.studentName === studentName);

    if(studentResults.length === 0){
      document.querySelector(".charts-box").innerHTML = `
        <h2>Performance Analytics</h2>
        <p>No exam history found.</p>
      `;
      return;
    }

    let labels = studentResults.map((r, i) => "Test " + (i + 1));
    let scores = studentResults.map(r => Number(r.score));
    let attempted = studentResults.map(r => Number(r.attempted));
if(window.scoreChartInstance){
  window.scoreChartInstance.destroy();
}

window.scoreChartInstance = new Chart(scoreCanvas, {
  type: "line",
  data: {
    labels: labels,
    datasets: [{
      label: "Score Progress",
      data: scores,
      borderWidth: 3,
      tension: 0.4
    }]
  }
});

if(window.attemptChartInstance){
  window.attemptChartInstance.destroy();
}

window.attemptChartInstance = new Chart(attemptCanvas, {
  type: "bar",
  data: {
    labels: labels,
    datasets: [{
      label: "Attempted Questions",
      data: attempted,
      borderWidth: 1
    }]
  }
});

  }
  catch(error){
    console.log("Chart error:", error);
  }

}

function logoutUser(){
  localStorage.removeItem("studentName");
  sessionStorage.removeItem("examAllowed");
  window.location.href = "login.html";
}

async function loadMockTests(){
  let box = document.getElementById("mockTestList");

  try{
    let response = await fetch("http://localhost:5000/api/mock-tests");
    let allTests = await response.json();

    if(allTests.length === 0){
      box.innerHTML = "<p>No mock tests available.</p>";
      return;
    }

    box.innerHTML = "";

    allTests.forEach(test => {
      let isPremium =
        test.premium === true || test.premium === "true";

      let btn = document.createElement("button");
      btn.className = "test-btn";

      btn.innerHTML = `
        <strong>${test.name}</strong>
        <span>
          ${test.category || "No Category"} •
          ${test.questions.length} Questions •
          ${test.duration || 90} Minutes •
          Negative: ${test.negativeMarking || 0.33}
          ${isPremium ? " • ⭐ Premium" : ""}
        </span>
      `;

      btn.dataset.category = test.category || "No Category";

      btn.onclick = function(){
        let now = new Date();

        if(test.startTime && now < new Date(test.startTime)){
          alert("This test has not started yet.");
          return;
        }

        if(test.endTime && now > new Date(test.endTime)){
          alert("This test has ended.");
          return;
        }

        if(isPremium && localStorage.getItem("premiumUser") !== "true"){
          alert("This is a Premium Mock Test");
          window.location.href = "pricing.html";
          return;
        }

        let confirmStart = confirm(
          `Start this test?\n\n` +
          `Test: ${test.name}\n` +
          `Category: ${test.category || "No Category"}\n` +
          `Questions: ${test.questions.length}\n` +
          `Duration: ${test.duration || 90} Minutes\n` +
          `Negative Marking: ${test.negativeMarking || 0.33}`
        );

        if(confirmStart){
          localStorage.setItem("selectedMockTest", test.name);
          localStorage.setItem("selectedTestData", JSON.stringify(test));
          sessionStorage.removeItem("examAllowed");
          window.location.href = "instructions.html";
        }
      };

      box.appendChild(btn);
    });

  }catch(error){
    console.log(error);
    box.innerHTML = "<p>Failed to load mock tests</p>";
  }
}

function searchMockTests(){
  let input = document.getElementById("searchMock").value.toLowerCase();
  let buttons = document.querySelectorAll(".test-btn");

  buttons.forEach(btn => {
    let text = btn.innerText.toLowerCase();
    btn.style.display = text.includes(input) ? "block" : "none";
  });
}

function filterByCategory(){
  let selectedCategory = document.getElementById("categoryFilter").value;
  let buttons = document.querySelectorAll(".test-btn");

  buttons.forEach(btn => {
    let category = btn.dataset.category;
    btn.style.display =
      selectedCategory === "All" || category === selectedCategory
        ? "block"
        : "none";
  });
}

loadHistory();
loadCharts();
loadMockTests();