import Header from "../common/header";
import Footer from "../common/footer";
import { useNavigate } from 'react-router-dom';

const Formulario = () => {

    const redirect = useNavigate();

    return (
        <div className="col-12" style={{ margin: 0, padding: 0 }}>
            <Header />
            <div className="body row justify-content-center" style={{ margin: 0 }}>
                <div className="col-1"></div>
                <div className="col">
                    <div className="row" style={{ margin: "10px" }}>
                        <div className="col-12 col-sm-4">
                            <h3>Nombre</h3>
                            <input className="col-12" type='text' />
                        </div>
                        <div className="col-12 col-sm-4">
                            <h3>Fecha de nacimiento</h3>
                            <input type='date' />
                        </div>
                    </div>
                    <div className="row" style={{ margin: "10px" }}>
                        <h3>¿Dispone Ud. De acceso a Internet en su hogar?</h3>
                        <form className="col-4">
                            <input type='radio' /> si <br />
                            <input type='radio' /> no <br />
                        </form>
                        <hr />
                    </div>
                    <div className="row" style={{ margin: "10px" }}>
                        <h3>¿Cuál es el equipo que utiliza para conectarse a Internet en su hogar?</h3>
                        <select className="col-4">
                            <option>Seleccione</option>
                            <option>Portatil</option>
                            <option>Ordenador (pc)</option>
                            <option>Tabletl</option>
                            <option>Telefono movil</option>
                            <option>Otro</option>
                        </select>
                        <hr />
                    </div>
                    <div className="row" style={{ margin: "10px" }}>
                        <h3>¿Con que frecuencia usa internet al dia?</h3>
                        <form className="col-4">
                            <input type='radio' /> 2-5 horas <br />
                            <input type='radio' /> 6-8 horas <br />
                            <input type='radio' /> 8-12 horas <br />
                            <input type='radio' /> +12 horas <br />
                        </form>
                        <hr />
                    </div>
                    <div className="row" style={{ margin: "10px" }}>
                        <h3>¿Que compañia proveedora de internet utiliza?</h3>
                        <form className="col-4">
                            <input type='radio' /> claro <br />
                            <input type='radio' /> tigo <br />
                            <input type='radio' /> movistar <br />
                            <input type='radio' /> otro <br />
                        </form>
                        <hr />
                    </div>
                    <div className="row" style={{ margin: "10px" }}>
                        <h3>¿Esta satisfecho con su proveedor de internet?</h3>
                        <form className="col-4">
                            <input type='radio' /> si <br />
                            <input type='radio' /> no <br />
                        </form>
                        <hr />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={() => redirect('/')}>Enviar</button>


                </div>
                <div className="col-1"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Formulario;