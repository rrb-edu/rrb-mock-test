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

      key: "rzp_test_St50RswPNPpJ9p",

      amount: order.amount,

      currency: order.currency,

      name: "RRB EDU",

      description: "Premium Subscription",

      order_id: order.id,

      handler: async function (response){

        let studentId = localStorage.getItem("studentId");

        await fetch(
          `https://rrb-mock-test.onrender.com/api/auth/premium/${studentId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              isPremium: true
            })
          }
        );

        localStorage.setItem("premiumUser", "true");

        alert("Payment Successful! Premium Activated.");

        window.location.href = "dashboard.html";

      },

      theme: {
        color: "#3399cc"
      }

    };

    let rzp = new Razorpay(options);

    rzp.open();

  }
  catch(error){

    console.log(error);

    alert("Payment failed");

  }

}