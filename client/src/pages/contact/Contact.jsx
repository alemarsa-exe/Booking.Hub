import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import React, { useRef } from "react";
import Navbar from "../../components/navbar/Nabvar";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {


	//Para el mail
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"YOUR_SERVICE_ID",
				"YOUR_TEMPLATE_ID",
				form.current,
				"YOUR_PUBLIC_KEY"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};


	return (
		<div>
			<Navbar />
			<section className="contact">
				<div className="content">
					<h2>Contáctanos</h2>
					<p>
						¿Tienes algún problema o quieres dejar una recomendación?
						<br />
						Tu opinión es importante, háznosla saber.
					</p>
				</div>
				<div className="container">
					<div className="contactInfo">
						<div className="box">
							<div className="icon">
								<PhoneIcon/>
							</div>
							<div className="text">
								<h3>Correo electrónico</h3>
								<p>ggarciab@tec.mx</p>
							</div>
						</div>
						<div className="box">
							<div className="icon">
								<MailIcon/>
							</div>
							<div className="text">
								<h3>Número telefónico</h3>
								<p>8183582000</p>
							</div>
						</div>
					</div>
					<div className="contactForm">
						<form ref={form} onSubmit={sendEmail}>
							<h2>Enviar correo</h2>
							<div className="inputBox">
								<input type="text" name="user_name" required="required" />
								<span>Nombre completo</span>
							</div>
							<div className="inputBox">
								<input type="text" name="user_email" required="required" />
								<span>Correo electrónico</span>
							</div>
							<div className="inputBox">
								<textarea type="text" name="message" required="required" />
								<span>Ingrese su mensaje...</span>
							</div>
							<div className="inputBox">
								<input type="submit" value="Enviar" />
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
