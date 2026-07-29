import { Schema, model, Document, models } from "mongoose";

interface CategoryI extends Document {
    name: string;
    description: string;
}

const categorySchema = new Schema<CategoryI>(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
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

export default models.Category || model<CategoryI>("Category", categorySchema);
