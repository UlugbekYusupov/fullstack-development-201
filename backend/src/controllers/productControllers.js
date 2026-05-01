import { products } from "../data/db.js";
import { v4 as uuidv4 } from "uuid";

export const listProducts = (req, res) => {
  return res.status(200).json({ message: "Products retrieved successfully", products });
};

export const createProduct = (req, res) => {
  const { name, description, price, stock, imageUrl, category } = req.body;
  if (!name || !description || !price || !stock || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newProduct = {
    id: uuidv4(),
    name,
    description,
    price,
    stock,
    imageUrl,
    category,
    created_at: new Date(),
    updated_at: new Date(),
  };
  products.push(newProduct);
  return res.status(201).json({ message: "Product created successfully", product: newProduct });
};

export const getSingleProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  return res.status(200).json({ message: "Product retrieved successfully", product });
};

export const updateProduct = (req, res) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const { name, description, price, stock, imageUrl, category } = req.body;

  if (name) product.name = name;
  if (description) product.description = description;
  if (price) product.price = price;
  if (stock) product.stock = stock;
  if (imageUrl) product.imageUrl = imageUrl;
  if (category) product.category = category;

  product.updated_at = new Date();

  return res.status(200).json({ message: "Product updated successfully", product });
};

export const deleteProduct = (req, res) => {
  const id = req.params.id;
  const objectIndex = products.findIndex((p) => p.id === id);
  if (objectIndex === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products.splice(objectIndex, 1);
  return res.status(200).json({ message: "Product deleted successfully" });
};
