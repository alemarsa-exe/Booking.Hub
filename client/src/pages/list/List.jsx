import "./List.css"
import Header from "../../components/header/Header.jsx";
import Navbar from "../../components/navbar/Nabvar.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setHours, setMinutes } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFecth";


const List = () => {

    const location = useLocation()
    const [categoria, setCategoria] = useState(location.state.categoria)
    const [busqueda, setBusqueda] = useState(location.state.busqueda)
    const [startDate, setStartDate] = useState(location.state.startDate)

    const [openDate, setOpenDate] = useState(false)

    {/*const { data, loading, error, refetch } = useFetch(`/labs?cities=${busqueda}`);*/}
    const  { data, loading, error, reFetch } = useFetch(`/${categoria}`)

    const handleClick = () => {
        reFetch()
    }

    const handleSelect = (e) => {
		setCategoria(e.target.value)
	}

    return (
        <div> 
            <Navbar/>
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Búsqueda</h1>
                        <div className="lsItem">
                            <label >¿Qué necesitas encontrar?</label>
                            <input placeholder={busqueda} type="text" />
                        </div>
                        <div className="lsItem">
                            <label >¿De qué tipo?</label>
                            <select placeholder={categoria} value={categoria} onChange={handleSelect}>
                                <option value="software" >software</option>
                                <option value="devices">devices</option>
                                <option value="labs">labs</option>
                            </select>
                        </div>
                        <div className="lsItem">
                            <label >¿Cuándo lo necesitas?</label>
                            <span onClick={()=>setOpenDate(!openDate)}>
                                { `${format(startDate, "MMMM d, yyyy h:mm aa")}`}
                            </span>
                            {openDate && ( 
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    showTimeSelect
                                    inline
                                    minTime={setHours(setMinutes(new Date(), 0), 7)}
                                    maxTime={setHours(setMinutes(new Date(), 0), 20)}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                    className="date"
                                /> 
                            )}
                        </div>
                        <button onClick={handleClick}>Buscar</button>
                    </div>
                    <div className="listResult">
                        {loading ? "loading" : <>
                        {data.map(item=>(
                            <SearchItem categoria = {categoria} item={item} key={item._id}/>
                        ))}
                        </>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List