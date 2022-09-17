import { Button } from "@mui/material";
import Face from "./Face";
import { useNavigate } from 'react-router-dom';


export default function FacialPresence(){

    const navigate = useNavigate()

    return (
        <>
        <Face/>
        <Button variant="contained"  onClick={()=> navigate("/event/eventParticipant") }  sx={{ position : 'fixed' , bottom: '5%' , right: '5%' , fontSize: '20px',  width: '16vw' , height: '6vh'}}>Return to event</Button> 
        </>
    )
}