function showLogin(){

  document.getElementById("loginForm").style.display = "block";

  document.getElementById("signupForm").style.display = "none";

  document.getElementById("loginTab").classList.add("active");

  document.getElementById("signupTab").classList.remove("active");

}

function showSignup(){

  document.getElementById("loginForm").style.display = "none";

  document.getElementById("signupForm").style.display = "block";

  document.getElementById("signupTab").classList.add("active");

  document.getElementById("loginTab").classList.remove("active");

}

/* =========================
   SIGNUP
========================= */

async function signupUser(){

  let name =
    document.getElementById("signupName").value;

  let email =
    document.getElementById("signupEmail").value;

  let password =
    document.getElementById("signupPassword").value;

  if(name === "" || email === "" || password === ""){
    alert("Please fill all fields");
    return;
  }

  try{

    let response = await fetch(
      "http://localhost:5000/api/auth/signup",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name,
          email,
          password
        })

      }
    );

    let data = await response.json();

    alert(data.message);

    if(response.ok){
      showLogin();
    }

  }
  catch(error){

    console.log(error);

    alert("Signup failed");

  }

}

/* =========================
   LOGIN
========================= */

async function loginUser(){

  let email =
    document.getElementById("loginEmail").value;

  let password =
    document.getElementById("loginPassword").value;

  try{

    let response = await fetch(
      "http://localhost:5000/api/auth/login",
      {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          email,
          password
        })

      }
    );

    let data = await response.json();

    if(response.ok){
     console.log(data);
      localStorage.setItem("token", data.token);
      localStorage.setItem( "studentName", data.student.name);
      localStorage.setItem("premiumUser", String(data.student.isPremium));
      localStorage.setItem("role", data.student.role);
 window.location.href = "dashboard.html";

    }
    else{

      alert(data.message);

    }

  }
  catch(error){

    console.log(error);

    alert("Login failed");

  }

}