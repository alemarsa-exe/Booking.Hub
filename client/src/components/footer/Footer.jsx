import "./Footer.css"

const Footer = () => {
  return (
		<div className="footer">
			<h1>Hub de Ciberseguridad por Tec de Monterrey</h1>
			<div className="fLists">
				<ul className="fList">
					<li className="fListItem">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png"
							alt="nic mexico"
							className="footerLogo"
						/>
					</li>
					<li className="fListItem">
						<img
							src="https://1000marcas.net/wp-content/uploads/2020/03/logo-Deloitte.png"
							alt="nic mexico"
							className="footerLogo"
						/>
					</li>
				</ul>
				<ul className="fList">
					<li className="fListItem">
						<img
							src="https://www.nicmexico.mx/wp-content/uploads/2018/09/Logo-nic-transp-web.png"
							alt="nic mexico"
							className="footerLogo"
						/>
					</li>
					<li className="fListItem">
						<img
							src="https://digieduhack.com/media/com_reditem/images/customfield/item/2523/4d4dc7ed5084c7e41458822632168118b70e7dd4.png"
							alt="nic mexico"
							className="footerLogo"
						/>
					</li>
				</ul>

				<ul className="fList">
					<li className="fListItem">
						<img
							src="https://www.bghtechpartner.com/wp-content/uploads/2017/03/PNGPIX-COM-Cisco-Systems-Logo-PNG-Transparent.png"
							alt="nic mexico"
							className="footerLogo"
						/>
					</li>
					<li className="fListItem">
						<img
							src="https://1000marcas.net/wp-content/uploads/2020/10/Citibanamex-logo.png"
							alt="nic mexico"
							className="footerLogo"
						/>
					</li>
				</ul>
			</div>
			<div className="fText">Copyright 2022 Hub de Ciberseguridad</div>
		</div>
	);
}

export default Footer