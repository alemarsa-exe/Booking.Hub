import React from "react";
import Navbar from "../../components/navbar/Nabvar";
import Footer from "../../components/footer/Footer";
import "./aboutUs.css";
import fondoHub from "../../Images/fondoHub.png";
import fondo1 from "../../Images/hub-ciberseguridad-1.jpg";
import fondo2 from "../../Images/hub-ciberseguridad-2.jpg";
import fondo3 from "../../Images/centro+ciberseguridad.jpeg";
import fondo4 from "../../Images/hub-ciberseguridad-6_0.jpg";
import fondo5 from "../../Images/iot.JPG";
import SearchIcon from "@mui/icons-material/Search";
import WorkIcon from "@mui/icons-material/Work";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const AboutUs = () => {
	return (
		<div>
			<Navbar />
			<div className="fondo">
				<img src={fondoHub} />
			</div>

			<div className="objetivo">
				<span>Con el objetivo de</span> <br />
				<br />
				<h2>
					Brindar soporte para organizaciones que demandan <br />
					salvaguarda en sus redes de información estratégica
				</h2>
				<br />
				<br />
				<span>
					el Hub de Ciberseguridad fue inagurado en 2021, en el Campus Santa Fe
				</span>
			</div>

			<hr className="divider" />
			<div className="lineas">
				<h1 className="heading">Líneas de trabajo</h1>
				<div className="boxContainer">
					<div className="box">
						<SearchIcon />
						<h3>Investigación</h3>
						<p>
							Ciberforénsica, criptografía para dispositivos, aplicación de
							máquinas inteligentes, automatización de detección de intrusos,
							aplicación de visión computacional en ciberseguridad.
						</p>
					</div>
					<div className="box">
						<WorkIcon />
						<h3>Servicios</h3>
						<p>
							Pruebas de penetración de la infraestructura de tecnologías de la
							información, auditorías de seguridad informática, gestión de
							riesgos de tecnologías de la información y cyber range.
						</p>
					</div>
					<div className="box">
						<MenuBookIcon />
						<h3>Capacitación</h3>
						<p>Diplomados, especialidades y posgrados.</p>
					</div>
					<div className="box">
						<LightbulbIcon />
						<h3>Concientización</h3>
						<p>Conferencias, competencias y seminarios.</p>
					</div>
				</div>
			</div>

			<hr className="divider" />
			<div className="carrusel">
				<h1 className="heading mb-4">Recursos</h1>
				<div className="col-sm-8 col-centered">
					<div
						id="carouselExampleIndicators"
						class="carousel slide carrusel"
						data-bs-ride="true"
					>
						<div class="carousel-indicators">
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="0"
								class="active"
								aria-current="true"
								aria-label="Slide 1"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="1"
								aria-label="Slide 2"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="2"
								aria-label="Slide 3"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="3"
								aria-label="Slide 4"
							></button>
							<button
								type="button"
								data-bs-target="#carouselExampleIndicators"
								data-bs-slide-to="4"
								aria-label="Slide 5"
							></button>
						</div>
						<div class="carousel-inner">
							<div class="carousel-item active" data-bs-interval="10000">
								<img src={fondo1} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item" data-bs-interval="10000">
								<img src={fondo2} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item" data-bs-interval="10000">
								<img src={fondo3} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item" data-bs-interval="10000">
								<img src={fondo4} class="d-block w-100" alt="..." />
							</div>
							<div class="carousel-item" data-bs-interval="10000">
								<img src={fondo5} class="d-block w-100" alt="..." />
							</div>
						</div>
						<button
							class="carousel-control-prev"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="prev"
						>
							<span
								class="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button
							class="carousel-control-next"
							type="button"
							data-bs-target="#carouselExampleIndicators"
							data-bs-slide="next"
						>
							<span
								class="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>

				<div className="lineas">
					<div className="boxContainer-a">
						<div className="box-a">
							<CheckCircleIcon color="success" />
							<p>
								Espacios especializados como laboratorios, salones y salas de
								junta.
							</p>
						</div>
						<div className="box-a">
							<CheckCircleIcon color="success" />
							<p>Equipos electrónicos y de cómputo</p>
						</div>
						<div className="box-a">
							<CheckCircleIcon color="success" />
							<p>Software</p>
						</div>
						<div className="box-a">
							<CheckCircleIcon color="success" />
							<p>Licencias</p>
						</div>
					</div>
				</div>
			</div>

			<hr className="divider" />
			<h1 className="heading">Misión</h1>
			<div className="mision">
				<div className="contactInfo">
					<div className="box2">
						<div className="icon2">
							<FormatQuoteIcon />
						</div>
					</div>
				</div>
				<div className="contactForm">
					<h2 className="mb-5">
						... <b>dar seguimiento a todas las buenas iniciativas </b> y
						actividades que se vienen haciendo, así como las buenas relaciones
						que se han desarrollado y fortalecer y desarrollar nuevas. Por
						ejemplo,{" "}
						<b>impulsar al género femenino a adentrarse a la materia </b>, como
						saben menos del 10% del sector de ciberseguridad son mujeres.
					</h2>

					<h4 className="nombre">Gonzalo García-Belenguer</h4>
					<h4 className="puesto">Director del Hub de Ciberseguridad</h4>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default AboutUs;
