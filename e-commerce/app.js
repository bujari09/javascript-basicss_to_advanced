const products = [
    {
        name: "iPhone 15 Pro",
        price: "€1199",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        badge: "New"
    },
    {
        name: "Samsung Galaxy S24",
        price: "€999",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Google Pixel 8",
        price: "€899",
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "OnePlus 12",
        price: "€799",
        image: "https://images.unsplash.com/photo-1512499617640-c2f999098c01?auto=format&fit=crop&w=400&q=80"
    }
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        ${product.badge ? `<div class="badge">${product.badge}</div>` : ''}
        <img src="${product.image}" alt="${product.name}">
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price}</div>
        <button class="add-cart-btn" onclick="addToCart('${product.name}')">Add to Cart</button>
    `;
    return card;
}

function renderProducts() {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';
    products.forEach(product => {
        productsContainer.appendChild(createProductCard(product));
    });
}

function addToCart(productName) {
    alert(`Added ${productName} to cart!`);
}

window.onload = renderProducts;// This file contains the JavaScript code for the e-commerce application.

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    const products = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 49.99 },
        { id: 3, name: 'Product 3', price: 19.99 },
    ];

    const productContainer = document.getElementById('product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });

    const cart = [];

    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            alert(`${product.name} has been added to your cart.`);
        }
    });
});