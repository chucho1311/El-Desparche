import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from "../common/header";
import Data from "../data.json"
import Carousel from 'react-bootstrap/Carousel';
import foto2 from '../images/restaurante3.jpeg'
import Footer from '../common/footer';


const Discotecas = () => {

    const redirect = useNavigate();

    //Se optiene el Id y se seleciona la categoria seleccionada
    let { id } = useParams();
    id = parseInt(id)
    let arr = Data.discotecas.filter((info) => id === info.id)
    let dataDiscotecas = arr[0]
    //console.log(dataRestaurant)

    //se obtiene informacion del usuario en el localStorage
    const userData = JSON.parse(localStorage.getItem("User"));

    useEffect(() => {
        window.scrollTo(0, 1)
    }, [])

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <Header />
            <div className="body  row justify-content-center" style={{ margin: 0 }}>
                <div className="col-1"></div>
                {userData
                    ? <div className="col">
                        <div className="row">
                            <div className="col-12 col-sm-6 centrar blur-in-expand">
                                <img className="img-places" src={dataDiscotecas.photo} alt="Discotecas" />
                            </div>
                            <div className="col info-places centrar">
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Nombre</th>
                                            <td>{dataDiscotecas.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dirección</th>
                                            <td>{dataDiscotecas.address}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Numero</th>
                                            <td><i className="zmdi zmdi-whatsapp zmdi-hc-lg"></i> {dataDiscotecas.number}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Instagram</th>
                                            <td>{dataDiscotecas.instagram}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row centrar" style={{ margin: "10px" }}>
                            <h5 className="col-12 col-sm-6 centrar description">
                                Domino's Pizza es una empresa de comida rápida estadounidense de restaurantes, especializada en la elaboración de pizzas. Con sede en Ann Arbor, Míchigan.
                                Fundada por Tom Monaghan y James Monaghan en 1960, quien había abierto su primera pizzería en Ypsilanti (Míchigan).
                                En la actualidad cuenta con más de 14 500 establecimientos (más de 5000 solo en Estados Unidos, la mayor del país superando a Pizza Hut y Little Caesars)
                                y está establecida en 89 países y territorios.[1]​[2]​ El máximo accionista desde 1998 es el fondo de capital riesgo Bain Capital.
                            </h5>
                            <div className='col-12 col-sm-6 centrar' style={{ height: "500px" }}>
                                <div style={{ display: 'block', width: "700px" }}>
                                    <Carousel>
                                        <Carousel.Item interval={30000}>
                                            <img
                                                className="d-block w-100 img-carousel"
                                                src={dataDiscotecas.photo}
                                                alt="One"
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                        <Carousel.Item interval={30000}>
                                            <img
                                                className="d-block w-100 img-carousel"
                                                src={foto2}
                                                alt="Two"
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>

                    </div>
                    : <button type="button" className="btn btn-primary" onClick={() => redirect('/')}>Inicio</button>}
                <div className="col-1"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Discotecas;