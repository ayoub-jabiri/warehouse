import User from "@/app/_back-end/_models/user.model";
import { type UserI } from "@/app/_types/User";

export const registerUser = async (user: UserI) => await User.create(user);
