import mongoose from "mongoose";

const licenceSchema = new mongoose.Schema({

    resID: {
        type: Number
    },

    name: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    version: {
        type: String,
        required: true
    },
    
    expireDate: {
        type: Number,
        required: true
    },

    images: {
        type: String,
        required: true
    }//,

    //unavailableDates: [{ type: Date }]
});

//export default mongoose.model("Device", deviceSchema)

const License = mongoose.model("License", licenceSchema)

export default License