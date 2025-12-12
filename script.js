/**
 * ElectroMart v2 - Main Script
 */

document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    updateCartBadge();

    // Initialize specific page logic
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === 'shop.html' || currentPage === '') { // Adding '' for robustness if root is shop
        initShopPage();
    } else if (currentPage === 'product.html') {
        initProductPage();
    } else if (currentPage === 'cart.html') {
        initCartPage();
    } else if (currentPage === 'index.html') {
        // Index page logic if any specific
    }
});

/* --- Component Rendering --- */

function renderHeader() {
    const headerHTML = `
        <div class="top-bar">
            <div class="container">Free Shipping on Orders Over ₹4999 | 24/7 Support</div>
        </div>
        <div class="container">
            <div class="logo">
                <a href="index.html"><img src="./ChatGPT Image Dec 12, 2025, 03_23_02 PM.png" width = 130px/></a>
            </div>
            <button class="menu-toggle" id="menuToggle"><i class="fas fa-bars"></i></button>
            <nav class="nav-menu" id="navMenu">
                <a href="index.html" class="nav-link">Home</a>
                <a href="shop.html?category=mobile" class="nav-link">Mobiles</a>
                <a href="shop.html?category=laptop" class="nav-link">Laptops</a>
                <a href="shop.html?category=tv" class="nav-link">TVs</a>
                <a href="shop.html?category=appliance" class="nav-link">Appliances</a>
                <a href="shop.html" class="nav-link">All Products</a>
            </nav>
            <div class="header-icons">
                <a href="cart.html" class="cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                    <span class="cart-badge" id="cartBadge">0</span>
                </a>
            </div>
        </div>
    `;

    const headerElement = document.createElement('header');
    headerElement.classList.add('main-header');
    headerElement.innerHTML = headerHTML;
    document.body.prepend(headerElement);

    // Mobile Menu Logic
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Active Link Highlighting
    const params = new URLSearchParams(window.location.search);
    const currentCat = params.get('category');
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === 'shop.html' && currentPath.includes('shop.html') && !currentCat) {
            // 'All Products' case
            if (link.textContent === 'All Products') link.classList.add('active');
        } else if (link.getAttribute('href').includes(currentCat) && currentCat) {
            link.classList.add('active');
        } else if (link.getAttribute('href') === 'index.html' && currentPath.includes('index.html')) {
            link.classList.add('active');
        }
    });
}

function renderFooter() {
    const footerHTML = `
        <div class="container footer-grid">
            <div class="footer-col">
                <h3>About E-TechCart</h3>
                <p>Leading the way in consumer electronics. delivering the latest tech right to your doorstep.</p>
            </div>
            <div class="footer-col">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>Contact Us</h3>
                <ul>
                    <li><i class="fas fa-envelope"></i> support@etechcart.com</li>
                    <li><i class="fas fa-phone"></i> +91 98765 43210</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 E-TechCart . All rights reserved.</p>
        </div>
    `;
    const footerElement = document.createElement('footer');
    footerElement.innerHTML = footerHTML;
    document.body.appendChild(footerElement);
}
/* --- Page Specific Logic --- */

function initShopPage() {
    const params = new URLSearchParams(window.location.search);
    const categoryFilter = params.get('category');

    let displayProducts = window.products; // From data.js

    const container = document.querySelector('.product-grid');
    const title = document.querySelector('#pageTitle');

    if (categoryFilter) {
        displayProducts = displayProducts.filter(p => p.category === categoryFilter);
        if (title) title.textContent = categoryFilter.charAt(0).toUpperCase() + categoryFilter.slice(1) + 's';
    } else {
        if (title) title.textContent = 'All Products';
    }

    if (!container) return; // Guard clause
    container.innerHTML = ''; // Clear loading placeholder

    if (displayProducts.length === 0) {
        container.innerHTML = '<p>No products found.</p>';
        return;
    }

    displayProducts.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

function createProductCard(product) {
    const article = document.createElement('article');
    article.className = 'product-card';
    article.innerHTML = `
        <a href="product.html?id=${product.id}">
            <img src="${product.image}" alt="${product.name}" class="product-image">
        </a>
        <div class="product-info">
            <span class="product-category">${product.category}</span>
            <a href="product.html?id=${product.id}">
                <h3 class="product-title">${product.name}</h3>
            </a>
            <p class="product-price">₹${product.price.toLocaleString()}</p>
            <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `;
    return article;
}

function initProductPage() {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const product = window.products.find(p => p.id === productId);

    const container = document.getElementById('productDetail');
    if (!container) return;

    if (!product) {
        container.innerHTML = '<div class="container"><p>Product not found.</p></div>';
        return;
    }

    // Update page title
    document.title = ⁠ ${product.name} - ElectroMart ⁠;

    container.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; align-items: center;">
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: var(--shadow);">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 8px;">
            </div>
            <div>
                <span style="background: var(--primary-color); color: white; padding: 5px 10px; border-radius: 20px; font-size: 0.8rem; text-transform: uppercase;">${product.category}</span>
                <h1 style="font-size: 2.5rem; margin: 15px 0;">${product.name}</h1>
                <p style="font-size: 2rem; color: var(--primary-color); font-weight: bold; margin-bottom: 20px;">₹${product.price.toLocaleString()}</p>
                <p style="font-size: 1.1rem; color: #555; margin-bottom: 30px; line-height: 1.8;">${product.description}</p>
                
                <div style="display: flex; gap: 15px;">
                    <button class="btn" onclick="addToCart(${product.id})" style="padding: 15px 40px; font-size: 1.1rem;">Add to Cart</button>
                    <button class="btn btn-outline" style="padding: 15px 20px;"><i class="far fa-heart"></i></button>
                </div>

                <div style="margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px;">
                    <p><strong><i class="fas fa-check-circle" style="color: green;"></i> In Stock</strong></p>
                    <p style="margin-top: 10px;"><i class="fas fa-truck"></i> Free Delivery available</p>
                </div>
            </div>
        </div>
    `;
}

/* --- Cart Logic --- */

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = window.products.find(p => p.id === productId);

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    alert(⁠ ${product.name} added to cart! ⁠);
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartBadge');
    if (badge) badge.textContent = totalItems;
}

function initCartPage() {
    const cartContainer = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty. <a href="shop.html">Start Shopping</a></p>';
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }

    renderCartItems(cart);
}

function renderCartItems(cart) {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.style.borderBottom = '1px solid #eee';
        div.style.padding = '15px 0';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';

        div.innerHTML = `
            <div style="display:flex; align-items:center; gap:15px;">
                <img src="${item.image}" style="width:80px; height:80px; object-fit:cover; border-radius:4px;">
                <div>
                    <h4>${item.name}</h4>
                    <p>₹${item.price.toLocaleString()}</p>
                </div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <button onclick="updateQuantity(${item.id}, -1)" class="btn btn-secondary" style="padding:5px 10px;">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)" class="btn btn-secondary" style="padding:5px 10px;">+</button>
                <button onclick="removeFromCart(${item.id})" class="btn btn-outline" style="padding:5px 10px; margin-left:10px;"><i class="fas fa-trash"></i></button>
            </div>
        `;
        cartContainer.appendChild(div);
    });

    const totalElement = document.getElementById('cartTotal');
    if (totalElement) totalElement.textContent = '₹' + total.toLocaleString();
}

// Global scope for onclick handlers
window.addToCart = addToCart;

window.updateQuantity = function (id, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartItems(cart); // Rerender
};

window.removeFromCart = function (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(i => i.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    renderCartItems(cart);
}