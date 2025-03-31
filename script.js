
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartDisplay();
}

function updateCartDisplay() {
  document.getElementById("cart-count").innerText = cart.length;
  const list = document.getElementById("cart-list");
  const total = document.getElementById("cart-total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price.toFixed(2)}€`;
    list.appendChild(li);
    sum += item.price;
  });
  total.innerText = sum.toFixed(2);
}

function toggleCart() {
  const section = document.getElementById("cart-section");
  section.style.display = section.style.display === "none" ? "block" : "none";
}
