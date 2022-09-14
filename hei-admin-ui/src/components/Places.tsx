import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { Modal } from "./Modal";

export default function Places(){
    
    const [ open , setOpen ] = useState<boolean>(false)
    
    return (
        <div>
            <Button onClick={()=> setOpen(true)}>Open modal</Button>
            <Modal open={open} setOpen={setOpen}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{ mb : 4 , mt : 4  }} />
              <TextField id="outlined-basic" label="ouououou" variant="outlined" sx={{ mb : 4 }}/>
              <TextField id="outlined-basic" label="sdfhj" variant="outlined" sx={{ mb : 4 }}/>
            </Modal>
        </div>

    )
}