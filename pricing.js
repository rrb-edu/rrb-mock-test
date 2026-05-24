if(!localStorage.getItem("studentName")){

  window.location.href = "login.html";

}
else{

  document.body.style.display = "block";
}

async function buyPremium(){

  try{

    let response = await fetch(
      "https://rrb-mock-test.onrender.com/create-order",
      {
        method: "POST"
      }
    );

    let order = await response.json();

    let options = {

      key: "rzp_test_StELBeW54KuHOD",

      amount: order.amount,

      currency: order.currency,

      name: "RRB EDU",

      description: "Premium Subscription",

      order_id: order.id,

    handler: async function (response){

  let email = localStorage.getItem("studentEmail");

  let verifyResponse = await fetch(
    "https://rrb-mock-test.onrender.com/api/payment/verify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        email: email
      })
    }
  );

  let verifyData = await verifyResponse.json();

  if(verifyData.success === true){

    localStorage.setItem("premiumUser", "true");

    alert("Payment Verified! Premium Activated ✅");

    window.location.href = "dashboard.html";

  } else {

    alert("Payment verification failed ❌");

  }

}