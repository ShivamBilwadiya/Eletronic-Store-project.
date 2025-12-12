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
