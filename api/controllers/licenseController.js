import License from "../models/license.js";
import Resource from "../models/resource.js"

//CREATE ORIGINAL

/*
export const createDevice = async (req, res, next) => {
    const newDevice = new Device(req.body)

    try {
        const savedDevice = await newDevice.save()
        res.status(200).json(savedDevice)
    } catch (err) {
        next(err)
    }
}
*/
//CREATE
export const createLicense = async (req, res, next) => {
    //const newLab = new labModel(req.body)
    let seqId
    let newLicense = new License(req.body)


    try {

        Resource.findOneAndUpdate(
            { id: "autoval" },
            { "$inc": { "seq": 1 } },
            { new: true }, (err, cd) => {
                if (cd == null) {
                    const newResource = new Resource({ id: "autoval", seq: 1 })
                    newResource.save()
                    seqId = 1;
                } else {
                    seqId = cd.seq
                }
                newLicense = new License({
                    ...req.body
                })
                newLicense.save()
            }
        )
        //res.status(200).json(updatedDevice)
        

        res.status(200).json(newLicense)
    } catch (err) {
        next(err)
    }
}




//UPDATE
export const updateLicense = async (req, res, next) => {
    try {
        const updatedLicense = await License.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedLicense)
    } catch (err) {
        next(err)
    }
}


//DELETE
export const deleteLicense = async (req, res, next) => {
    try {
        await License.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("License has been deleted.")
    } catch (err) {
        next(err)
    }
}


//GET
export const getLicense = async (req, res, next) => {
    try {
        const license = await License.findById(
            req.params.id
        );
        res.status(200).json(license)
    } catch (err) {
        next(err)
    }
}


//GET ALL
export const getAllLicenses = async (req, res, next) => {
    try {
        const Licenses = await License.find();
        res.status(200).json(Licenses)
    } catch (err) {
        next(err)
    }
}