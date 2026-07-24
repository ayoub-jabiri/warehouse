import mongoose from "mongoose";

const DATABASE_URL: string = process.env.DATABASE_URL!;

export async function dbConnect() {

    console.log("###############");
    console.log(DATABASE_URL);
    console.log("###############");
    

    try {
        await mongoose.connect(DATABASE_URL);

        console.log("Database Connected!");
    } catch (error) {
        console.log(error);
    }
}
