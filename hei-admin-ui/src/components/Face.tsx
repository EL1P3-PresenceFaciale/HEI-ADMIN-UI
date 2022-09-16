import React, { useState, useRef, useEffect,  FormEvent } from 'react';

const Face: React.FC = () => {

    const [photos, setPhoto] = useState<string>("")
    const [ photoByte , setPhotoByte ] = useState<ArrayBufferLike>()
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

function _base64ToArrayBuffer(base64: string) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes.buffer;
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
    console.log("ito ny photos  "+ photo.toDataURL());
    
    setPhotoByte(_base64ToArrayBuffer(photos))
    console.log(_base64ToArrayBuffer(photos));
    
    //console.log("ARRAYBFFER  +"+ photoByte);
    
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
                    <button onClick={takePhoto} id="take"> Take picture </button>
                </div> 
                <canvas ref={photoRef}  onChange={(e)=>log(e)} style={{display: 'none'}}></canvas>
                { photos && <img src={photos} id="pic" alt="Your pic"/>}
           </div> 
        </>
    )
}

export default Face;