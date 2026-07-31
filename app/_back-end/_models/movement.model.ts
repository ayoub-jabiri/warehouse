import { Schema, model, Document, models } from "mongoose";

interface MovementI extends Document {
    productId?: string;
    quantity: string;
    movementType: string;
}

const movementSchema = new Schema<MovementI>(
    {
        productId: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
            required: true,
        },
        movementType: {
            type: String,
            enum: ["entrance", "exit"],
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform(doc, ret) {
                const { _id, __v, ...rest } = ret;

                return {
                    id: _id.toHexString(),
                    ...rest,
                };
            },
        },
    }
);

export default models.Movement || model<MovementI>("Movement", movementSchema);
