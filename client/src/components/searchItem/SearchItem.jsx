import { Link, Navigate } from "react-router-dom"
import "./SearchItem.css"



const SearchItem = ({ categoria, item }) => {
  
  
  return (
    <div className="searchItem" >
        <img 
        src={item.images}
        alt="" 
        className="siImage"
        />
        <div className="siDesc">
            <h1 className="siTitle">{item.name}</h1>
            {/*<span className="siSubtitle">Software de ingeniería</span>*/}
        </div>
        <div className="siDetails">
            <div className="siDetailText">
              <Link to={`/resources/${item._id}`}>
              <button className="siCheckButton">Ver disponibilidad</button>
              </Link>
            </div>
        </div>
    </div>
  )

}

export default SearchItem

