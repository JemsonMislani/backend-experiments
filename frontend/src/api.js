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
