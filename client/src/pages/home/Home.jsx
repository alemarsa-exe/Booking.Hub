import Navbar from "../../components/navbar/Nabvar.jsx"
import Header from "../../components/header/Header.jsx"
import SoftwareList from "../../components/softwareList/softwareList.jsx"
import DeviceList from "../../components/deviceList/deviceList.jsx"
import LabList from "../../components/labList/labList.jsx"
import Footer from "../../components/footer/Footer.jsx"
import "./home.css"


const Home = () => {


    return (
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
                <h1 className="homeTitle">Software</h1>
                <SoftwareList/>
                <h1 className="homeTitle">Equipos</h1>
                <DeviceList/>
                <h1 className="homeTitle">Laboratorios</h1>
                <LabList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home