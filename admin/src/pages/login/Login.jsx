import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import Navbar from "../../components/navbar/Nabvar";

const Login = () => {
	const [credential, setCredential] = useState({
		email: undefined,
		password: undefined,
	});

	const { loading, error, dispatch } = useContext(AuthContext);

	const navigate = useNavigate();

	const handleChange = (e) => {
		setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		dispatch({ type: "LOGIN_START" });
		try {
			const res = await axios.post("/auth/login", credential);
			if(res.data.isAdmin){
				dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
				navigate("/");
			}else {
				dispatch({ type: "LOGIN_FAILURE", payload: { message: "You are not allowed"} });
			}
		} catch (err) {
			dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
		}
	};

	return (
		<div>
			<div className="login">
				<div className="lContainer">
					<input
						type="text"
						placeholder="Correo"
						id="email"
						onChange={handleChange}
						className="lInput"
					></input>
					<input
						type="password"
						placeholder="password"
						id="password"
						onChange={handleChange}
						className="lInput"
					></input>
					<button disabled={loading} onClick={handleLogin} className="lButton">
						Iniciar Sesión
					</button>
					{error && <span>{error.message}</span>}
				</div>
			</div>
		</div>
	);
};

export default Login;
