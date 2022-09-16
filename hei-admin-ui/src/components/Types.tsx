export type modal = {
    open : boolean,
    setOpen : (values: any) => void,
    handleOpen : (values: any) => void,
    handleClose : (values : any) => void
}


export interface EventPart{
    
    idEventParticipant: string,
    status: string
  }
  
export type EventPartList = EventPart[]
 
export interface Event {
    eventParticipant: {
      id: string,
      ref: string,
      first_name: string,
      last_name: string,
      sex: string,
      birth_date: string,
      address: string,
      phone: string,
      email: string,
      entrance_datetime: string,
      status: string
    },
    eventToAttend: {
      idEvent: string,
      eventName: string,
      eventDescription: string,
      startTime: string,
      endingTime: string,
      place: {
        id: string,
        placeName: string,
        city: string
      },
      eventResponsible: {
        id: string,
        ref: string,
        first_name: string,
        last_name: string,
        sex: string,
        birth_date: string,
        address: string,
        phone: string,
        email: string,
        entrance_datetime: string,
        status: string
      }
    },
}