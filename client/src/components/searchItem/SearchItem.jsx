import { useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import "./SearchItem.css";

const SearchItem = ({ categoria, item, startDate }) => {
	const location = useLocation();

	// console.log("location")
	// console.log(location)
	// const [categoria, setCategoria] = useState(location.state.categoria);
	console.log("startDate de searchItem")
	console.log(startDate)

	const handleDate = ()=>{
		localStorage.setItem("date", JSON.stringify(startDate));
	}

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
							pathname: `/resources/${categoria}/${item._id}`,
						}}
						onClick={handleDate}
					>
						<button className="siCheckButton">Ver disponibilidad</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchItem;
