import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Register.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Nabvar";

const Register = () => {
	const [credential, setCredential] = useState({
		email: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const navigate = useNavigate()

    const handleChange = (e) => {
        setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleLogin = async e => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" });
        try{
            const res = await axios.post("/auth/register", credential)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
			navigate("/")
        }catch (err){
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
        }
    }

	return (
		<div>
			<Navbar />
			<div className="login">
				<div className="lContainer">
					<input
						type="text"
						placeholder="Nombre"
						id="name"
						onChange={handleChange}
						className="lInput"
					></input>
					<input
						type="text"
						placeholder="Apellido"
						id="surname"
						onChange={handleChange}
						className="lInput"
					></input>
					<input
						type="text"
						placeholder="Correo"
						id="email"
						onChange={handleChange}
						className="lInput"
					></input>
					<input
						type="password"
						placeholder="Contraseña"
						id="password"
						onChange={handleChange}
						className="lInput"
					></input>
					<input
						type="password"
						placeholder="Confirmar contraseña"
						id="password"
						onChange={handleChange}
						className="lInput"
					></input>
					<button disabled={loading} onClick={handleLogin} className="lButton">
						Registrarse
					</button>
					{error && <span>{error.message}</span>}
				</div>
			</div>
		</div>
	);
};


export default Register