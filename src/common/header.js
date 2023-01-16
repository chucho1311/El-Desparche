//import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Header = () => {

    //Estas variables controlan el modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Variables para guardar en el localstorage
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    //Obtiene la informacion del usuario en el local Storage
    const getToLocalStorage = () => {
        console.log(user, password)
        const userData = JSON.parse(localStorage.getItem('User'))
        console.log(userData);

        if (userData) {
            if (user === userData.user && password === userData.password) {
                localStorage.setItem('loged', JSON.stringify({ status: true }))
                handleClose()
                window.location.reload();
            }
            else {
                setError(true);
            }
        }

    }

    const redirect = useNavigate();

    return (
        <div className="header row centrar" style={{ margin: 0, padding: 0 }}>
            <div className="col-12 col-sm-3 centrar">
                <Link to={'/'}>
                    <img src='https://www.semana.com/resizer/K9XrOklr-quL_vUjZXFes67E2oA=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/V65H6NID3FBLVGRHYB7J2OFROE.jpg' alt='logo' className="img-logo" />
                </Link>
            </div>
            <h1 className='col-12 col-sm-5 centrar'>
                LA MIA PIZZA
            </h1>
            <div className="col-4 ms-sm-auto centrar">
                <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-outline-light" onClick={() => redirect('/')}>Inicio</button>
                    {/* <button type="button" className="btn btn-outline-light" >Ingresar</button> */}
                    <Button variant="outline-light" onClick={handleShow}>
                        Ingresar
                    </Button>

                    <button type="button" className="btn btn-outline-light" onClick={() => redirect('/about')}><i className="zmdi zmdi-shopping-cart zmdi-hc-2x"></i> </button>
                </div>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingresar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-floating mb-3 ">
                        <input onChange={(e) => setUser(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3 ">
                        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Password</label>
                    </div>
                    {error
                        ? <label style={{ color: "red" }}>Usuario o contraseña incorrecta</label>
                        : <></>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => redirect('/login')}>
                        Registrarse
                    </Button>
                    <Button variant="primary"
                        onClick={() => {
                            getToLocalStorage()
                        }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Header;