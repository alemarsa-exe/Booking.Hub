import "./Resource.css"
import NavBar from "../../components/navbar/Nabvar.jsx"
import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"
import useFetch from "../../hooks/useFecth";
import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";


const Resource = () => {
	const photos = [
		{
			src: "https://logosmarcas.net/wp-content/uploads/2020/12/MATLAB-Logo.png",
		},
	];

    const [categoria, setCategoria] = useState(location.state.categoria);

	const location = useLocation();
	const locationString = location.pathname.toString();
	const locationSplit = locationString.split("/");
	const id = locationSplit[2];
	const { startDate } = useContext(SearchContext);

	// api url
    const cat = "/" + categoria
	const find = cat.concat("/find")
    const newUrl = find.concat(id).toString()

    
    console.log(newUrl)
    const { data, loading, error } = useFetch(newUrl) 
    console.log(data)
	
	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="resourceContainer">
				<div className="resourceWrapper">
					<h1 className="rosourceTitle">{data.type}</h1>
					<div className="resourceImages">
						{photos.map((photo) => (
							<div className="resourceImgWrapper">
								<img src={photo.src} alt="foto" className="resourceImg" />
							</div>
						))}
					</div>

					<div className="resourceDetail">
						<div className="resourceDetailText">
							<h1 className="resourceTitle">{data.name}</h1>
							<p className="resourceDesc">
								{data.description}
							</p>
						</div>
						<div className="resourceDetailPrice">
							<h1>¿Quieres reservar este espacio?</h1>
							<span>Se localiza en Aulas -999</span>
							<h2>60 minutos</h2>
							<button >¡Agenda ahora!</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default Resource