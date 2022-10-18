import React from "react";
import Navbar from "../../components/navbar/Nabvar";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
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
							<div className="icon"></div>
							<div className="text">
								<h3>Número telefónico</h3>
								<p>8183582000</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Contact;
