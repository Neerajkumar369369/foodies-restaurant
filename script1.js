let cart = [];
let total = 0;

function addCart(name, price) {
    cart.push({ name, price });
    total += price;

    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
        <li>
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">❌</button>
        </li>`;
    });

    totalPrice.innerHTML = total;
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function darkMode(){
    document.body.classList.toggle("dark");
}

function searchFood() {
    let food = document.getElementById("search").value.toLowerCase();

    if (food === "pizza") {
        window.location.href = "menu.html";
    } else if (food === "burger") {
        alert("Burger Available");
    } else if (food === "pasta") {
        alert("Pasta Available");
    } else {
        alert("Food Not Found");
    }
}