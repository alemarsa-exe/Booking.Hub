import "./Resource.css"
import NavBar from "../../components/navbar/Nabvar.jsx"
import Header from "../../components/header/Header.jsx"
import Footer from "../../components/footer/Footer.jsx"
import useFetch from "../../hooks/useFecth";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";


const Resource = () => {

    const photos = [
        {
            src: "https://logosmarcas.net/wp-content/uploads/2020/12/MATLAB-Logo.png"
        }
    ];

    const location = useLocation()
    const id = location.toString().split("/"[2])
    
    const { startDate } = useContext(SearchContext)

    console.log(startDate)

    return (
        <div>
            <NavBar/>
            <Header type="list" />
            <div className="resourceContainer">
                <div className="resourceWrapper">
                    <h1 className="rosourceTitle">Matlab</h1>
                    <div className="resourceImages">
                        {photos.map(photo=>(
                            <div className="resourceImgWrapper">
                                <img src={photo.src} alt="foto" className="resourceImg" />
                            </div>
                        ))}
                    </div>
                    
                    <div className="resourceDetail">
                        <div className="resourceDetailText">
                            <h1 className="resourceTitle">Software Matlab para ingeniería</h1>
                            <p className="resourceDesc">
                                Este software está orientado al desarrollo de métodos computacionales e implementaciones para el mundo real
                            </p>
                        </div>
                        <div className="resourceDetailPrice">
                            <h1>¿Quieres reservar este espacio?</h1>
                            <span>Se localiza en Aulas -999</span>
                            <h2>60 minutos</h2>
                            <button>¡Agenda ahora!</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Resource