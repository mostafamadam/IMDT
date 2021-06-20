import React, { Component } from 'react';
import axios from 'axios'
import style from './Register.module.css'
class Register extends Component {
    user = {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        password: ""
    }
    getFormData = (e) => {
        this.user[e.target.name] = e.target.value;
    }
    submitData = async (e) => {
        e.preventDefault();
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signup", this.user);
        this.props.history.replace("/Login");
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center mt-5">
                    <div className="col-9">
                        <div className="register text-white">
                            <div className="title">
                                <h1>Registeration form</h1>
                            </div>
                            <div className="register_form">
                                <form onSubmit={this.submitData}>
                                    <div className="form-group">
                                        <label htmlFor="registerFirstName">first name :</label>
                                        <input onBlur={this.getFormData} name="firstName" type="text" className="form-control" id="registerFirstName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="registerLastName">last name :</label>
                                        <input onBlur={this.getFormData} name="lastName" type="text" className="form-control" id="registerLastName" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="registerAge">age :</label>
                                        <input onBlur={this.getFormData} name="age" type="number" className="form-control" id="registerAge" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="registerEmail">email :</label>
                                        <input onBlur={this.getFormData} name="email" type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="registerPassword">password :</label>
                                        <input onBlur={this.getFormData} name="password" type="password" className="form-control" id="registerPassword" />
                                    </div>
                                    <button type="Register" className={`${style.mainbtn} btn btn-primary`}>Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
