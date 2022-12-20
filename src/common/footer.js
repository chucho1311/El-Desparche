

const Footer = () => {

    return (
        <div className="footer row justify-content-center" style={{ margin: 0, paddingTop: "30px", paddingBottom:"20px" }}>
            <div className="col-10 col-sm-5 col-md-3">
                <div className='row' >
                    <h3 className='col-12'> Síguenos</h3>
                    <div className="col-5">
                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example" >
                            <button type="button" className="btn btn-outline-light" style={{border:"none"}}><i className="zmdi zmdi-whatsapp zmdi-hc-2x"></i></button>
                            <button type="button" className="btn btn-outline-light" style={{border:"none"}}><i className="zmdi zmdi-instagram zmdi-hc-2x"></i></button>
                            <button type="button" className="btn btn-outline-light" style={{border:"none"}}><i className="zmdi zmdi-facebook-box zmdi-hc-2x"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-10 col-sm-5 col-md-4 col-lg-4 col-xl-3'>
                <div className='row'>
                    <h3 className='col-12'>Soporte</h3>
                    <span className='col-12'>Contáctanos</span>
                    <span className='col-12'>Politica de Tratamientos de Datos</span>
                    <span className='col-12'>Terminos y Condiciones</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;