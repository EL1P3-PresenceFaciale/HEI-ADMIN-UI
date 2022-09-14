import React, { useState, useRef, useEffect,  FormEvent } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Face: React.FC = () => {

    const [photo, setPhoto] = useState<string>("")
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLCanvasElement | null>(null);

const getVideo = () => {
    navigator.mediaDevices
        .getUserMedia({
            video: { width:1920, height: 1080}
        })
        .then(stream => {
            let video = videoRef.current;
            video!.srcObject = stream;
            (video && video!.play().catch((err)=>console.log(err)))
        })
        .catch((err) => {
            console.log(err);
            
        })
}

const takePhoto = () =>{
    const width = 414;
    const height = width / (16/9);

    let video:HTMLVideoElement = videoRef.current!;
    let photo:HTMLCanvasElement = photoRef.current!;

    photo!.width = width!;
    photo.height = height;
    
    let ctx = photo.getContext('2d');
    ctx!.drawImage(video, 0, 0, width, height)
    console.log(photo.toDataURL())
    setPhoto(photo.toDataURL())
}


useEffect(()=>{
    getVideo();
}, [videoRef])
const log = (e: FormEvent<HTMLCanvasElement>) => {
    console.log(e.target)
}
    return (
        <>
           <div className='pictures'>
               <div className='video'>
                    <video ref={videoRef}></video>
                    <button onClick={takePhoto} id="take"> <CameraAltIcon/> </button>
                </div> 
                <canvas ref={photoRef}  onChange={(e)=>log(e)} style={{display: 'none'}}></canvas>
                { photo && <img src={photo} id="pic" alt="Your pic"/>}
           </div> 
        </>
    )
}

export default Face;