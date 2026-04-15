let total = 0;

function login() {
  document.getElementById("login").style.display = "none";
  document.getElementById("app").style.display = "block";
}

function show(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

function addItem(name, price) {
  let li = document.createElement("li");
  li.textContent = name + " - $" + price;

  document.getElementById("cart").appendChild(li);

  total += price;
  document.getElementById("total").textContent = total;
}

function checkout() {
  let order = {
    name: clientName.value,
    phone: clientPhone.value,
    address: clientAddress.value,
    payment: payment.value,
    total: total
  };

  db.collection("orders").add(order);

  document.getElementById("tracking").innerHTML =
    "Driver assigned 🚚";

  startTracking();
}
