/**
 * E-TechCart v2 - Mock Database
 * 
 * Categories: 'mobile', 'laptop', 'tv', 'appliance'
 */

const products = [
    // Mobiles
    {
        id: 1,
        name: "Iphone 13 Pro",
        category: "mobile",
        price: 69999,
        image: "../images/phone 1.webp",
        description: "Experience the fastest chip ever in a smartphone."
    },
    {
        id: 2,
        name: "Galaxy S24",
        category: "mobile",
        price: 79999,
        image: "../images/phone 2.webp",
        description: "AI-powered camera for professional shots."
    },
    {
        id: 3,
        name: "Pixel 8",
        category: "mobile",
        price: 59999,
        image: "../images/phone 3.webp",
        description: "The helpful phone engineered by Google."
    },
    {
        id: 4,
        name: "OnePlus 12",
        category: "mobile",
        price: 64999,
        image: "../images/phone 4.webp",
        description: "Smooth beyond belief."
    },

    // Laptops
    {
        id: 5,
        name: "MacBook Air M2",
        category: "laptop",
        price: 99999,
        image: "../images/laptop 1.webp",
        description: "Supercharged by M2. Strikingly thin design."
    },
    {
        id: 6,
        name: "Dell XPS 13",
        category: "laptop",
        price: 115000,
        image: "../images/laptop 2.jpg",
        description: "The perfect balance of power and elegance."
    },
    {
        id: 7,
        name: "HP Spectre x360",
        category: "laptop",
        price: 125000,
        image: "../images/laptop 3.jpg",
        description: "Performance that adapts to your lifestyle."
    },
    {
        id: 8,
        name: "Asus ROG Zephyrus",
        category: "laptop",
        price: 145000,
        image: "../images/laptop 4.webp",
        description: "Dominate the game with ultimate power."
    },

    // TVs
    {
        id: 9,
        name: "Sony Bravia 55' 4K",
        category: "tv",
        price: 65000,
        image: "../images/tv 1.webp",
        description: "Lifelike visuals and immersive sound."
    },
    {
        id: 10,
        name: "Samsung QLED 65'",
        category: "tv",
        price: 85000,
        image: "../images/tv 2.webp",
        description: "A billion shades of color with Quantum Dot."
    },
    {
        id: 11,
        name: "LG OLED C3",
        category: "tv",
        price: 120000,
        image: "../images/tv 3.webp",
        description: "Self-lit pixels for perfect black and color."
    },

    // Appliances
    {
        id: 12,
        name: "Dyson V15 Detect",
        category: "appliance",
        price: 45000,
        image: "../images/pr 1.webp",
        description: "Laser reveals microscopic dust."
    },
    {
        id: 13,
        name: "Philips Air Fryer",
        category: "appliance",
        price: 9999,
        image: "../images/pr 2.webp",
        description: "Great tasting fries with up to 90% less fat."
    },
    {
        id: 14,
        name: "LG Washing Machine",
        category: "appliance",
        price: 32000,
        image: "../images/pr 3.jpg",
        description: "AI DD motor for intelligent fabric care."
    }
];

// Export for usage if using modules, but for vanilla JS we'll just check if 'products' is defined.
if (typeof window !== 'undefined') {
    window.products = products;
}
