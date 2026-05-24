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

      handler: function (response){

        localStorage.setItem("premiumUser", "true");

        alert("Payment Successful!");

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