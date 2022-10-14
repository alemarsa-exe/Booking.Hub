import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js";
import User from "../models/user.js";
import nodemailer from "nodemailer"
import user from "../models/user.js";
import crypto from "crypto";


// -----------Users------------


var transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "booking.hub.Soporte@gmail.com",
		pass: "rlohhfgzuywdnzjp",
	},
	tls: {
		rejectUnauthorized: false,
	},
});


//CREATE
export const createUser = async (req, res, next) => {
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        //Por si quiero pasar todo de una
        //const newAdmin = new admin(req.body)

        //Si quiero hacer variable los parámetros 
        const newUser = new User({
            /*name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: hash,
            status: req.body.status,
            isAdmin: req.body.isAdmin,
            role: req.body.role,*/
            ...req.body,
            password: hash,
            emailToken: crypto.randomBytes(32).toString('hex'),
        });

        var mailOptions = {
            from: ' "Verifica tu email" <booking.hub.Soporte@gmail.com>',
            to: req.body.email,
            subject: 'Booking.Hub -verifica tu email',
            html: ` <h2>  ¡${newUser.name}! Gracias por registrarte</h2>
                    <h4> Por favor verifica tu dirección de correo electrónico para continuar </h4>
                    <a href="http://0.0.0.0:8800/api/users/verify/email?token=${newUser.emailToken}">Verifica tu email</a>`
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error)
            }
            else{
                console.log("Verificación enviada a tu correo")
            }
        })

        await newUser.save()
        res.status(200).send("User has been created.")
        //res.redirect('/login')
    } catch (err) {
        next(err)
    }
};


//LOGIN
export const loginUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) return next(createError(404, "User not found."))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username"))
        if(!user.status) return next(createError(403, "Please confirm your email"))

        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT)

        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json({ details: {...otherDetails}, isAdmin });
    } catch (err) {
        next(err)
    }
}