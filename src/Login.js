import React from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLoginValue: '',
            inputPasswordValue: '',
        };
    }

    handleInputLogin = (e) => {
        const inputLoginValue = e.target.value.trim();
        this.setState({
            inputLoginValue: inputLoginValue,
        });
    };

    handleInputPassword = (e) => {
        const inputPasswordValue = e.target.value.trim();
        this.setState({
            inputPasswordValue: inputPasswordValue,
        });
    };

    handleClickGoToDashboard = (e) => {
        e.preventDefault();
        let path = `/Dashboard`;
        this.props.history.push(path);
    };

    render() {
        return (
            <div className="wrap">
                <div className="login" >
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label
                            htmlFor="inputLogin"
                            className="sr-only">Login</label>
                        <input type="text"
                            id="inputLogin"
                            className="form-control"
                            placeholder="Login"
                            required
                            autoFocus
                            value={this.state.inputLoginValue}
                            onChange={this.handleInputLogin}
                        ></input>
                        <label
                            htmlFor="inputPassword"
                            className="sr-only">Password</label>
                        <input
                            type="password"
                            id="inputPassword"
                            className="form-control"
                            placeholder="Password"
                            required
                            value={this.state.inputPasswordValue}
                            onChange={this.handleInputPassword}
                        ></input>
                        <button
                            id='btnLogin'
                            className="btn btn-lg btn-primary"
                            type="submit"
                            disabled={!(this.state.inputLoginValue && this.state.inputPasswordValue)}
                            onClick={this.handleClickGoToDashboard}
                        >Sign in</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);