import react from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import "./App.css";
import Button from '@mui/material/Button';


const ListItem = (props) => {
    return (
        <div className="line">
        <Button variant="outlined" className="btn"><span><DeleteIcon className="delte"/></span></Button>
        <li>{props.text}</li>
        </div>
        )
    
}

export default ListItem