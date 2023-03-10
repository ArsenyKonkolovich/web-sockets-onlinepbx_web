import React from "react";

export function Form({ state, dispatch }) {
  const FORM_ACTIONS = {
    setAccountName: "setAccountName",
    setApiKey: "setApiKey",
    setCalls: "setCalls",
    setGateway: "setGateway",
    setIsConnect: "setIsConnect",
    setUserBlf: "setUserBlf",
    setUserRegistration: "setUserRegistration",
  };

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    return dispatch({ type: FORM_ACTIONS[name], payload: { name: value } });
  };

  const invertParams = (eventName, propName) => {
    return dispatch({
      type: FORM_ACTIONS[eventName],
      payload: { eventName: state[propName] },
    });
  };
  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={handleInputChange}
          name="setAccountName"
          className="form-control"
          placeholder="Аккаунт"
          aria-label="Аккаунт"
          aria-describedby="basic-addon2"
        ></input>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          onChange={handleInputChange}
          name="setApiKey"
          className="form-control"
          placeholder="Api ключ"
          aria-label="Api ключ"
          aria-describedby="basic-addon2"
        ></input>
      </div>

      <h4 className="mt-4">Группы событий</h4>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            invertParams("setCalls", "calls");
          }}
          role="switch"
          id="calls"
        ></input>
        <label className="form-check-label" htmlFor="calls">
          Calls
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            invertParams("setGateway", "gateway");
          }}
          role="switch"
          id="gateway"
        ></input>
        <label className="form-check-label" htmlFor="gateway">
          Gateway
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            invertParams("setUserBlf", "userBlf");
          }}
          role="switch"
          id="userBlf"
        ></input>
        <label className="form-check-label" htmlFor="userBlf">
          User blf
        </label>
      </div>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            invertParams("setUserRegistration", "userRegistration");
          }}
          role="switch"
          id="userRegistration"
        ></input>
        <label className="form-check-label" htmlFor="userRegistration">
          User registration
        </label>
      </div>
      <button
        type="button"
        onClick={() => {
          invertParams("setIsConnect", "isConnect");
        }}
        className="btn btn-primary mt-3"
      >
        Подключиться
      </button>
    </form>
  );
}

export default Form;
