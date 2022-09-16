
import { useState } from 'react';
import { useEffect }from 'react';
import axios, { AxiosResponse } from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export default function EventParticipant(){
    
    /*
    const [ result , setResult ] = useState<EventPartList>([])

    const { idEvent } = useParams();
    useEffect(()=>{
        axios.get<EventPartList>(`http://localhost:8080/event/${idEvent}/eventParticipant`)
        .then((response : AxiosResponse) => {
            console.log(response.data)
            setResult(response.data)
        })
    }) 
    */

    const navigate = useNavigate()

    return (
        <div className="contain">
            <Button variant='contained' sx={{ position: 'absolute' , top: '12%' , left: '10%', fontSize: '20px'}} onClick={()=> navigate("/events")} > <ArrowBackIcon/> All Events </Button>
        <div className="event_contain">
            <table className="event_table">
                <thead>
                    <th>Participant (ref) </th>
                    <th>Event</th>
                    <th>Responsible (ref)</th>
                    <th>Place</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    <tr>
                        <td>qqsdfgh</td>
                        <td>qqsdfgh</td>
                        <td>qqsdfgh</td>
                        <td>qqsdfgh</td>
                        <td>qqsdfgh</td>
                    </tr>
                    <tr>
                        <td>iuyt</td>
                        <td>iuyt</td>
                        <td>iuyt</td>
                        <td>iuyt</td>
                        <td>iuyt</td>
                    </tr>
                    <tr>
                        <td>ij, fghfhsfgh</td>
                        <td>ij, fghfhsfgh</td>
                        <td>ij, fghfhsfgh</td>
                        <td>ij, fghfhsfgh</td>
                        <td>ij, fghfhsfgh</td>
                    </tr>
                    <tr>
                        <td>'rtgh</td>
                        <td>'rtgh</td>
                        <td>'rtgh</td>
                        <td>'rtgh</td>
                        <td>'rtgh</td>
                    </tr>
                    <tr>
                        <td>aqwzsxdc </td>
                        <td>aqwzsxdc </td>
                        <td>aqwzsxdc </td>
                        <td>aqwzsxdc </td>
                        <td>aqwzsxdc </td>
                    </tr>
                    <tr>
                        <td>oiuytr</td>
                        <td>oiuytr</td>
                        <td>oiuytr</td>
                        <td>oiuytr</td>
                        <td>oiuytr</td>
                    </tr>
                    <tr>
                        <td>ik,yhb </td>
                        <td>fvfv </td>
                        <td>hnyhb</td>
                        <td>sdfgsdfg</td>
                        <td>sdfgsdf</td>
                    </tr>
                    <tr>
                        <td>tgty6552</td>
                        <td>tgty6552</td>
                        <td>tgty6552</td>
                        <td>tgty6552</td>
                        <td>tgty6552</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}