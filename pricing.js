function buyPremium(){

  localStorage.setItem("premiumUser", "true");

  alert("Premium Activated Successfully!");

  window.location.href = "dashboard.html";

}