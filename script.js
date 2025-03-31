
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  const taille = document.getElementById('taille').value;
  const quantite = parseInt(document.getElementById('quantite').value);

  const existing = cart.find(item => item.name === name && item.taille === taille);
  if (existing) {
    existing.quantite += quantite;
  } else {
    cart.push({ name, price, taille, quantite });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Ajouté au panier !");
}

function loadCart() {
  const tbody = document.querySelector("#panier-table tbody");
  const totalEl = document.getElementById("cart-total");
  tbody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.taille}</td>
      <td>${item.quantite}</td>
      <td>${(item.price * item.quantite).toFixed(2)}€</td>
      <td><button onclick="removeFromCart(${index})">Supprimer</button></td>
    `;
    tbody.appendChild(tr);
    total += item.price * item.quantite;
  });
  totalEl.textContent = total.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCart();
}

if (window.location.href.includes("panier.html")) {
  document.addEventListener("DOMContentLoaded", loadCart);
}
