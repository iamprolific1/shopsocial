import mongoose, { Schema, model } from "mongoose";
interface UserDetails {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  accountType: string;
  password: string;
  avatar?: string;
  isActive: boolean;
  isTokenVerified: boolean;
  isAccountVerified: boolean;
  isAccountBadgeVerified: boolean;
  lastLogin: Date;
  resetPasswordToken: string | undefined;
  resetPasswordExpiresAt: Date | undefined;
  verificationToken: string | undefined;
  verificationTokenExpiresAt: Date | number | undefined;
  resendAttempts: number;
}

const userSchema = new Schema<UserDetails>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "/images/blank-profile-picture.png",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isTokenVerified: {
      type: Boolean,
      default: false,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
    isAccountBadgeVerified: {
      type: Boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    resendAttempts: {
      type: Number,
      default: 0,
    }
  },
  { timestamps: true }
);

export const User = mongoose.model<UserDetails>("User", userSchema);
