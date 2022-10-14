import User from "../models/user.js";


//UPDATE
export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedUser)
    } catch (err) {
        next(err)
    }
}


//DELETE
export const deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(
            req.params.id,
        );
        res.status(200).json("User has been deleted.")
    } catch (err) {
        next(err)
    }
}


//GET
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(
            req.params.id
        );
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}


//GET ALL
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}

export const verifyEmail = async (req, res, next) => {
    const token = req.query.token
    try{
        console.log(token)
        const user = await User.findOne({ emailToken: token })
        if(user){
            user.emailToken = "null"
            user.status = true
            await user.save()
            res.send("Email verificado")
        } else {
            console.log("Email no verificado")
            res.send("Email no verificado");
        }
    }catch (err) {
        next(err)
    }
}