             THIS IS OUR SNW GROUP PROJECT

# E-TechCart v2

A modern, responsive e-commerce website built with vanilla HTML, CSS, and JavaScript.

## Features

- **Dynamic Navigation:** Header and Footer are rendered dynamically, ensuring consistency across all pages.
- **Unified Product Listing:** A single `shop.html` page handles all product categories (Mobiles, Laptops, TVs, Appliances) via URL filtering.
- **Client-Side Cart:** Fully functional shopping cart that persists items using `localStorage`.
- **Responsive Design:** Optimized for Desktops, Tablets, and Mobile devices with a custom hamburger menu.
- **Centralized Data:** All product data is stored in `data.js`, making it easy to add or update items without touching HTML.

## Setup & Usage

Since this project uses client-side technologies, no backend server is required.

1.  **Clone or Download** the repository.
2.  **Open `index.html`** in any modern web browser.
3.  **Start Shopping!**

## File Structure

- **`index.html`**: The main landing page with a hero section and featured highlights.
- **`shop.html`**: The product catalog. Filters content based on the `?category=` URL parameter.
- **`product.html`**: Dynamic product detail page. Loads content based on the `?id=` URL parameter.
- **`cart.html`**: Manages selected items, quantity adjustments, and total calculation.
- **`script.js`**: Contains all logic for routing, component rendering, and cart management.
- **`data.js`**: Contains the mock database of products.
- **`style.css`**: Global styles, CSS variables, and responsive media queries.

## Customization

To add new products, simply edit `data.js`:

```javascript
{
    id: 15,
    name: "New Product",
    category: "mobile",
    price: 49999,
    image: "path/to/image.jpg",
    description: "Product description here."
}
```

## License

Free to use for educational and personal projects.
