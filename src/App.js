import { useReducer } from 'react'
import _ from 'lodash'
import Form from "./Form"
import Events from "./Events"

const FORM_ACTIONS = {
    setAccountName: "setAccountName",
    setApiKey: "setApiKey",
    setCalls: "setCalls",
    setGateway: "setGateway",
    setUserBlf: "setUserBlf",
    setUserRegistration: "setUserRegistration",
}


const initialState = {
    accountName: '',
    apiKey: '',
    calls: false,
    gateway: false,
    userRegistration: false,
    userBlf: false
}

const reducer = (state, action) => {
    const newState = _.cloneDeep(state)
    console.log(newState, action);
    switch (action.type) {
        case FORM_ACTIONS.setAccountName:
            return {...newState, accountName: action.payload.name};
        case FORM_ACTIONS.setApiKey:
            return {...newState, apiKey: action.payload.name};
        case FORM_ACTIONS.setCalls:
            return {...newState, calls: !action.payload.eventName};
        case FORM_ACTIONS.setGateway:
            return {...newState, gateway: !action.payload.eventName};
        case FORM_ACTIONS.setUserBlf:
            return {...newState, userBlf: !action.payload.eventName};
        case FORM_ACTIONS.setUserRegistration:
            return {...newState, userRegistration: !action.payload.eventName};
        default:
            return newState;
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    

    return (
    <div>
    <header class="bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
        <div class="container-fluid d-flex align-items-center">
          <h1 class="d-flex align-items-center fs-4 text-white mb-0">
            <img src="../public/img/onpbx_icon2.jpeg" width="38" height="38" class="me-3" alt="onpbx_icon"/>
            OnlinePBX Websockets 3.0
          </h1>
        </div>
      </header>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div class="container text-center">
        <div class="row">
          <div class="col-3 text-start">
            <Form state={state} dispatch={dispatch}/>
          </div>
          <div class="col">
            <Events state={state}/>
          </div>
        </div>
      </div> 
      </div>
    )
}

export default App;