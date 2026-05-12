import express from 'express';
import {viewCartItem, addToCart, updateCartItem, removeCartItem} from "../controllers/cartController.js";
const router = express.Router();

// Savatdagi barcha mahsulotlarni ko'rish
router.get('/', viewCartItem);

// Savatga yangi mahsulot qo'shish
router.post('/', addToCart);

// Savatdagi mahsulot sonini yangilash (masalan, +1 yoki -1)
router.put('/:id', updateCartItem);

// Savatdan bitta mahsulotni o'chirish
router.delete('/:id', removeCartItem);

// Savatni butunlay tozalash
//router.delete('/clear', clearCart);

export default router;
