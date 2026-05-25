async function loadPayments(){

  let response = await fetch(
    "https://rrb-mock-test.onrender.com/api/admin/payments"
  );

  let data = await response.json();

  document.getElementById("paymentsBox").innerHTML =
    JSON.stringify(data, null, 2);

}

loadPayments();