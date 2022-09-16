import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Modal } from "./Modal";
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

export default function Places(){
    
    const [ openCreate , setOpenCreate ] = useState<boolean>(false)
    const [ openUpdate , setOpenUpdate ] = useState<boolean>(false)
    const [ idPlace , setIdPlace ] = useState<string>("")
    const [ searchTerm , setSearchTerm ] = useState<string>("")
    return (
        <>
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
                        <tr onClick={()=> {
                            setOpenUpdate(true)
                        }} >
                            <td>qsdf</td>
                            <td>qsdf</td>
                            <td>qsdf</td>
                        </tr>
                        <tr>
                            <td>oijhb</td>
                            <td>jhgf</td>
                            <td>zer</td>
                        </tr>
                        <tr>
                            <td>ok,uhn</td>
                            <td>yhbgb</td>
                            <td>zer</td>
                        </tr>
                        <tr>
                            <td>fghfg</td>
                            <td>fghfgh</td>
                            <td>fghfgh</td>
                        </tr>
                        <tr>
                            <td>yhb</td>
                            <td>ujn</td>
                            <td>ujn</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Button variant="contained"  onClick={()=> setOpenCreate(true)}  sx={{ position : 'fixed' , bottom: '5%' , right: '5%' , fontSize: '20px',  width: '6vw' , height: '6vh'}}> <AddIcon/> Add </Button> 
        <Modal open={openCreate} setOpen={setOpenCreate}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="City" variant="outlined" sx={{ mb : 4 }}/>
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> setOpenCreate(false) } > <AddIcon/> ADD</Button>
        </Modal>
        <Modal open={openUpdate} setOpen={setOpenUpdate}>
                    <TextField id="outlined-basic" label="Location" variant="outlined" sx={{ mb : 4 }}/>
                    <TextField id="outlined-basic" label="City" variant="outlined" sx={{ mb : 4 }}/>
                    <Button variant="contained" sx={{ width: "35%" , margin: "auto" }} onClick={()=> setOpenUpdate(false) } color="success"> Update</Button>
        </Modal>
        </>
    )
}