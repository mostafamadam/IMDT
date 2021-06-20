import axios from 'axios';
import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import style from "./Navbar.module.css"
import { connect } from 'react-redux';
class Navbar extends Component {
    state = {
        LoggedIn: ""
    }
    user = {
        token: ""
    }

    Logout = async () => {
        this.user.token = localStorage.getItem("token");
        let { data } = await axios.post("https://route-egypt-api.herokuapp.com/signOut", this.user)
        if (data.message === "success") {
            localStorage.removeItem("token");
            this.props.history.replace("/Login");
            this.setState({
                LoggedIn: false
            })
        }
    }
    render() {
        return (
            <div className="">
                <nav className={`${style.Main_bg_color} ${style.Navbar_border} navbar navbar-expand-lg navbar-dark`}>
                    <NavLink className={`${style.NavBar_logo} navbar-brand`} to="/Home">IMDT</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline ml-auto my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <ul className={`${style.navbar_nav} navbar-nav`}>
                            <li data-target="#navbarSupportedContent" className="nav-item">
                                <i className={`${style.navIcon} fab fa-facebook`}></i>
                            </li>
                            <li data-target="#navbarSupportedContent" className="nav-item">
                                <i className={`${style.navIcon} fab fa-spotify`}></i>
                            </li>
                            <li data-target="#navbarSupportedContent" className="nav-item">
                                <i className={`${style.navIcon} fab fa-instagram`}></i>
                            </li>
                            <li data-target="#navbarSupportedContent" className="nav-item">
                                <i className={`${style.navIcon} fab fa-youtube`}></i>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-lg-4">
                            <li className="nav-item">
                                {localStorage.getItem("token") ? <NavLink onClick={this.Logout} to="/Login"><button data-target="#navbarSupportedContent" className={`${style.logOut} nav-link`}>Logout</button></NavLink> : <NavLink to="/Login"><button data-target="#navbarSupportedContent" className={`${style.logOut} nav-link`}>Login</button></NavLink>}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function NavbaractionCreator(state) {
    return {
        LoggedIn: state.LoggedIn
    }
}

export default connect(NavbaractionCreator, null)(Navbar);
