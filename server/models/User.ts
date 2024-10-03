import mongoose, { Schema, model } from "mongoose";
interface UserDetails {
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    // role: string;
    accountType: string;
    password: string;
    avatar?: string;
    isActive: boolean;
    isTokenVerified: boolean;
    isAccountBadgeVerified: boolean;
    lastLogin: Date;
    resetPasswordToken: string;
    resetPasswordExpiresAt: Date;
    verificationToken: string;
    verificationTokenExpiresAt: Date;
}

const userSchema = new Schema<UserDetails>({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    // role: {
    //     type: String,
    //     required: true
    // },
    accountType: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: '/images/blank-profile-picture.png'
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    isTokenVerified: {
        type: Boolean,
        default: false,
    },
    isAccountBadgeVerified: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
}, {timestamps: true})

export const User = mongoose.model<UserDetails>('User', userSchema);