import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import TerminalIcon from "@mui/icons-material/Terminal";
import DevicesIcon from "@mui/icons-material/Devices";
import axios from "axios"
import useFetch from "../../hooks/useFecth";

const Widget = ({ type }) => {
  let data;

  const amount = 5;

  //USERS
  const users = useFetch("/users")
  const numUsers = users.data.length
  //LABS
  const labs = useFetch("/labs")
  const numLabs = labs.data.length
  //SOFTWARE
  const softwares = useFetch("/software")
  const numSoftwares = softwares.data.length
  //DEVICES
  const devices = useFetch("/software")
  const numDevices = devices.data.length

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
				title: "License",
				desc: "Cantidad total de licencias",
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
		case "totalResources":
			data = {
				title: "Devices",
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
		case "totalReservations":
			data = {
				title: "Devices",
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
