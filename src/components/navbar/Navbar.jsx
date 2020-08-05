import React from "react"
import { Link, Router } from "react-router-dom"
import "./Navbar.scss"
import logo from "../../images/logo.png"

function Nav() {
    return (

        <nav className="navbar navbar-expand-sm navbar-light" id="nav_bar">
            <a class="navbar-brand" id="logo" href="#"><img src={logo} alt="logo"/></a>
            <ul className="navbar-nav" id="itens">
                <li className="nav-item ">
                    <a className="nav-link" style={{color:"white"}} href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" style={{color:"white"}} href="#">Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"style={{color:"white"}} href="#">Support</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"style={{color:"white"}} href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="login" href="#">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav