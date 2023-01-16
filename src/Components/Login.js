import Header from "../common/header";
import Footer from "../common/footer";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Login = () => {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('.');

    // se guarda la informacion del usuario en el localStorage
    const saveLocalStorage = () => {
        let userData = {
            user: userEmail,
            password: userPassword,
            name: userName
        }
        console.log(userData);
        localStorage.setItem('User', JSON.stringify(userData));
    }

    const redirect = useNavigate()

    return (
        <div className="col-12" style={{ margin: 0, padding: 0 }}>
            <Header />
            <div className="body row justify-content-center" style={{ margin: 0 }}>
                <div className="col-1"></div>
                <div className="col ">
                    <div className="row centrar">
                        <div className="col-12 col-sm-12 col-md-5 centrar" style={{ minHeight: "400px" }}>
                            <div className="row">
                                <h5 className="centrar"> Registrarse</h5>
                                <div className="form-floating mb-3 ">
                                    <input onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Nombre</label>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input onChange={(e) => setUserEmail(e.target.value)} type="text" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input onChange={(e) => setUserPassword(e.target.value)} type="password" className="form-control" id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">Password</label>
                                </div>
                                <div className="form-floating mb-3 ">
                                    <input onChange={(e) => setUserConfirmPassword(e.target.value)} type="password" className="form-control" id="floatingInput" placeholder="123456" />
                                    <label htmlFor="floatingInput">Confirm Password</label>
                                </div>
                                {userPassword === userConfirmPassword
                                    ?
                                    <button onClick={() => {
                                        saveLocalStorage()
                                        redirect('/')
                                    }}
                                     type="button" className="btn btn-primary">
                                        Enviar
                                    </button>

                                    :
                                    <button type="button" className="btn btn-primary disabled">
                                        Enviar
                                    </button>}

                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;