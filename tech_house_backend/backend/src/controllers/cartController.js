import {cartItems, products} from "../data/db.js";
import { v4 as uuidv4 } from "uuid";

export function viewCartItem(req, res) {
    const userId = req.headers["x-user-id"];
    const userCart = cartItems.find((item) => item.user_id == userId);

    if (!userCart) {
        const newCart = {
            id: uuidv4(),
            user_id: userId,
            products:[],
            quantity:0
        };
        return res.status(200).json(newCart);
    }
    const cartWithProducts = {
        ...userCart,
        products:userCart.products.map((item) => {
            const product = products.find((p) => p.id == item.id);
            return {
                name: product.name,
                price: product.price,
                image_url: product.image_url,
                quantity: item.quantity
            };
        }),
    };
    return res.status(200).json(cartWithProducts)
};
export function addToCart(req, res) {
    const userId = req.headers["x-user-id"];
    const { product_id } = req.body
    const product = products.find((p) => p.id == product_id);

    if (!product){
        return res.status(404).json({message: "Product not found!"});
    }

    if (product.stock < 1){
        return res.status(400).json({message: "Not enough stock"});
    } 
    let existing = cartItems.find((item) => item.user_id == userId);
    if (!existing) {
        existing = {
            id: uuidv4(),
            user_id: userId,
            products:[],
            quantity:0
        };
        cartItems.push(existing);
    }

    const existingProduct = existing.products.find(
        (item) => item.id == product_id
    );
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        existing.products.push({
            id: product_id,
            quantity:1
        });
    }
    existing.quantity = existing.products.reduce(
        (sum, item) => sum + item.quantity,
        0,
    );
    return res.status(200).json({message: "Product added to cart"});
};

export function updateCartItem(req, res) {
    const userId = req.headers["x-user-id"];
    const { product_id, quantity } = req.body;
    const product = products.find((p) => p.id == product_id);

    if (!product){
        return res.status(404).json({message: "Product not found!"});
    }

    if (quantity < 0){
        return res.status(400).json({message: "Quantity cannot be negative"});
    }

    if (product.stock < quantity){
        return res.status(400).json({message: "Not enough stock"});
    }

    let existing = cartItems.find((item) => item.user_id == userId);
    if (!existing) {
        return res.status(404).json({message: "Cart not found"});
    }

    const existingProduct = existing.products.find(
        (item) => item.id == product_id
    );
    if (!existingProduct) {
        return res.status(404).json({message: "Product not in cart"});
    }

    existingProduct.quantity = quantity;
    if (quantity === 0) {
        existing.products = existing.products.filter(item => item.id !== product_id);
    }
    existing.quantity = existing.products.reduce(
        (sum, item) => sum + item.quantity,
        0,
    );
    return res.status(200).json({message: "Cart item updated"});
};
export function removeCartItem(req, res) {
    const userId = req.headers["x-user-id"];
    const { product_id } = req.body;

    let existing = cartItems.find((item) => item.user_id == userId);
    if (!existing) {
        return res.status(404).json({message: "Cart not found"});
    }

    const existingProduct = existing.products.find(
        (item) => item.id == product_id
    );
    if (!existingProduct) {
        return res.status(404).json({message: "Product not in cart"});
    }

    existing.products = existing.products.filter(item => item.id !== product_id);
    existing.quantity = existing.products.reduce(
        (sum, item) => sum + item.quantity,
        0,
    );
    return res.status(200).json({message: "Product removed from cart"});
};
