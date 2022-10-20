import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { format, setHours, setMinutes } from "date-fns";
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFecth";
import "./reserve.css";

const Reserve = ({ setOpen, resourceId, data, categoria}) => {
	const [newStartDate, setStartDate] = useState(
		setHours(setMinutes(new Date(), 0), 7)
	);
	const [endDate, setEndDate] = useState(
		setHours(setMinutes(new Date(), 30), 7)
	);

	const navigate = useNavigate();

	const { email } = useContext(AuthContext);
  console.log("data")
  console.log(data)

	const [credential, setCredential] = useState({
		resID: data.resID,
		subject: "Reservación",
		userId: email._id,
		startDate: new Date(),
		endDate: undefined,
		nowStatus: "Próximo",
		images: "none",
	});

	const [input, setInput] = useState("");

	const handleInput = (e) => {
		setInput(e.target.value);
	};

	const handleSave = () => {
		setCredential({
			resID: data.resID,
			subject: input,
			userId: email._id,
			startDate: newStartDate.toISOString(),
			endDate: endDate.toISOString(),
			nowStatus: "Próximo",
			images: "none",
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("/reservation", credential);
			console.log("response");
			console.log(JSON.stringify(response));
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	};

	console.log("credential");
	console.log(credential);

	return (
		<div className="reserve">
			<div className="rContainer">
				<CloseIcon className="rClose" onClick={() => setOpen(false)} />
				<div className="input-group mb-3">
					<span className="input-group-text" id="basic-addon1">
						Asunto
					</span>
					<input
						type="text"
						className="form-control"
						placeholder="¿Cuál es tu asunto?"
						aria-describedby="basic-addon1"
						id="asunto"
						onChange={handleInput}
					/>
				</div>
				<span>Selecciona las fechas</span>

				<div className="rItem" key={resourceId}>
					<div className="rItemInfo">
						<div className="rTitle">Fecha de inicio</div>
						<div className="rDesc">
							<DatePicker
								selected={newStartDate}
								onChange={(date) => setStartDate(date)}
								showTimeSelect
								inline
								minTime={setHours(setMinutes(new Date(), 0), 7)}
								maxTime={setHours(setMinutes(new Date(), 0), 20)}
								dateFormat="MMMM d, yyyy h:mm aa"
								className="date"
								id="startDate"
							/>
						</div>
						<div className="rPrice">
							{`${format(newStartDate, "MMMM d, yyyy h:mm aa")}`}
						</div>
					</div>
					<div className="Fecha de fin">
						<div className="rTitle">Fecha de fin</div>
						<div className="rDesc">
							<DatePicker
								selected={endDate}
								onChange={(date) => setEndDate(date)}
								showTimeSelect
								inline
								minTime={setHours(setMinutes(new Date(), 30), 7)}
								maxTime={setHours(setMinutes(new Date(), 0), 20)}
								dateFormat="MMMM d, yyyy h:mm aa"
								className="date"
								id="endDate"
							/>
						</div>
						<div className="rPrice">
							{`${format(endDate, "MMMM d, yyyy h:mm aa")}`}
						</div>
					</div>
				</div>
				<button className="btn btn-primary mr-3" onClick={handleSave}>
					Guardar cambios
				</button>
				<button className="btn btn-success" onClick={handleSubmit}>
					Reservar
				</button>
			</div>
		</div>
	);
};

export default Reserve;
