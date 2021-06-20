import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import style from "./Login.module.css";
import axios from 'axios';
import { connect } from 'react-redux';

class Login extends Component {
    state = {
        error: ""
    }
    user = {
        email: "",
        password: ""
    }
    getFormData = (e) => {
        this.user[e.target.name] = e.target.value;
    }
    sendData = async (e) => {
        e.preventDefault();
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signin", this.user);
        if (data.message !== "success") {
            this.setState({
                error: data.message
            })
        } else {
            localStorage.setItem("token", data.token);
            this.props.LoginFunc(true);
            this.props.history.replace("/Home");
        }
    }
    render() {
        let token = localStorage.getItem("token");
        if (token) {
            return (
                <Redirect to="/Home" />
            );
        } else {
            return (
                <div className="container">
                    <div className="row justify-content-center align-items-center mt-5">
                        <div className="col-9">
                            <div className="login text-white">
                                <div className="title">
                                    <h1>Login form</h1>
                                </div>
                                <div className="login_form">
                                    <form onSubmit={this.sendData}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">email :</label>
                                            <input onBlur={this.getFormData} name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">password :</label>
                                            <input onBlur={this.getFormData} name="password" type="password" className="form-control" id="exampleInputPassword1" />
                                        </div>{this.state.error !== "" ? <div className="alert alert-danger text-center">{this.state.error}</div> : ""}
                                        <span>don't have account ? <Link to="/register">register</Link></span>
                                        <button type="submit" className={`${style.mainbtn} btn btn-primary`}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function LoginactionCreator(state) {
    return {
        LoggedIn: state.LoggedIn
    }
}

function Logindispatcher(Logindispatch) {
    return {
        LoginFunc: function (LoggedIn) {
            return Logindispatch({ type: "Login", LoggedIn: LoggedIn })
        }
    }
}

export default connect(LoginactionCreator, Logindispatcher)(Login);
