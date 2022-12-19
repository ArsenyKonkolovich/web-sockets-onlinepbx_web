import React from 'react';
import { useState, useEffect } from 'react';
import wsConnect from './wsConnect/wsConnect';

let data = '';

function Events({ state }) {
    const [events, setEvents] = useState('');

    useEffect(() => {
        wsConnect(state, setEvents, events);  
    }, [state.isConnect])

    data += events;
    return (
        <pre>{data}</pre>
    )

}

export default Events;