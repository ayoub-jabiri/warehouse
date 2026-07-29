import { Schema, model, Document, models } from "mongoose";

interface ProductI extends Document {
    name: string;
    description: string;
    sku: string;
    category: string;
    price: string;
    quantity: string;
}

const productSchema = new Schema<ProductI>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        sku: {
            type: String,
            required: true,
            unique: true,
        },
        category: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        quantity: {
            type: String,
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

export default models.Product || model<ProductI>("Product", productSchema);
