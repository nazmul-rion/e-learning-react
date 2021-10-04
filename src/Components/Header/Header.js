import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-custom-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={Logo} alt="..." className="d-inline-block align-text-top me-2" style={{ width: "30px", height: "30px" }} />
                        <b>E Learning</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  me-auto mb-2 mb-lg-0 fw-bold">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/course">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactUs">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/instractor-profile">Our Instractor</Link>
                            </li>
                        </ul>
                        {
                            <button className="btn btn-danger">Register</button>
                        }
                        <Link className="text-dark fs-3 ms-lg-3" to="/cart"><i className="fas fa-shopping-cart"></i></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
