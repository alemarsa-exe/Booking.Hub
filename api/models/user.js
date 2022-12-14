import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    status: {
        type: Boolean,
        default: false,
        required: true
    },

    isAdmin: {
        type: Boolean,
        default: false
    },

    role: {
        type: String,
        default: "User"
    },

    emailToken: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

export default mongoose.model("User", userSchema)