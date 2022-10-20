import { faSearch, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

//DatePicker
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
	const [categoria, setCategoria] = useState("software");
	const [busqueda, setBusqueda] = useState("");
	const [startDate, setStartDate] = useState(
		setHours(setMinutes(new Date(), 0), 7)
	);

	const navigate = useNavigate();
	const { email } = useContext(AuthContext);

	const { dispatch } = useContext(SearchContext);
	const handleSearch = () => {
		dispatch({
			type: "NEW_SEARCH",
			payload: { busqueda, startDate, categoria },
		});
		navigate("/resources", { state: { busqueda, startDate, categoria } });
	};

	const handleSelect = (e) => {
		setCategoria(e.target.value);
	};


	console.log(startDate)
	return (
		<div className="header">
			<div
				className={
					type === "list" ? "headerContainer listMode" : "headerContainer"
				}
			>
				<div className="headerList"></div>

				{type !== "list" && (
					<>
						<h1 className="headerTitle">
							Bienvenido, aquí encontrarás todos nuestros recursos
						</h1>
						{!email && (
							<p className="headerDesc">
								Para reservar recursos, debes iniciar sesión
							</p>
						)}
						{!email && (
							<div>
								<Link to="/login">
									<button className="headerBtn">Iniciar Sesión</button>
								</Link>
							</div>
						)}

						<div className="headerSearch">
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faSearch} className="headerIcon" />
								<input
									type="text"
									placeholder="¿Qué quieres reservar?"
									className="headerSearchInput"
									onChange={(e) => setBusqueda(e.target.value)}
								/>
							</div>
							<div className="headerSearchItem">
								<select
									className="form-select"
									value={categoria}
									onChange={handleSelect}
								>
									<option value="software">software</option>
									<option value="devices">devices</option>
									<option value="labs">labs</option>
									<option value="license">license</option>
								</select>
							</div>
							<div className="headerSearchItem">
								<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

								<DatePicker
									selected={startDate}
									onChange={(date) => setStartDate(date)}
									showTimeSelect
									minTime={setHours(setMinutes(new Date(), 0), 7)}
									maxTime={setHours(setMinutes(new Date(), 0), 20)}
									dateFormat="MMMM d, yyyy h:mm aa"
									className="date"
								/>
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="headerIconBlank"
								/>
								<FontAwesomeIcon
									icon={faCalendarDays}
									className="headerIconBlank"
								/>
							</div>
							<div className="headerSearchItem">
								<button className="SearchBtn" onClick={handleSearch}>
									Buscar
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Header;
