import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'
import {events} from './Events'
import {someObject} from './Events'
import tippy from 'tippy.js'

export default function Calendar() {
    events.map((e) => {
        e.extendedProps = someObject; 
        e.className = JSON.stringify(e.extendedProps.id);
        return e;
    })    
    const handleMouseEnter = (info) => {
      tippy(info.el, {
        content:`THE ID: ${info.event.extendedProps.id}, THE NAME:${info.event.extendedProps.name},
        THE OCCUPATION: ${info.event.extendedProps.occupation}`,
        theme: 'solid'
      })
    }
    console.log(events)
    useEffect(()=> {

    })

  return (

    <FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
    events={events}
    eventMouseEnter={handleMouseEnter}
  />

  )
}
