import express from 'express';
const router = express.Router();
import { addToCart, getCartItems } from '../controllers/cartControllers.js';

router.post("/", addToCart);
router.get("/:userId", getCartItems);
// router.put("/:id", updateCartItem);
// router.delete("/:id", removeCartItem);

export default router;