import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import TerminalIcon from "@mui/icons-material/Terminal";
import DevicesIcon from "@mui/icons-material/Devices";
import InventoryIcon from "@mui/icons-material/Inventory";
import PaymentIcon from "@mui/icons-material/Payment";
import EventIcon from "@mui/icons-material/Event";
import axios from "axios"
import useFetch from "../../hooks/useFecth";

const Widget = ({ type }) => {
	let data;

	const amount = 5;

	//USERS
	const users = useFetch("/users");
	const numUsers = users.data.length;
	//LABS
	const labs = useFetch("/labs");
	const numLabs = labs.data.length;
	//SOFTWARE
	const softwares = useFetch("/software");
	const numSoftwares = softwares.data.length;
	//DEVICES
	const devices = useFetch("/software");
	const numDevices = devices.data.length;
	//DEVICES
	const licenses = useFetch("/license");
	const numLicences = licenses.data.length;
	//NUM RESOURCES
	const numResources = numLabs + numSoftwares + numDevices + numLicences;
	//NUM RESERVATIONS
	const reservations = useFetch("/reservation");
	const numReservations = reservations.data.length;

	switch (type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				desc: "Cantidad total de usuarios",
				icon: (
					<PersonOutlinedIcon
						className="icon"
						style={{
							color: "crimson",
							backgroundColor: "rgba(255, 0, 0, 0.2)",
						}}
					/>
				),
			};
			break;
		case "labs":
			data = {
				title: "LABS",
				desc: "Cantidad total de laboratorios",
				icon: (
					<MeetingRoomIcon
						className="icon"
						style={{
							backgroundColor: "rgba(218, 165, 32, 0.2)",
							color: "goldenrod",
						}}
					/>
				),
			};
			break;
		case "software":
			data = {
				title: "SOFTWARE",
				isMoney: false,
				desc: "Cantidad total de software",
				icon: (
					<TerminalIcon
						className="icon"
						style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
					/>
				),
			};
			break;
		case "devices":
			data = {
				title: "DEVICES",
				desc: "Cantidad total de equipos",
				icon: (
					<DevicesIcon
						className="icon"
						style={{
							backgroundColor: "rgba(128, 0, 128, 0.2)",
							color: "purple",
						}}
					/>
				),
			};
			break;
		case "license":
			data = {
				title: "LICENSE",
				desc: "Cantidad total de licencias",
				icon: (
					<PaymentIcon
						className="icon"
						style={{
							backgroundColor: "#B1E1FF",
							color: "#1F4690",
						}}
					/>
				),
			};
			break;
		case "totalResources":
			data = {
				title: "RESOURCES",
				desc: "Cantidad total de recursos",
				icon: (
					<InventoryIcon
						className="icon"
						style={{
							backgroundColor: "#D7C0AE",
							color: "#665A48",
						}}
					/>
				),
			};
			break;
		case "totalReservations":
			data = {
				title: "RESERVATIONS",
				desc: "Cantidad total de reservaciones",
				icon: (
					<EventIcon
						className="icon"
						style={{
							backgroundColor: "#EAEAEA",
							color: "#748DA6",
						}}
					/>
				),
			};
			break;

		default:
			break;
	}

	return (
		<div className="widget">
			{data.title === "USERS" && (
				<div className="left">
					<span className="title">{data.title}</span>
					<span className="counter">
						{data.isMoney && "$"} {numUsers}
					</span>
					<span className="">{data.desc}</span>
				</div>
			)}
			{data.title === "LABS" && (
				<div className="left">
					<span className="title">{data.title}</span>
					<span className="counter">
						{data.isMoney && "$"} {numLabs}
					</span>
					<span className="">{data.desc}</span>
				</div>
			)}
			{data.title === "SOFTWARE" && (
				<div className="left">
					<span className="title">{data.title}</span>
					<span className="counter">
						{data.isMoney && "$"} {numSoftwares}
					</span>
					<span className="">{data.desc}</span>
				</div>
			)}
			{data.title === "DEVICES" && (
				<div className="left">
					<span className="title">{data.title}</span>
					<span className="counter">
						{data.isMoney && "$"} {numDevices}
					</span>
					<span className="">{data.desc}</span>
				</div>
			)}
			{data.title === "LICENSE" && (
				<div className="left">
					<span className="title">{data.title}</span>
					<span className="counter">
						{data.isMoney && "$"} {numLicences}
					</span>
					<span className="">{data.desc}</span>
				</div>
			)}
			{data.title === "RESOURCES" && (
				<div className="left">
					<span className="title">{data.title}</span>
					<span className="counter">
						{data.isMoney && "$"} {numResources}
					</span>
					<span className="">{data.desc}</span>
				</div>
			)}
			{data.title === "RESERVATIONS" && (
				<div className="left">
					<span className="title">{data.title}</span>
					<span className="counter">
						{data.isMoney && "$"} {numReservations}
					</span>
					<span className="">{data.desc}</span>
				</div>
			)}
			<div className="right">
				<div className="percentage positive">
					<KeyboardArrowUpIcon />
				</div>
				{data.icon}
			</div>
		</div>
	);
};

export default Widget;
