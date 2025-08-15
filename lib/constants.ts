export const BRAND_NAME = "luxury FashionTV cosmetics";

export const COLORS = {
    PRIMARY: "#FFC0CB", // Pink
    SECONDARY: "#FFFFFF", // White
};

export const FASHION_MESSAGES = {
    WELCOME: "Welcome to luxury FashionTV cosmetics, where elegance meets beauty.",
    SHOP_NOW: "Explore our exquisite range of luxury cosmetics tailored for the fashion-forward.",
    ABOUT: "At luxury FashionTV cosmetics, we believe that every individual deserves to radiate confidence and style. Our products are designed with the finest ingredients to provide a luxurious experience that aligns with the latest fashion trends.",
    CONTACT: "For inquiries, collaborations, or partnerships, please reach out to our team at contact@luxuryfashiontvcosmetics.com.",
};

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string; // e.g., "lipstick", "foundation", "skincare"
    imageUrl: string;
    isFeatured: boolean; // Indicates if the product is part of a luxury collection
}

export interface Configuration {
    currency: string; // e.g., "USD", "EUR"
    defaultLocale: string; // e.g., "en-US"
    socialMedia: {
        instagram: string;
        facebook: string;
        twitter: string;
    };
}

export const CONFIG: Configuration = {
    currency: "USD",
    defaultLocale: "en-US",
    socialMedia: {
        instagram: "https://www.instagram.com/luxuryfashiontvcosmetics",
        facebook: "https://www.facebook.com/luxuryfashiontvcosmetics",
        twitter: "https://twitter.com/luxuryfashiontvcosmetics",
    },
};

// Exporting constants and interfaces for use in the application
export default {
    BRAND_NAME,
    COLORS,
    FASHION_MESSAGES,
    Product,
    Configuration,
    CONFIG,
};