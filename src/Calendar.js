import React, { useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interaction from '@fullcalendar/interaction'
import {events} from './Events'
import {someObject} from './Events'
import {v4 as uuidv4} from 'uuid';
//IMPORTING THE SMALL TOOL TIPPY.js THAT CREATES THE TOOLTIP THAT HOVERS
import tippy from 'tippy.js'
import 'tippy.js/themes/material.css';

export default function Calendar() {
    //THE FOLLOWING MAP ADDS TO THE EVENT OBJECT YOUR NEW OBJECT
    events.map((e) => {
        e.extendedProps = {...someObject, id:uuidv4()}; // THE someObject is imported from Events.js, is your future object
        //e.className = JSON.stringify(e.extendedProps.id); NOT NEEDED ANYMORE
        return e;
    })    
    const handleMouseEnter = (info) => {
      //THIS CREATES THE TOOLTIP THAT WILL APPEAR UPON HOVERING, CREATED AT THE LOCATION OF THE EVENT
      //WHICH IS info.el(html element)
      tippy(info.el, {
        content: `<strong>NAME</strong>:${info.event.extendedProps.name}<br>
        <strong>ID</strong>:${info.event.extendedProps.id}<br>
        <strong>OCCUPATION</strong>:${info.event.extendedProps.occupation}`,
        theme: 'material',
        allowHTML: true
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
    //THE EVENT
    eventMouseEnter={handleMouseEnter}
  />

  )
}
