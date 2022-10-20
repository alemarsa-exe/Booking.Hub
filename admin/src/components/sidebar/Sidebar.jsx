import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DevicesIcon from "@mui/icons-material/Devices";
import TerminalIcon from "@mui/icons-material/Terminal";
import EventIcon from "@mui/icons-material/Event";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext);

	const handleLogout = () => {
		localStorage.removeItem("email");
	};

	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span className="logo">Booking.Hub</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">LISTS</p>
					<Link to="/users" style={{ textDecoration: "none" }}>
						<li>
							<PersonOutlineIcon className="icon" />
							<span>Users</span>
						</li>
					</Link>
					<Link to="/labs" style={{ textDecoration: "none" }}>
						<li>
							<MeetingRoomIcon className="icon" />
							<span>Labs</span>
						</li>
					</Link>
					<Link to="/software" style={{ textDecoration: "none" }}>
						<li>
							<TerminalIcon className="icon" />
							<span>Software</span>
						</li>
					</Link>
					<Link to="/devices" style={{ textDecoration: "none" }}>
						<li>
							<DevicesIcon className="icon" />
							<span>Devices</span>
						</li>
					</Link>
					<Link to="/reservation" style={{ textDecoration: "none" }}>
						<li>
							<EventIcon className="icon" />
							<span>Reservation</span>
						</li>
					</Link>
					<p className="title">USEFUL</p>
					<li>
						<InsertChartIcon className="icon" />
						<span>Stats</span>
					</li>

					<p className="title">USER</p>
					{/*<li>
						<AccountCircleOutlinedIcon className="icon" />
						<span>Profile</span>
  					</li>*/}
					<li onClick={handleLogout}>
						<Link to="/login" style={{ textDecoration: "none" }}>
							<ExitToAppIcon className="icon" />
							<span>Logout</span>
						</Link>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div
					className="colorOption"
					onClick={() => dispatch({ type: "LIGHT" })}
				></div>
				<div
					className="colorOption"
					onClick={() => dispatch({ type: "DARK" })}
				></div>
			</div>
		</div>
	);
};

export default Sidebar;
