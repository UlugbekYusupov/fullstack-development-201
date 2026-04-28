import express from 'express';
const router = express.Router();

// Savatdagi barcha mahsulotlarni ko'rish
router.get('/', getCartItems);

// Savatga yangi mahsulot qo'shish
router.post('/add', addToCart);

// Savatdagi mahsulot sonini yangilash (masalan, +1 yoki -1)
router.put('/update/:id', updateCartItem);

// Savatdan bitta mahsulotni o'chirish
router.delete('/remove/:id', removeFromCart);

// Savatni butunlay tozalash
router.delete('/clear', clearCart);

export default router;
