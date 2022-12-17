import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function Events ({state}) {
    return (
        <div>{JSON.stringify(state)}</div>
    )
}

export default Events;