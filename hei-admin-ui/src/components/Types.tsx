export type modal = {
    open : boolean,
    setOpen : (values: any) => void,
    handleOpen : (values: any) => void,
    handleClose : (values : any) => void
}

export type Place = {
  id: string,
  location: string,
  city: string
}

export type PlaceList = Place[]

export interface EventPart{
    id: string,
    ref: string,
    event_id: string,
    status: string
  }

export type CreateEventPart = 
  [
    {
      event_id: string,
      group_id: string
    }
  ]


export type EventPartList = EventPart[]
 
export interface Event {
    idEvent: string,
    eventName: string,
    eventDescription: string,
    startTime: string,
    endingTime: string,
    place: string,
    responsible: string      
}

export type EventList = Event[]