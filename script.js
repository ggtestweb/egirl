document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        const product = event.target.parentElement;
        const productName = product.querySelector("h2").textContent;
        const productPrice = product.querySelector(".price").textContent;

        // You can implement your cart logic here, e.g., adding items to a shopping cart object.
        // For simplicity, we'll just log the selected product.
        console.log(`Added to cart: ${productName} - ${productPrice}`);
    }
});