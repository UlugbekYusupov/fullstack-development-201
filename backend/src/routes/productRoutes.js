import express from 'express';
const router = express.Router();
import { listProducts, createProduct, getSingleProduct, updateProduct, deleteProduct } from '../controllers/productControllers.js';

router.get("/", listProducts);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;