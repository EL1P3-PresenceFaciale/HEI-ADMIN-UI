
import { useState } from 'react';
import { useEffect }from 'react';
import axios, { AxiosResponse } from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { EventPartList } from './Types'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';


export default function EventParticipant(){
    
    const [ result , setResult ] = useState<EventPartList>([])

    const { idEvent } = useParams();
    useEffect(()=>{
        axios.get<EventPartList>(`http://localhost:8080/event/${idEvent}/eventParticipant`)
        .then((response : AxiosResponse) => {
            console.log(response.data)
            setResult(response.data)
        })
    }) 

    const navigate = useNavigate()

    return (
        <div className="contain">
            <h2  style={{ position: 'absolute' , top: '12%' , left: '30%' }}>Event's participants</h2>
            <Button variant='contained' sx={{ position: 'absolute' , top: '12%' , left: '10%', fontSize: '20px'}} onClick={()=> navigate("/events")} > <ArrowBackIcon/> All Events </Button>
        <div className="event_contain">
            <table className="event_table">
                <thead>
                    <th>Participant (ref) </th>
                    <th>Event ID</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {result.map((item) => 
                    <tr>
                        <td>{item.ref}</td>
                        <td>{item.event_id}</td>
                        <td>{item.status}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        <Button variant="contained"  onClick={()=> navigate("/attend")}  sx={{ position : 'fixed' , bottom: '5%' , right: '5%' , fontSize: '15px',  width: '10vw' , height: '6vh'}}>Who's there ?</Button> 
        <div className='pagination'>
            <span style={{ cursor: 'pointer' }} > <KeyboardArrowLeft sx={{ fontSize: '50px' }} /> </span>
            <span style={{ borderRadius : '10px' , background: 'none'}} > Id page </span> 
            <span style={{ cursor: 'pointer' }} > <KeyboardArrowRightIcon sx={{ fontSize: '50px' }} /> </span>
        </div>
    </div>
    )
}