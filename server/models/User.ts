import mongoose, { Schema, model } from "mongoose";
interface UserDetails {
    name: string;
    username: string;
    email: string;
    role: string;
    accountType: string;
    marketType: string;
    password: string;
    avatar?: string;
}

const userSchema = new Schema<UserDetails>({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    accountType: {
        type: String,
        required: true
    },
    marketType: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    }
}, {timestamps: true})

export const User = mongoose.model<UserDetails>('User', userSchema);