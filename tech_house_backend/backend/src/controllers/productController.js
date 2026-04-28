import { products } from "../data/db.js";
import { v4 as uuidv4 } from "uuid";

export function listProducts(req, res) {
  return res.status(200).json({count: products.count});
}

export function getSingleProduct(req, res) {
  const { id } = req.params;
  const product = products.find((p) => p.id == id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json(product);
}

export function deleteProduct(req, res) {
  const { id } = req.params;
  const product = products.find((p) => p.id == id);
  const productIndex = products.findIndex((p) => p.id == id);
  if (!product || productIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products.splice(productIndex, 1);
  return res.status(200).json({ message: "Product deleted successfully" });
}

  export function createProduct(req, res) {
    const { name, price, description, stock, category, image_url } = req.body;
    if (!name || !price) {
      return res.status(400).json({ message: "Name and price are required" });
    }
    const newProduct = {
      id: uuidv4(),
      name,
      price,
      description,
      stock,
      category,
      image_url: image_url || "",
      created_at: Date(),
      updated_at: Date(),
    };
    products.push(newProduct);
    return res.status(201).json({ message: "Product created successfully" });
  }

export function updateProduct(req, res) {
  const { id } = req.params;
  const product = products.find((p) => p.id == id);
  const { name, price, description, stock, category, image_url } = req.body;
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }
  product.name = name ?? product.name;
  product.price = price ?? product.price;
  product.description = description ?? product.description;
  product.stock = stock ?? product.stock;
  product.category = category ?? product.category;
  product.image_url = image_url ?? product.image_url;
  product.updated_at = new Date();
  return res.status(200).json({ message: "Product updated successfully" });
}
