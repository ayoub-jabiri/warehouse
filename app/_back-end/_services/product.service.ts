import Product from "@/app/_back-end/_models/product.model";
import { type ProductI } from "@/app/_types/Product";

export const getAllProducts = async (): Promise<ProductI[]> =>
    await Product.find();

export const getSingleProductById = async (
    id: string
): Promise<ProductI | null> => await Product.findById(id);

export const getSingleProductBySku = async (
    sku: string
): Promise<ProductI | null> => await Product.findOne({ sku });

export const addNewProduct = async (product: ProductI): Promise<ProductI> =>
    await Product.create(product);
