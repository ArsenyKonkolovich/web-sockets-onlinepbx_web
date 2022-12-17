import React from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accountName: '',
            apiKey: '',
            calls: false,
            gateway: false,
            userRegistration: false,
            userBlf: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value
        });
    }

    invertParams(param) {
        this.setState({ [param]: !this.state[param] })
        console.log(`${param} is ${this.state[param]}`);
    }

    render() {
        return (
            <form>
                <div className="input-group mb-3 mt-3">
                    <input type="text" value={this.state.accountName} onChange={this.handleInputChange} name="accountName" className="form-control" placeholder="Аккаунт" aria-label="Аккаунт" aria-describedby="basic-addon2"></input>
                    <span className="input-group-text" id="basic-addon2">.onlinepbx.ru</span>
                </div>
                <div className="input-group mb-3">
                    <input type="text" value={this.state.apiKey} onChange={this.handleInputChange} name="apiKey" className="form-control" placeholder="Api ключ" aria-label="Api ключ" aria-describedby="basic-addon2"></input>
                </div>

                <h4 className='mt-4'>Группы событий</h4>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={() => {
                        this.invertParams('calls');
                    }} role="switch" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Calls</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={() => {
                        this.invertParams('gateway');
                    }} role="switch" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Gateway</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={() => {
                        this.invertParams('userRegistration');
                    }} role="switch" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">User registration</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={() => {
                        this.invertParams('userBlf');
                    }} role="switch" id="flexSwitchCheckDefault"></input>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">User blf</label>
                </div><button type="button" onClick={() => console.log(this.state)} className="btn btn-primary mt-3">Подключиться</button>
            </form>
        );
    }
}


export default Form;