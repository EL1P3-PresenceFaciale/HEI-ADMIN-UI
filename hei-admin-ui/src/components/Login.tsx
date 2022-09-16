import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import LoginIcon from '@mui/icons-material/Login';
import LockIcon from '@mui/icons-material/Lock';
import { Button } from '@mui/material';

export default function Login(){

    const [ show , isShown ] = useState<boolean>(false);

    return (
        <>
            <div className="login">
                <form action="" className='loginForm'>
                        <span> <LockIcon sx={{ position : 'relative' , top: '15%' , left: '47%' , fontSize: '300%'}} /> </span>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your username"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput2" className="form-label">Password</label>
                            <input type={`${show ? "text" : "password"}`} className="form-control" id="exampleFormControlInput2" placeholder="Your password"/>
                        </div>
                        <span onClick={()=> isShown(!show)} id="showIcon" style={{ cursor : 'pointer' }}>{ show ? <Visibility sx={{ position : 'relative' , bottom: '9.3%', left: '83%', fontSize: "180%" }} /> : <VisibilityOffIcon sx={{ position : 'relative' , bottom: '9.3%', left: '83%', fontSize: "180%" }} /> }</span>
                </form>
                <Button variant='contained' sx={{ width: '20%' , textAlign: 'center' , margin: 'auto'}} >
                   <h6 style ={{ margin: 'auto 0.5vw' }}>Log In</h6> 
                    <LoginIcon/> </Button>
            </div>
        </>
    )
}  