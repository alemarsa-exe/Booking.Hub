import "./Footer.css"

const Footer = () => {
  return (
		<div className="footer">
			<h1>Hub de Ciberseguridad por Tec de Monterrey</h1>
			<div className="fLists">
				<ul className="fList">
					<li className="fListItem">
						<img
							src="https://www.nicmexico.mx/wp-content/uploads/2018/09/Logo-nic-transp-web.png"
							alt="nic mexico"
							className="footerLogo"
						/>
					</li>
					<li className="fListItem">Tec de Monterrey </li>
				</ul>
				<ul className="fList">
					<li className="fListItem">Microsoft </li>
					<li className="fListItem">Deloitte </li>
				</ul>
				<ul className="fList">
					<li className="fListItem">Cisco </li>
					<li className="fListItem">Citi Banamex </li>
				</ul>
			</div>
			<div className="fText">Copyright 2022 Hub de Ciberseguridad</div>
		</div>
	);
}

export default Footer