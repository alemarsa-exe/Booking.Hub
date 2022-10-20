import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Nabvar";
import { AuthContext } from "../../context/AuthContext";
import "./user.css";

const User = () => {
	const { email } = useContext(AuthContext);

	const form = useRef();

	const [credential, setCredential] = useState({
		email: undefined,
		password: undefined,
	});

	const handleChange = (e) => {
		setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.put(`/users/${email._id}`, credential);
			console.log("response");
			console.log(JSON.stringify(response));
			e.target.reset();
		} catch (err) {
			console.log(err);
		}
	};


    const navigate = useNavigate()
	const handleDelete = async () => {
		try {
			const response = await axios.delete(`/users/${email._id}`, credential);
			console.log("response");
			console.log(JSON.stringify(response));
            navigate("/login")
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="user">
			<Navbar />
			<div className="bienvenida">
				<h1 className="pt-5">Hola {email.name}, nos alegra verte</h1>
				<p>Hola, texto de relleno</p>
			</div>
			<div className="container">
				<div className="contactInfo">
					<div className="box">
						<div className="icon">
							<PhoneIcon />
						</div>
						<div className="text">
							<h3>Número de reservaciones</h3>
							<p>2</p>
						</div>
					</div>
					<div className="box">
						<div className="icon">
							<MailIcon />
						</div>
						<div className="text">
							<h3>Reservaciones completadas</h3>
							<p>0</p>
						</div>
					</div>
					<div className="box">
						<div className="icon">
							<MailIcon />
						</div>
						<div className="text">
							<h3>Reservaciones canceladas</h3>
							<p>0</p>
						</div>
					</div>
				</div>
				<div className="contactForm">
					<form ref={form} onSubmit={handleRegister}>
						<h2>Actualizar datos</h2>
						<div className="inputBox">
							<input
								type="text"
								placeholder={email.email}
								id="email"
								onChange={handleChange}
							/>
							<span>Correo electrónico</span>
						</div>
						<div className="inputBox">
							<input type="password" id="password" onChange={handleChange} />
							<span>Nueva contraseña</span>
						</div>
						<div className="inputBox">
							<input
								type="submit"
								className="btn btn-primary"
								style={{ width: "auto" }}
								value="Actualizar datos"
							/>
						</div>
					</form>
				</div>
			</div>
			<div className="despedida">
				<p className="pt-5">
					¿Deseas eliminar tu cuenta?
					<span className="ml-5 remove">
						<button
							type="button"
							class="btn btn-danger remove"
							onClick={handleDelete}
						>
							Eliminar cuenta
						</button>
					</span>
				</p>
			</div>
		</div>
	);
};

export default User;
