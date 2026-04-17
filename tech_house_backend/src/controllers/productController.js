import {products} from "../data/db.js";

export function listProducts(req, res){
    return res.status(200).json(products);
}

export function getSingleProduct(req, res){}

export function createProduct(req, res){}

export function updateProduct(req, res){}

export function deleteProduct(req, res){}
