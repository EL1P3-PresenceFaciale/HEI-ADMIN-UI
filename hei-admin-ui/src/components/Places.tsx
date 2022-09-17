import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Modal } from "./Modal";
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect }from 'react';
import axios, { AxiosResponse } from 'axios';
import { PlaceList } from './Types';


export default function Places(){
    
    const [ openCreate , setOpenCreate ] = useState<boolean>(false)
    const [ openUpdate , setOpenUpdate ] = useState<boolean>(false)
    const [ result , setResult ] = useState<PlaceList>()
    const [ idPlace , setIdPlace ] = useState<string>("")
    const [ city , setCity ] = useState<string>("")
    const [ location , setLocation ] = useState<string>("")
    const [ searchTerm , setSearchTerm ] = useState<string>("")



    useEffect(()=> {
        axios.get<PlaceList>('http://localhost:8080/places')
        .then((response : AxiosResponse) => {
            console.log(response.data)
            setResult(response.data)
            
        })
    })

    return (
        <>
        <h2  style={{ position: 'absolute' , top: '14%' , left: '10%' }}>Places</h2>
        <div style={{ width : '11vw' , position: 'absolute' , top: '12%' , right: '10%'}} >
            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Type to search..."
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
                setSearchTerm(e.currentTarget.value)
                console.log(searchTerm);
            }}
            />
             
        </div>
        <div className="contain">
            <div className="event_contain">
                <table className="event_table">
                    <thead>
                        <th>Id</th>
                        <th>Place</th>
                        <th>City</th>
                    </thead>
                    <tbody>
                        { result?.map((item) => 
                            <tr>
                                <td>{item.id} </td>
                                <td>{item.city} </td>
                                <td>{item.location} </td>
                            </tr>
                        ) }
                    </tbody>
                </table>
            </div>
            <div className='pagination'>
            <span style={{ cursor: 'pointer' }} > <KeyboardArrowLeft sx={{ fontSize: '50px' }} /> </span>
            <span style={{ borderRadius : '10px' , background: 'none'}} > Id page </span> 
            <span style={{ cursor: 'pointer' }} > <KeyboardArrowRightIcon sx={{ fontSize: '50px' }} /> </span>
        </div>
        </div>
        <Button variant="contained"  onClick={()=> setOpenCreate(true)}  sx={{ position : 'fixed' , bottom: '5%' , right: '5%' , fontSize: '20px',  width: '6vw' , height: '6vh'}}> <AddIcon/> Add </Button> 
        <Modal open={openCreate} setOpen={setOpenCreate}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" sx={{ mb : 4 }} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)} />
                    <TextField id="outlined-basic" label="City" variant="outlined" sx={{ mb : 4 }} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCity(e.target.value)} />
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> {
                        setOpenCreate(false)
                        axios.put<PlaceList>('http://localhost:8080/places' , [ {  location : location , city : city } ])
                        .then((response : AxiosResponse) => console.log(response.data)
                        )
                        } } > <AddIcon/> ADD</Button>
        </Modal>
        <Modal open={openUpdate} setOpen={setOpenUpdate}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="City" variant="outlined" sx={{ mb : 4 }}/>
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> {
                        setOpenUpdate(false)
                        axios.put<PlaceList>('http://localhost:8080/places' , [ { idPlace : idPlace , location : location , city : city } ])
                        .then((response : AxiosResponse) => console.log(response.data))
                     } } color="success"> Update</Button>
        </Modal>
        </>
    )
}