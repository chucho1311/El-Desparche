import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="footer row justify-content-center" style={{ margin: 0, paddingTop: "30px", paddingBottom: "20px" }}>
            <div className="col-10 col-sm-5 col-md-3">
                <div className='row' >
                    <h3 className='col-12'> Síguenos</h3>
                    <div className="col-5">
                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example" >
                            <a href="https://wa.link/6lke6n"><button type="button" className="btn btn-outline-light" style={{ border: "none" }}><i className="zmdi zmdi-whatsapp zmdi-hc-2x"></i></button></a>
                            <a href="https:instagram.com"><button type="button" className="btn btn-outline-light" style={{ border: "none" }}><i className="zmdi zmdi-instagram zmdi-hc-2x"></i></button></a>
                            <a href="https://twitter.com/Stephii_08?t=g7CFpYH_0IWy0haKGSKdig&s=09"><button type="button" className="btn btn-outline-light" style={{ border: "none" }}><i className="zmdi zmdi-twitter zmdi-hc-2x"></i></button></a>
                            <a href="https://www.facebook.com/people/Stefanny-Boh%C3%B3rquez/100085467005408/?mibextid=ZbWKwL"> <button type="button" className="btn btn-outline-light" style={{ border: "none" }}><i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i></button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-10 col-sm-5 col-md-4 col-lg-4 col-xl-3'>
                <div className='row'>
                    <h3 className='col-12'>Contactenos</h3>
                    <span className="col-12">JUAN JOSÉ RINCÓN MÉNDEZ - LÍDER DEL GRUPO</span>
                    <span className="col-12">LIZETH FERNANDA ROPERO CARDENAS</span>
                    <span className="col-12">YULY STEFANNY BOHORQUEZ BOHORQUEZ</span>
                    <span className="col-12">DIEGO FERNANDO MARÍN SISA</span>
                    <span className="col-12">ESTEFANIA OSMA LLANES</span>
                    <span className='col-12'>Formulario sobre internet</span>
                    {/* <span className='col-12'>Terminos y Condiciones</span> */}
                </div>

            </div>
            <div className='col-10 col-sm-5 col-md-4 col-lg-4 col-xl-3'>
                <div className='row'>
                    <h3 className='col-12'>Formulario</h3>
                    <Link to={"/formulario"} className='col-12'><span>Formulario sobre internet</span></Link>
                </div>

            </div>
        </div>
    )
}

export default Footer;