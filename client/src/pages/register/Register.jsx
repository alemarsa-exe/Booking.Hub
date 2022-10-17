import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Nabvar";


import { useRef } from "react";
import {
	faCheck,
	faTimes,
	faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Register = () => {
	
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
	const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


	const [credential, setCredential] = useState({
		name: undefined,
		surname: undefined,
		email: undefined,
		password: undefined,
	});
	const [errors, setErrors] = useState({})
	const [isSubmit, setIsSubmit] = useState(false)
	const [mensaje, setMensaje] = useState("")

	const [validEmail, setValidEmail] = useState(false)
	const [validPassword, setValidPassword] = useState(false)

	const navigate = useNavigate()

    const handleChange = (e) => {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleRegister = async e => {
        e.preventDefault()
		setErrors(validate(credential))
		setIsSubmit(true)
        try{
				const response = await axios.post("/auth/register", credential)
				console.log("response")
				console.log(JSON.stringify(response))
				

				navigate("/login");
			
        }catch (err){
            console.log(err)
			setMensaje("Ingresa datos válidos")
        }
    }

	useEffect(()=> {
		console.log(errors)
		if(Object.keys(errors).length === 0 && isSubmit){
			console.log(errors)
		}
	}, [errors])

	//Email
	useEffect(()=> {
		const result = regex.test(credential.email);
		console.log("resultado de email")
		console.log(result)
		setValidEmail(result)
	},[validEmail] )

	const validate = (values) => {
		const errors = {}
		if(!values.name) {
			errors.name = "El nombre es requerido"
		}
		if(!values.surname) {
			errors.surname = "El apellido es requerido"
		}
		if(!values.email) {
			errors.email = "El correo es requerido"
		} else if (!regex.test(values.email)) {
			errors.email = "Ingresa un correo válido";
		}
		if(!values.password) {
			errors.password = "La contraseña es requerida"
		} else if (!PWD_REGEX.test(values.password)) {
			errors.password = "La contraseña debe ser válida con una mínuscula, mayúscula, número y caracter especial"
		}
		if(values.password != values.password2) {
			errors.password2 = "Las contraseña deben coincidir"
		}
		return errors
	}

	return (
		<div>
			<Navbar />
			<div className="login">
				<div className="lContainer">
					{mensaje && <h3>{mensaje}</h3>}
					<h5>Nombre</h5>
					<input
						type="text"
						placeholder="Nombre"
						id="name"
						onChange={handleChange}
						className="lInput"
					></input>
					<p className="p">{errors.name}</p>

					<h5>Apellido</h5>
					<input
						type="text"
						placeholder="Apellido"
						id="surname"
						onChange={handleChange}
						className="lInput"
					></input>
					<p className="p">{errors.surname}</p>

					<h5>Correo</h5>
					<input
						type="text"
						placeholder="Correo"
						id="email"
						onChange={handleChange}
						className="lInput"
					></input>
					<p className="p">{errors.email}</p>

					<h5>Contraseña</h5>
					<input
						type="password"
						placeholder="Contraseña"
						id="password"
						onChange={handleChange}
						className="lInput"
					></input>
					<p className="p">{errors.password}</p>

					<h5>Confirmar contraseña</h5>
					<input
						type="password"
						placeholder="Confirmar contraseña"
						id="password2"
						onChange={handleChange}
						className="lInput"
					></input>
					<p className="p">{errors.password2}</p>
					<button onClick={handleRegister} className="lButton">
						Registrarse
					</button>
					<h6>
						¿Ya tienes una cuenta?
						<Link to="/login">
							<span className="inicia">Inicia Sesión</span>
						</Link>
					</h6>
				</div>
			</div>
		</div>
	);

};

export default Register;
