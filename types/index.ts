export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    category: Category; // Category of the product (e.g., skincare, makeup)
    imageUrl: string; // URL of the product image
    available: boolean; // Availability status of the product
}

export interface Category {
    id: string; // Unique identifier for the category
    name: string; // Name of the category (e.g., "Lipstick", "Foundation")
}

export interface Customer {
    id: string; // Unique identifier for the customer
    name: string; // Customer's name
    email: string; // Customer's email address
    phone?: string; // Optional phone number of the customer
    address: Address; // Shipping address of the customer
}

export interface Address {
    street: string; // Street address
    city: string; // City
    state: string; // State
    zipCode: string; // ZIP code
    country: string; // Country
}

export interface Order {
    id: string; // Unique identifier for the order
    customerId: string; // ID of the customer who placed the order
    products: Product[]; // List of products included in the order
    totalAmount: number; // Total amount of the order
    orderDate: Date; // Date when the order was placed
    status: OrderStatus; // Current status of the order
}

export enum OrderStatus {
    Pending = "Pending", // Order has been placed but not processed yet
    Shipped = "Shipped", // Order has been shipped
    Delivered = "Delivered", // Order has been delivered to the customer
    Canceled = "Canceled" // Order has been canceled
}

export interface Review {
    id: string; // Unique identifier for the review
    productId: string; // ID of the product being reviewed
    customerId: string; // ID of the customer who wrote the review
    rating: number; // Rating given by the customer (1 to 5)
    comment: string; // Review comment
    reviewDate: Date; // Date when the review was submitted
}

/
 * Represents the luxury FashionTV cosmetics brand's product catalog.
 * This interface is used to manage the products offered by luxury FashionTV cosmetics,
 * ensuring they reflect the high-end, luxury standards of the fashion industry.
 */
export interface Catalog {
    products: Product[]; // List of products in the luxury FashionTV cosmetics catalog
    categories: Category[]; // List of product categories
}

/
 * Represents the customer database for luxury FashionTV cosmetics.
 * This interface is used for managing customer information and their orders.
 */
export interface CustomerDatabase {
    customers: Customer[]; // List of customers
    orders: Order[]; // List of orders placed by customers
}