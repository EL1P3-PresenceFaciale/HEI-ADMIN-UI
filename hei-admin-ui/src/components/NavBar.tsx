import React, { useState } from "react";
import hei from "../hei.png";
import { useNavigate } from "react-router-dom";

export default function NavBar(){

    const [ active , isActive ] = useState<string | undefined>("present")
    const navigate = useNavigate()

    return (
        <div className="nav">
            <div className="navLogo" >
                <img src={hei} alt="hei"  id="logohei" /> 
                <h3 style={{ fontWeight: '500' , paddingTop : '1.5vh' }}>Admin</h3>
            </div>
            <div className="navLinks">
                <ul>
                   <li  className={`${active === 'present' && 'present'}`}  onClick={()=> {
                    isActive("present");
                    navigate("/")} 
                   }
                    >Facial</li>
                   <li className={` ${active === 'event' && 'event'}`} onClick={()=> {
                    isActive("event")
                    navigate("/events")
                    }} >Events</li> 
                   <li className={` ${active === 'places' && 'places'}`} onClick={()=> {
                    isActive("places")
                    navigate("/places")
                    }} 
                    >Places</li> 
                    <li className={` ${active === 'login' && 'login'}`} onClick={()=> {
                    isActive("/login")
                    navigate("/login")
                    }}>
                        Login
                    </li>
                </ul>
            </div>
        </div>
    )
}