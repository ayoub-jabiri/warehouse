import Category from "@/app/_back-end/_models/category.model";
import { type CategoryI } from "@/app/_types/Category";

export const getCategories = async (): Promise<CategoryI[]> =>
    await Category.find();

export const getCategoryById = async (id: string): Promise<CategoryI | null> =>
    await Category.findById(id);

export const getCategoryByName = async (
    name: string
): Promise<CategoryI | null> => await Category.findOne({ name });

export const addNewCategory = async (
    categoryData: CategoryI
): Promise<CategoryI> => await Category.create(categoryData);
