
import SearchBar from "./SearchBar"
import {Modal} from "./Modal";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

export default function Event(){

    const [ openCreate , setOpenCreate ] = useState<boolean>(false)
    const [ openUpdate , setOpenUpdate ] = useState<boolean>(false)
    const [ openChoice , setOpenChoice ] = useState<boolean>(false)
    const [ idEvent , setIdEvent ] = useState<string>("")
    const [ tag , setTag ] = useState<string | undefined >()
    const [ description , setDescription ] = useState<string | undefined>()
    const [ start , setStart ] = useState<string | undefined>()
    const [ end , setEnd ] = useState<string | undefined >()
    const [ place , setPlace ] = useState<string | undefined >()
    const [ responsable , setResponsable ] = useState<string | undefined>()

    const navigate = useNavigate()
    return (
        <> 
           <SearchBar/>
           <Modal open={openCreate} setOpen={setOpenCreate}>
                    <TextField id="outlined-basic" label="Tag" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Start" variant="outlined" sx={{ mb : 4 , mt : 4  }} />
                    <TextField id="outlined-basic" label="End" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Place" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Responsable" variant="outlined" sx={{ mb : 4 }}/>
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> setOpenCreate(false) } >ADD</Button>
            </Modal>
            <Modal open={openUpdate} setOpen={setOpenUpdate}>
                    <TextField id="outlined-basic" label="Id" variant="outlined" sx={{ mb : 4 , mt : 4  }} />
                    <TextField id="outlined-basic" label="Tag" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Description" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Start" variant="outlined" sx={{ mb : 4 , mt : 4  }} />
                    <TextField id="outlined-basic" label="End" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Place" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="Responsable" variant="outlined" sx={{ mb : 4 }}/>
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> setOpenUpdate(false) } >UPDATE</Button>
            </Modal>
            <Modal open={openChoice} setOpen={setOpenChoice} >
                  <h4 style={{ margin: '20px auto' }}>What do you want to do ?</h4>
                 <Button variant="contained" sx={{ width: "35%" , margin: "auto" , mb : 2 }} onClick={()=> { 
                    setOpenChoice(false)
                    setOpenUpdate(true) 
                    }} color='success' >Edit event's informations <EditIcon/> </Button>
                  <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> {
                        //navigate("/event/{idEvent}/eventParticipant")
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
                            <th>Responsable</th>
                        </thead>
                        <tbody>
                           <tr onClick={()=>{
                                setOpenChoice(true)
                               //setId(items.idEvent)
                           }}  >
                            <td>mlkjhgfd qsdf kjrk jlksjfzleknf lkdfldksjfek jlskdjf k,dfk ,mkz,efm l,smfl ,</td>
                            <td>mlkjhgfd</td>
                            <td>mlkjhgfd</td>
                            <td>mlkjhgfd</td>
                            <td>mlkjhgfd</td>
                            <td>mlkjhgfd</td>
                            <td>mlkjhgfd</td>
                           </tr>
                           <tr>
                            <td>azer</td>
                            <td>azer</td>
                            <td>azer</td>
                            <td>azer</td>
                            <td>azer</td>
                            <td>azer</td>
                            <td>azer</td>
                           </tr>
                           <tr>
                            <td>zeghj</td>
                            <td>zeghj</td>
                            <td>zeghj</td>
                            <td>zeghj</td>
                            <td>zeghj</td>
                            <td>zeghj</td>
                            <td>zeghj</td>
                           </tr>
                           <tr>
                            <td>ijhgfd</td>
                            <td>ijhgfd</td>
                            <td>ijhgfd</td>
                            <td>ijhgfd</td>
                            <td>ijhgfd</td>
                            <td>ijhgfd</td>
                            <td>ijhgfd</td>
                           </tr>
                           <tr>
                            <td>ok</td>
                            <td>ok</td>
                            <td>ok</td>
                            <td>ok</td>
                            <td>ok</td>
                            <td>ok</td>
                            <td>ok</td>
                           </tr>
                           <tr>
                            <td>azrh</td>
                            <td>azrh</td>
                            <td>azrh</td>
                            <td>azrh</td>
                            <td>azrh</td>
                            <td>azrh</td>
                            <td>azrh</td>
                           </tr>
                           <tr>
                            <td>ol;</td>
                            <td>ol;</td>
                            <td>ol;</td>
                            <td>ol;</td>
                            <td>ol;</td>
                            <td>ol;</td>
                            <td>ol;</td>
                           </tr>
                           <tr>
                            <td>zsx</td>
                            <td>zsx</td>
                            <td>zsx</td>
                            <td>zsx</td>
                            <td>zsx</td>
                            <td>zsx</td>
                            <td>zsx</td>
                           </tr>
                           <tr>
                            <td>kjhgtr</td>
                            <td>kjhgtr</td>
                            <td>kjhgtr</td>
                            <td>kjhgtr</td>
                            <td>kjhgtr</td>
                            <td>kjhgtr</td>
                            <td>kjhgtr</td>
                           </tr>
                           <tr>
                            <td>zsxzsx</td>
                            <td>zsxzsx</td>
                            <td>zsxzsx</td>
                            <td>zsxzsx</td>
                            <td>zsxzsx</td>
                            <td>zsxzsx</td>
                            <td>zsxzsx</td>
                           </tr>
                        </tbody>
                    </table>
               </div>
           </div>
           <Button variant="contained"  onClick={()=> setOpenCreate(true)}  sx={{ position : 'fixed' , bottom: '5%' , right: '5%' , fontSize: '20px',  width: '6vw' , height: '6vh'}}> <AddIcon/> Add</Button> 
        </>
    )
}