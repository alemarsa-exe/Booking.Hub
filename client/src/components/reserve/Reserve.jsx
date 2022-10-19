import "./reserve.css"
import CloseIcon from "@mui/icons-material/Close";

const Reserve = ({setOpen, resourceId}) => {
  return (
    <div className="reserve">
        <div className="rContainer">
            <CloseIcon className="rClose" onClick={()=>setOpen(false)} />
            <span>Selecciona la</span>
        </div>
    </div>
  )
}

export default Reserve