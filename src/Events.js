import React from 'react';
import { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import wsConnect from './wsConnect/wsConnect';

let data = '';

function Events({ state }) {
    const [events, setEvents] = useState('');

    useEffect(() => {
        if(state.isConnect === true) {
        wsConnect(state, setEvents, events);
        }
    }, [state.isConnect])

    data += events;
    console.log('State', state);
    console.log('Events', events);
    console.log('Data', data);
    return (
        <pre>{data}</pre>
    )

}

export default Events;