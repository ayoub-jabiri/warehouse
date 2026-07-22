import { Schema, model, Document, models } from "mongoose";

interface UserI extends Document {
    fullname: string;
    email: string;
    password: string;
}

const userschema = new Schema<UserI>(
    {
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
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

export default models.User || model<UserI>("User", userschema);
