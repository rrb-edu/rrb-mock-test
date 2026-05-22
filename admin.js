const API = "https://rrb-mock-test.onrender.com";

if (
  localStorage.getItem("token") === null ||
  localStorage.getItem("role") !== "admin"
) {
  alert("Admin access only");
  window.location.href = "login.html";
}

function getAdminQuestions() {
  return JSON.parse(localStorage.getItem("adminQuestions")) || [];
}

function updateCount() {
  const countBox = document.getElementById("count");
  if (countBox) countBox.innerText = getAdminQuestions().length;
}

function addQuestion() {
  let question = document.getElementById("questionText").value;
  let option1 = document.getElementById("option1").value;
  let option2 = document.getElementById("option2").value;
  let option3 = document.getElementById("option3").value;
  let option4 = document.getElementById("option4").value;
  let answer = document.getElementById("correctAnswer").value;

  if (!question || !option1 || !option2 || !option3 || !option4 || !answer) {
    alert("Please fill all fields");
    return;
  }

  let questions = getAdminQuestions();

  questions.push({
    question,
    options: [option1, option2, option3, option4],
    answer: Number(answer)
  });

  localStorage.setItem("adminQuestions", JSON.stringify(questions));

  alert("Question Added Successfully");

  document.getElementById("questionText").value = "";
  document.getElementById("option1").value = "";
  document.getElementById("option2").value = "";
  document.getElementById("option3").value = "";
  document.getElementById("option4").value = "";
  document.getElementById("correctAnswer").value = "";

  updateCount();
}

function clearQuestions() {
  if (confirm("Are you sure you want to delete all admin questions?")) {
    localStorage.removeItem("adminQuestions");
    updateCount();
    alert("All questions deleted");
  }
}

function logoutAdmin() {
  localStorage.clear();
  window.location.href = "login.html";
}

async function readPDF() {
  const fileInput = document.getElementById("pdfFile");
  const output = document.getElementById("pdfOutput");

  if (!fileInput.files.length) {
    alert("Please select a PDF file");
    return;
  }

  const file = fileInput.files[0];
  const fileReader = new FileReader();

  fileReader.onload = async function () {
    const typedArray = new Uint8Array(this.result);
    const pdf = await pdfjsLib.getDocument(typedArray).promise;

    let fullText = "";

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      const pageText = content.items.map(item => item.str).join(" ");
      fullText += `\n\n--- Page ${pageNumber} ---\n\n` + pageText;
    }

    output.value = fullText;
    alert("PDF text extracted successfully!");
  };

  fileReader.readAsArrayBuffer(file);
}

function convertPDFTextToQuestions() {
  const text = document.getElementById("pdfOutput").value;

  if (text.trim() === "") {
    alert("First read/upload a PDF");
    return;
  }

  let testName = document.getElementById("testName").value.trim();
  let category = document.getElementById("subjectCategory").value;

  if (testName === "") {
    alert("Please enter mock test name");
    return;
  }

  if (category === "") {
    alert("Please select subject category");
    return;
  }

  let cleanedText = text
    .replace(/\n/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  let questionBlocks = cleanedText
    .split(/Q\.\s*\d+|Question\s*\d+|\b\d+\)/i)
    .slice(1);

  let convertedQuestions = [];

  questionBlocks.forEach(block => {
    let questionText = "";
    let options = [];

    let ansSplit = block.split(/\bAns\b|\bOptions\b/i);

    if (ansSplit.length > 1) {
      questionText = ansSplit[0].trim();
      block = ansSplit[1].trim();
    }

    let alphaOptions = [...block.matchAll(/\b[A-D]\.\s*(.*?)(?=\s+[A-D]\.|$)/g)]
      .map(m => m[1].trim());

    let numberOptions = [...block.matchAll(/\b[1-4]\.\s*(.*?)(?=\s+[1-4]\.|$)/g)]
      .map(m => m[1].trim());

    if (alphaOptions.length >= 4) {
      options = alphaOptions.slice(0, 4);
    } else if (numberOptions.length >= 4) {
      options = numberOptions.slice(0, 4);
    }

    if (questionText === "") {
      let firstOptionPattern = /\b(A\.|1\.)/;
      let parts = block.split(firstOptionPattern);
      questionText = parts[0].trim();
    }

    if (questionText && options.length === 4) {
      convertedQuestions.push({
        question: questionText,
        options: options,
        answer: null
      });
    }
  });

  if (convertedQuestions.length === 0) {
    alert("No questions detected. Try another PDF or check PDF text format.");
    return;
  }

  let allTests = JSON.parse(localStorage.getItem("allMockTests")) || [];

  allTests.push({
    name: testName,
    premium: document.getElementById("testAccess").value === "premium",
    category: document.getElementById("subjectCategory").value,
    duration: document.getElementById("testDuration").value,
    negativeMarking: document.getElementById("negativeMarking").value,
    startTime: document.getElementById("startTime").value,
    endTime: document.getElementById("endTime").value,
    questions: convertedQuestions
  });

  localStorage.setItem("allMockTests", JSON.stringify(allTests));

  fetch(`${API}/api/mock-tests/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem("token")
    },
    body: JSON.stringify({
      name: testName,
      category: document.getElementById("subjectCategory").value,
      duration: document.getElementById("testDuration").value,
      negativeMarking: document.getElementById("negativeMarking").value,
      premium: document.getElementById("testAccess").value === "premium",
      startTime: document.getElementById("startTime").value,
      endTime: document.getElementById("endTime").value,
      questions: convertedQuestions
    })
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
    })
    .catch(err => {
      console.log(err);
    });

  localStorage.setItem("selectedMockTest", testName);

  alert(convertedQuestions.length + " questions imported successfully!");

  updateCount();
}

async function showMockTests() {
  let box = document.getElementById("mockTestManager");

  try {
    let response = await fetch(`${API}/api/mock-tests`);
    let allTests = await response.json();

    if (allTests.length === 0) {
      box.innerHTML = "<p>No mock tests uploaded.</p>";
      return;
    }

    let html = `
      <h2>Manage Mock Tests</h2>
      <table>
        <tr>
          <th>No</th>
          <th>Test Name</th>
          <th>Category</th>
          <th>Questions</th>
          <th>Action</th>
        </tr>
    `;

    allTests.forEach((test, index) => {
      html += `
        <tr>
          <td>${index + 1}</td>
          <td>${test.name}</td>
          <td>${test.category || "No Category"}</td>
          <td>${test.questions.length}</td>
          <td>
            <button onclick="editMockTest('${test._id}')">Edit</button>
            <button class="danger small-btn" onclick="deleteMockTest('${test._id}')">
              Delete
            </button>
          </td>
        </tr>
      `;
    });

    html += "</table>";

    box.innerHTML = html;
  } catch (error) {
    console.log(error);
    box.innerHTML = "<p>Failed to load mock tests.</p>";
  }
}

async function deleteMockTest(id) {
  if (!confirm("Are you sure you want to delete this mock test?")) {
    return;
  }

  try {
    let response = await fetch(`${API}/api/mock-tests/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    });

    let data = await response.json();

    alert(data.message);

    showMockTests();
  } catch (error) {
    console.log(error);
    alert("Delete failed");
  }
}

async function editMockTest(id) {
  let newName = prompt("Enter new mock test name:");

  if (!newName) {
    return;
  }

  let newCategory = prompt("Enter new category:");
  let newDuration = prompt("Enter duration in minutes:");
  let newNegative = prompt("Enter negative marking:");

  try {
    let response = await fetch(`${API}/api/mock-tests/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      body: JSON.stringify({
        name: newName,
        category: newCategory,
        duration: Number(newDuration),
        negativeMarking: Number(newNegative)
      })
    });

    let data = await response.json();

    alert(data.message);

    showMockTests();
  } catch (error) {
    console.log(error);
    alert("Update failed");
  }
}

async function loadAdminStats() {
  try {
    let testsRes = await fetch(`${API}/api/mock-tests`);
    let allTests = await testsRes.json();

    let resultsRes = await fetch(`${API}/api/results`);
    let results = await resultsRes.json();

    let totalQuestions = 0;

    allTests.forEach(test => {
      totalQuestions += test.questions.length;
    });

    let averageScore = 0;

    if (results.length > 0) {
      let totalScore = results.reduce((sum, result) => {
        return sum + Number(result.score);
      }, 0);

      averageScore = (totalScore / results.length).toFixed(2);
    }

    if (document.getElementById("totalTests")) {
      document.getElementById("totalTests").innerText = allTests.length;
    }

    if (document.getElementById("totalQuestions")) {
      document.getElementById("totalQuestions").innerText = totalQuestions;
    }

    if (document.getElementById("totalStudents")) {
      document.getElementById("totalStudents").innerText = results.length;
    }

    if (document.getElementById("averageScore")) {
      document.getElementById("averageScore").innerText = averageScore;
    }
  } catch (error) {
    console.log(error);
  }
}

async function loadAdminCharts() {
  try {
    if (typeof Chart === "undefined") {
      return;
    }

    let testsRes = await fetch(`${API}/api/mock-tests`);
    let allTests = await testsRes.json();

    let resultsRes = await fetch(`${API}/api/results`);
    let results = await resultsRes.json();

    let categories = {};

    allTests.forEach(test => {
      let category = test.category || "No Category";
      categories[category] = (categories[category] || 0) + 1;
    });

    let categoryChart = document.getElementById("categoryChart");

    if (categoryChart) {
      new Chart(categoryChart, {
        type: "pie",
        data: {
          labels: Object.keys(categories),
          datasets: [{
            data: Object.values(categories)
          }]
        }
      });
    }

    let scoreChart = document.getElementById("scoreChart");

    if (scoreChart) {
      let labels = results.map((r, i) => "Attempt " + (i + 1));
      let scores = results.map(r => Number(r.score));

      new Chart(scoreChart, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [{
            label: "Student Scores",
            data: scores
          }]
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function showStudents() {
  let box = document.getElementById("studentsBox");

  let response = await fetch(`${API}/api/auth/students`);
  let students = await response.json();

  let html = `
    <h2>Manage Students</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Premium</th>
        <th>Action</th>
      </tr>
  `;

  students.forEach(student => {
    html += `
      <tr>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.isPremium ? "Premium" : "Free"}</td>
        <td>
          <button onclick="updatePremium('${student._id}', true)">
            Make Premium
          </button>

          <button onclick="updatePremium('${student._id}', false)">
            Make Free
          </button>
        </td>
      </tr>
    `;
  });

  html += "</table>";

  box.innerHTML = html;
}

async function updatePremium(id, status) {
  let response = await fetch(`${API}/api/auth/premium/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      isPremium: status
    })
  });

  let data = await response.json();

  alert(data.message);

  showStudents();
}

function showQuestionEditor() {
  let allTests = JSON.parse(localStorage.getItem("allMockTests")) || [];
  let selectedMockTest = localStorage.getItem("selectedMockTest");

  let testIndex = allTests.findIndex(test => test.name === selectedMockTest);

  if (testIndex === -1) {
    alert("Please select/import a mock test first");
    return;
  }

  let questions = allTests[testIndex].questions;
  let box = document.getElementById("questionEditor");

  let html = `
    <h2>Edit Correct Answers</h2>
    <h3>${allTests[testIndex].name}</h3>
  `;

  questions.forEach((q, index) => {
    html += `
      <div class="edit-card">
        <h3>Q${index + 1}. ${q.question}</h3>

        <select onchange="updateAnswer(${testIndex}, ${index}, this.value)">
          <option value="">Select Correct Answer</option>
          <option value="0" ${q.answer === 0 ? "selected" : ""}>1. ${q.options[0]}</option>
          <option value="1" ${q.answer === 1 ? "selected" : ""}>2. ${q.options[1]}</option>
          <option value="2" ${q.answer === 2 ? "selected" : ""}>3. ${q.options[2]}</option>
          <option value="3" ${q.answer === 3 ? "selected" : ""}>4. ${q.options[3]}</option>
        </select>
      </div>
    `;
  });

  box.innerHTML = html;
}

function updateAnswer(testIndex, questionIndex, answerValue) {
  let allTests = JSON.parse(localStorage.getItem("allMockTests")) || [];

  allTests[testIndex].questions[questionIndex].answer = Number(answerValue);

  localStorage.setItem("allMockTests", JSON.stringify(allTests));

  alert("Answer saved for Question " + (questionIndex + 1));
}

function showFullQuestionEditor() {
  let allTests = JSON.parse(localStorage.getItem("allMockTests")) || [];
  let selectedMockTest = localStorage.getItem("selectedMockTest");

  let testIndex = allTests.findIndex(test => test.name === selectedMockTest);

  if (testIndex === -1) {
    alert("Please select/import a mock test first");
    return;
  }

  let questions = allTests[testIndex].questions;
  let box = document.getElementById("fullQuestionEditor");

  let html = `
    <h2>Edit / Delete Questions</h2>
    <h3>${allTests[testIndex].name}</h3>
  `;

  questions.forEach((q, index) => {
    html += `
      <div class="edit-card">
        <h3>Q${index + 1}</h3>

        <textarea id="editQ${index}">${q.question}</textarea>

        <input id="editO${index}_0" value="${q.options[0] || ""}">
        <input id="editO${index}_1" value="${q.options[1] || ""}">
        <input id="editO${index}_2" value="${q.options[2] || ""}">
        <input id="editO${index}_3" value="${q.options[3] || ""}">

        <select id="editAns${index}">
          <option value="">Select Correct Answer</option>
          <option value="0" ${q.answer === 0 ? "selected" : ""}>Option 1</option>
          <option value="1" ${q.answer === 1 ? "selected" : ""}>Option 2</option>
          <option value="2" ${q.answer === 2 ? "selected" : ""}>Option 3</option>
          <option value="3" ${q.answer === 3 ? "selected" : ""}>Option 4</option>
        </select>

        <button onclick="saveQuestionEdit(${testIndex}, ${index})">
          Save Question
        </button>

        <button class="danger" onclick="deleteQuestion(${testIndex}, ${index})">
          Delete Question
        </button>
      </div>
    `;
  });

  box.innerHTML = html;
}

function saveQuestionEdit(testIndex, questionIndex) {
  let allTests = JSON.parse(localStorage.getItem("allMockTests")) || [];

  allTests[testIndex].questions[questionIndex].question =
    document.getElementById(`editQ${questionIndex}`).value;

  allTests[testIndex].questions[questionIndex].options = [
    document.getElementById(`editO${questionIndex}_0`).value,
    document.getElementById(`editO${questionIndex}_1`).value,
    document.getElementById(`editO${questionIndex}_2`).value,
    document.getElementById(`editO${questionIndex}_3`).value
  ];

  let ans = document.getElementById(`editAns${questionIndex}`).value;

  allTests[testIndex].questions[questionIndex].answer =
    ans === "" ? null : Number(ans);

  localStorage.setItem("allMockTests", JSON.stringify(allTests));

  alert("Question updated successfully");
}

function deleteQuestion(testIndex, questionIndex) {
  let allTests = JSON.parse(localStorage.getItem("allMockTests")) || [];

  if (confirm("Delete this question?")) {
    allTests[testIndex].questions.splice(questionIndex, 1);
    localStorage.setItem("allMockTests", JSON.stringify(allTests));
    showFullQuestionEditor();
    alert("Question deleted");
  }
}

function exportResults() {
  let results = JSON.parse(localStorage.getItem("studentResults")) || [];

  if (results.length === 0) {
    alert("No results found");
    return;
  }

  let csv = "Name,Total Questions,Attempted,Correct,Wrong,Score,Date\n";

  results.forEach(result => {
    csv += `${result.name},${result.totalQuestions},${result.attempted},${result.correct},${result.wrong},${result.score},${result.date}\n`;
  });

  let blob = new Blob([csv], { type: "text/csv" });
  let url = URL.createObjectURL(blob);
  let a = document.createElement("a");

  a.href = url;
  a.download = "student_results.csv";
  a.click();

  URL.revokeObjectURL(url);
}

updateCount();
loadAdminStats();
loadAdminCharts();