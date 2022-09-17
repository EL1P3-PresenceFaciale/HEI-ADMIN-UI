
import SearchBar from "./SearchBar"
import {Modal} from "./Modal";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { EventList } from './Types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import axios, { AxiosError, AxiosResponse } from "axios";

export default function Event(){

    const [ openCreate , setOpenCreate ] = useState<boolean>(false)
    const [ openUpdate , setOpenUpdate ] = useState<boolean>(false)
    const [ openChoice , setOpenChoice ] = useState<boolean>(false)
    const [ id ,setId ] = useState<string>("")
    const [ idEvent , setIdEvent ] = useState<string>("")
    const [ tag , setTag ] = useState<string | undefined >()
    const [ description , setDescription ] = useState<string | undefined>()
    const [ start , setStart ] = useState<string | undefined>()
    const [ end , setEnd ] = useState<string | undefined >() 
    const [ place , setPlace ] = useState<string | undefined >()
    const [ responsable , setResponsable ] = useState<string | undefined>()
    const [ eventList , setEventList ] = useState<EventList>([])

    useEffect(()=> {
        axios.get<EventList>('http://localhost:8080/events')
        .then((response : AxiosResponse)=> {
            console.log(response.data)
            setEventList(response.data)
        }
        )
    })

    const navigate = useNavigate()
    return (
        <> 
           <SearchBar/>
           <Modal open={openCreate} setOpen={setOpenCreate}>
                    <TextField id="outlined-basic" label="Tag" variant="outlined" sx={{ mb : 4 }}  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value) } />
                    <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ mb : 4 }} onChange={(e :React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value) } />
                    <TextField id="outlined-basic" label="Start" variant="outlined" sx={{ mb : 4 , mt : 4  }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStart(e.target.value)} />
                    <TextField id="outlined-basic" label="End" variant="outlined" sx={{ mb : 4 }} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEnd(e.target.value)} />
                    <TextField id="outlined-basic" label="Place" variant="outlined" sx={{ mb : 4 }} onChange={(e :React.ChangeEvent<HTMLInputElement>)=> setPlace(e.target.value)} />
                    <TextField id="outlined-basic" label="Responsable" variant="outlined" sx={{ mb : 4 }} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setResponsable(e.target.value)} />
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> {
                        setOpenCreate(false)
                        axios.put<EventList>('http://localhost:8080/events' , [ { eventName : tag , description : description , start : start , end : end , place : place , responsable : responsable} ])
                        .then((response : AxiosResponse) => console.log(response.data))
                        .catch((error : AxiosError) => console.log(error)
                        )
                        } } >ADD</Button>
            </Modal>
            <Modal open={openUpdate} setOpen={setOpenUpdate}>
                    <TextField id="outlined-basic" label="Id" variant="outlined" sx={{ mb : 4 , mt : 4  }} onChange={(e :React.ChangeEvent<HTMLInputElement>) => setIdEvent(e.target.value)}/>
                    <TextField id="outlined-basic" label="Tag" variant="outlined" sx={{ mb : 4 }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value) } />
                    <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ mb : 4 }} onChange={(e :React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value) }/>
                    <TextField id="outlined-basic" label="Start" variant="outlined" sx={{ mb : 4 , mt : 4  }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStart(e.target.value)}/>
                    <TextField id="outlined-basic" label="End" variant="outlined" sx={{ mb : 4 }} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEnd(e.target.value)} />
                    <TextField id="outlined-basic" label="Place" variant="outlined" sx={{ mb : 4 }} onChange={(e :React.ChangeEvent<HTMLInputElement>)=> setPlace(e.target.value)}/>
                    <TextField id="outlined-basic" label="Responsable" variant="outlined" sx={{ mb : 4 }} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setResponsable(e.target.value)}/>
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> { 
                        setOpenUpdate(false) 
                        axios.put <EventList> ('http://localhost:8080/events' , [ { idEvent : idEvent,  eventName : tag , description : description , start : start , end : end , place : place , responsable : responsable} ] )
                        .then((response : AxiosResponse) => console.log(response.data))
                        .catch( (error : AxiosError) => console.log(error))
                        }} >UPDATE</Button>
            </Modal>
            <Modal open={openChoice} setOpen={setOpenChoice} >
                  <h4 style={{ margin: '20px auto' , marginTop :'-20px'}}>What do you want to do ?</h4>
                 <Button variant="contained" sx={{ width: "35%" , margin: "auto" , mb : 2 }} onClick={()=> { 
                    setOpenChoice(false)
                    setOpenUpdate(true) 
                    }} color='success' >Edit event's informations <EditIcon/> </Button>
                  <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> {
                        navigate(`/event/${id}/eventParticipant`)
                  }} >Check event's participants</Button>
            </Modal>
        
        
           <div className="contain">
               <h2  style={{ position: 'absolute' , top: '14%' , left: '10%' }}>Events</h2>
               <div className="event_contain" >
                    <table className="event_table" >
                        <thead >
                            <th>Id</th>
                            <th>Tag</th>
                            <th>Description</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Place</th>
                            <th >Responsable</th>
                        </thead>
                        <tbody>
                         {eventList.map((item) => 
                            <tr onClick={()=> {
                                setOpenChoice(true)
                                setId(item.idEvent)
                            }} >
                                <td>{item.idEvent}</td>
                                <td>{item.eventName} </td>
                                <td>{item.eventDescription} </td>
                                <td>{item.startTime} </td>
                                <td>{item.endingTime} </td>
                                <td>{item.place} </td>
                                <td>{item.place} </td>
                            </tr>
                         )
                         }
                       </tbody>
                        
                    </table>
               </div>
               <div className='pagination'>
            <span style={{ cursor: 'pointer' }} > <KeyboardArrowLeft sx={{ fontSize: '50px' }} /> </span>
            <span style={{ borderRadius : '10px' , background: 'none'}} > Id page </span> 
            <span style={{ cursor: 'pointer' }} > <KeyboardArrowRightIcon sx={{ fontSize: '50px' }} /> </span>
        </div>
           </div>
           <Button variant="contained"  onClick={()=> setOpenCreate(true)}  sx={{ position : 'fixed' , bottom: '5%' , right: '5%' , fontSize: '20px',  width: '6vw' , height: '6vh'}}> <AddIcon/> Add</Button> 
        </>
    )
}