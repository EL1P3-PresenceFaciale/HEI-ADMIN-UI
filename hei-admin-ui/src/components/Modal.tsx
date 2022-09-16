import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export type ModalTypes = {
    children : React.ReactNode,
    open : boolean,
    setOpen : (values: any)=>void
}

export function Modal(props: ModalTypes) {
    const { children , open , setOpen } = props;

  return (
    <div className={`modal_${open ? "open" : ""}`}>
        <div className="overlay" onClick={()=> setOpen(false)} ></div>
        
        <div className='modal-content'>
          <span id='closeIcon'><CloseIcon onClick={()=> setOpen(false)}/></span> 
            {children}
        </div>
    </div>
  )
}
