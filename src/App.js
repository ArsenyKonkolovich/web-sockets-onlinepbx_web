import { useReducer } from "react";
import _ from "lodash";
import Form from "./Form";
import Events from "./Events";

const marginEvents = {
  marginLeft: "30vw",
};

const margin = {
  marginLeft: "10vw",
};

const FORM_ACTIONS = {
  setAccountName: "setAccountName",
  setApiKey: "setApiKey",
  setCalls: "setCalls",
  setGateway: "setGateway",
  setIsConnect: "setIsConnect",
  setUserBlf: "setUserBlf",
  setUserRegistration: "setUserRegistration",
};

const initialState = {
  accountName: "",
  apiKey: "",
  calls: false,
  gateway: false,
  isConnect: false,
  userRegistration: false,
  userBlf: false,
};

const reducer = (state, action) => {
  const newState = _.cloneDeep(state);
  switch (action.type) {
    case FORM_ACTIONS.setAccountName:
      return { ...newState, accountName: action.payload.name };
    case FORM_ACTIONS.setApiKey:
      return { ...newState, apiKey: action.payload.name };
    case FORM_ACTIONS.setCalls:
      return { ...newState, calls: !action.payload.eventName };
    case FORM_ACTIONS.setGateway:
      return { ...newState, gateway: !action.payload.eventName };
    case FORM_ACTIONS.setIsConnect:
      return { ...newState, isConnect: !action.payload.eventName };
    case FORM_ACTIONS.setUserBlf:
      return { ...newState, userBlf: !action.payload.eventName };
    case FORM_ACTIONS.setUserRegistration:
      return { ...newState, userRegistration: !action.payload.eventName };
    default:
      return newState;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <header className="w-100 position-fixed bd-header bg-dark py-3 d-flex align-items-stretch border-bottom border-dark">
        <div className="container-fluid d-flex align-items-center">
          <h1 className="d-flex align-items-center fs-4 text-white mb-0">
            <img
              src="./img/onpbx_icon2.jpeg"
              width="38"
              height="38"
              className="me-3"
              alt="onpbx_icon"
            />
            OnlinePBX Websockets 3.0
          </h1>
        </div>
      </header>
      <div style={margin}>
        <div className="row">
          <div className="col-3 mt-5 me-5 pt-5 position-fixed">
            <div id="list-example" className="list-group">
              <Form state={state} dispatch={dispatch} />
            </div>
          </div>
          <div className="col-7 mt-5  pt-5 text-right" style={marginEvents}>
            <div>
              <Events state={state} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
