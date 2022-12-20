import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Header from "../common/header";
import Data from "../data.json"
import Carousel from 'react-bootstrap/Carousel';
import foto2 from '../images/restaurante3.jpeg'
import Footer from '../common/footer';


const Parks = () => {
    
    let { id } = useParams();

    id = parseInt(id)

    let arr = Data.parks.filter((info) => id === info.id)
    let dataParks = arr[0]
    //console.log(dataRestaurant)

    useEffect(() => {
        window.scrollTo(0,1)
    },[])

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <Header />
            <div className="body  row justify-content-center" style={{ margin: 0 }}>
                <div className="col-1"></div>
                <div className="col">
                    <div className="row">
                        <div className="col-12 col-sm-6 centrar blur-in-expand">
                            <img className="img-places" src={dataParks.photo} alt="Parks"/>
                        </div>
                        <div className="col info-places centrar">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">Nombre</th>
                                        <td>{dataParks.name}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Dirección</th>
                                        <td>{dataParks.address}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Numero</th>
                                        <td><i className="zmdi zmdi-whatsapp zmdi-hc-lg"></i> {dataParks.number}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Instagram</th>
                                        <td>{dataParks.instagram}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row centrar" style={{margin:"10px"}}>
                        <h5 className="col-10 centrar description">
                            Yo ofrezco
                            desnudas, vírgenes, intactas y sencillas,
                            para mis delicias y el Parksr de mis amigos,
                            estas noches árabes vividas, soñadas y traducidas sobre su tierra natal y sobre el agua
                            Ellas me fueron dulces durante los ocios en remotos mares, bajo un cielo ahora lejano.
                            Por eso las doy.

                            Sencillas, sonrientes y llenas de ingenuidad, como la musulmana Schehrazada, su madre suculenta que las dió a luz en el misterio; fermentando con emoción en los brazos de un príncipe sublime —lúbrico y feroz—, bajo la mirada enternecida de Alah, clemente y misericordioso.
                        </h5>
                    </div>
                    <div className='row centrar' style={{ height: "500px" }}>
                        <div style={{ display: 'block', width: 700, padding: 30 }}>
                            {/* <h4>React-Bootstrap Carousel Component</h4> */}
                            <Carousel>
                                <Carousel.Item interval={30000}>
                                    <img
                                        className="d-block w-100 img-carousel"
                                        src={dataParks.photo}
                                        alt="One"
                                    />
                                    <Carousel.Caption>
                                        {/* <h3>Label for first slide</h3>
                                        <p>Sample Text for Image One</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={30000}>
                                    <img
                                        className="d-block w-100 img-carousel"
                                        src={foto2}
                                        alt="Two"
                                    />
                                    <Carousel.Caption>
                                        {/* <h3>Label for second slide</h3>
                                        <p>Sample Text for Image Two</p> */}
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <Footer/>
        </div>
    )
}

export default Parks;