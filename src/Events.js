import React from "react";
import { useState, useEffect } from "react";
import wsConnect from "./wsConnect/wsConnect";

let data = "";

function Events({ state }) {
    const [events, setEvents] = useState("");

    useEffect(() => {
        if (state.accountName && state.apiKey) wsConnect(state, setEvents);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.isConnect]);

    data += events;
    return <pre>{data}</pre>;
}

export default Events;
