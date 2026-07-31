import Movement from "@/app/_back-end/_models/movement.model";
import { MovementI } from "@/app/_types/Movement";
import Product from "@/app/_back-end/_models/product.model";
import { type ProductI } from "@/app/_types/Product";

export const registerMovement = async (
    movementData: MovementI
): Promise<MovementI> => {
    const newMovement = await Movement.create(movementData);

    const product: ProductI = (await Product.findById(movementData.productId))!;

    console.log("Product before movement:", product);

    const quantity: number = +movementData.quantity;

    if (movementData.movementType === "entrance") {
        product.quantity = `${+product.quantity + quantity}`;
        await product.save();
    } else if (movementData.movementType === "exit") {
        product.quantity = `${+product.quantity - quantity}`;
        await product.save();
    }

    return newMovement;
};
