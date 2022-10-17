import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ categoria, item }) => {
	const location = useLocation();

	// console.log("location")
	// console.log(location)
	// const [categoria, setCategoria] = useState(location.state.categoria);

	return (
		<div className="searchItem">
			<img src={item.images} alt="" className="siImage" />
			<div className="siDesc">
				<h1 className="siTitle">{item.name}</h1>
				{/*<span className="siSubtitle">Software de ingeniería</span>*/}
			</div>
			<div className="siDetails">
				<div className="siDetailText">
					<Link
						to={{
							pathname: `/resources/${categoria}/${item._id}`
						}}
					>
						<button className="siCheckButton">Ver disponibilidad</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
