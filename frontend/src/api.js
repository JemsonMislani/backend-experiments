const API_URL = 'http://localhost:3001';

export const getProducts = async () => {
    try {
        const res = await fetch(`${API_URL}/products`);
        return res.json();
    } catch (error) {
        console.log('Can`t get products:', error);
        return [];
    }
}

export const getCart = async () => {
    try {
        const res = await fetch(`${API_URL}/cart`);
        return res.json();
    } catch (error) {
        console.error('Can`t get cart:', error);
        return [];
    }
}

export const addToCart = async (productId, quantity) => {
    try {
        const res = await fetch(`${API_URL}/add-to-cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({productId, quantity}),
        });
        return res.json();
    } catch (error) {
        console.log('Add to cart error:', error)
        return { cart: []};
    }
};

export const removeToCart = async (productId) => {
    try {
        const rem = await fetch(`${API_URL}/remove-from-cart`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({productId}),
        });
        return rem.json();
    } catch (error) {
        console.log('Remove failed:', error)
        return { cart: []};
    }
}