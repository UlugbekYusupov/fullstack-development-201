import {cart, products} from '../data/db.js';
import { v4 as uuidv4 } from "uuid";

export const addToCart = (req, res) => {
    const {userId, productId, quantity } = req.body;
    const cartItem = {
        id: uuidv4(),
        userId,
        productId,
        quantity
    };
    cart.push(cartItem);
    res.status(201).json(cartItem);
};

export const getCartItems = (req, res) => {
    const userId = req.params.userId;
    if (!userId) {
        return res.status(400).json({ message: "userId is required" });
    }

    const userCartItems = cart.filter(item => item.userId === userId);
    const productsInCart = userCartItems.map(item => {
        const product = products.find(p => p.id === item.productId) || {};
        return {
            ...product,
            quantity: item.quantity
        };
    });
    res.status(200).json(productsInCart);
}

