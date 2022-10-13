import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import TerminalIcon from "@mui/icons-material/Terminal";
import DevicesIcon from "@mui/icons-material/Devices";

const Widget = ({ type }) => {
  let data;

  //temporary
  const amount = 5;

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
    case "order":
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
    case "earning":
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
    case "balance":
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
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="">{data.desc}</span>
      </div>
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
