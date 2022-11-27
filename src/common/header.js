import { useState, useEffect } from "react";
import logo from '../images/logo-pato.png';
import { Link } from "react-router-dom"


const Header = () => {

    return (
        <div className="header row centrar" style={{ margin: 0, padding: 0 }}>
            <div className="col-12 col-sm-3 centrar">
                <Link to={'/'}>
                    <img src={logo} alt='logo' className="img-logo" />
                </Link>
            </div>
            <div className="col-5 ms-sm-auto centrar">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-light">Home</button>
                    <button type="button" className="btn btn-outline-light">Places</button>
                    <button type="button" className="btn btn-outline-light">About </button>
                </div>
            </div>
        </div>
    )
}

export default Header;