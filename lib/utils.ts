import { cn } from './classnames'; // Utility for conditional class names

/
 * Utility functions for luxury FashionTV cosmetics application
 * 
 * This module contains various utility functions and formatters used across
 * the luxury FashionTV cosmetics application. The focus is on providing an
 * elegant and high-end experience that reflects our brand's luxury fashion identity.
 */

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
}

/
 * Formats the price for display in the luxury FashionTV cosmetics application.
 * 
 * @param price - The price value to format.
 * @returns A string representing the formatted price with currency symbol.
 */
export function formatPrice(price: number): string {
    return $${price.toFixed(2)};
}

/
 * Formats the product description to ensure it meets the luxury FashionTV cosmetics branding.
 * 
 * @param description - The raw product description.
 * @returns A string representing the elegantly formatted product description.
 */
export function formatDescription(description: string): string {
    return description.charAt(0).toUpperCase() + description.slice(1);
}

/
 * Generates a class name string based on the provided base name and conditional flags.
 * 
 * @param base - The base class name string.
 * @param conditions - An object containing conditional class names.
 * @returns A string of class names based on the conditions.
 */
export function classNames(base: string, conditions: Record<string, boolean>): string {
    return cn(base, conditions);
}

/
 * Luxury FashionTV cosmetics specific types and interfaces.
 */
export type { Product };