const cartItems = document.getElementById('cart-items');

function addToCart(name, price) {
  const item = document.createElement('li');
  item.textContent = `${name} - ₹${price}`;
  cartItems.appendChild(item);
}