import express from 'express';
import {listProducts, getSingleProduct, createProduct, updateProduct, deleteProduct} from "../controllers/productController.js";
const router = express.Router();

router.get('/', listProducts)   

router.get('/:id', getSingleProduct)

router.post('/', createProduct)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

export default router;

