if(!localStorage.getItem("studentName")){

  window.location.href = "login.html";

}
else{

  document.body.style.display = "block";

}

function buyPremium(){

  localStorage.setItem("premiumUser", "true");

  alert("Premium Activated Successfully!");

  window.location.href = "dashboard.html";

}