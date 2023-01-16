import { useState } from "react"
import { Link } from "react-router-dom"
import Data from "../../data.json"
import Carousel from 'react-bootstrap/Carousel';
import video from '../../images/PIZZA Spot Publicitario Trattoria.mp4'

const Landing = () => {

    return (
        <div className="col-12" style={{ display: "flex", justifyContent: "center" }}>
            <div className="row centrar">
                {/* Carousel */}
                <div className="col-12 centrar" style={{ display: 'flex', maxWidth: "900px", padding:"30px"}}>
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 img-carousel"
                                src='https://www.easypromosapp.com/blog/wp-content/uploads/ideas-promociones-restaurantes-1.webp'
                                alt="One"
                            />
                            <Carousel.Caption>
                                {/* <h3>Label for first slide</h3>
                                        <p>Sample Text for Image One</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 img-carousel"
                                src='https://anoticiados.com/wp-content/uploads/2020/01/WhatsApp-Image-2020-01-16-at-09.36.22-696x696.jpeg'
                                alt="Two"
                            />
                            <Carousel.Caption>
                                {/* <h3>Label for second slide</h3>
                                        <p>Sample Text for Image Two</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img
                                className="d-block w-100 img-carousel"
                                src='https://scontent.fbaq2-2.fna.fbcdn.net/v/t1.18169-9/10406354_10152567197456670_3920286105434590402_n.png?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=lHKn_fHSc9UAX_kbKTl&_nc_ht=scontent.fbaq2-2.fna&oh=00_AfDQrYzNndQ3XxkV_lsX7GwjAOCbgoxqtkHdXtN4Njq-4Q&oe=63ECFD3D'
                                alt="Two"
                            />
                            <Carousel.Caption>
                                {/* <h3>Label for second slide</h3>
                                        <p>Sample Text for Image Two</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-12 centrar "><h2 style={{color:"red"}}>E</h2>stas hambriento??</div>
                <label className="col-12 centrar"> Pide tu pizza a domicilio</label>
                <img style={{ maxHeight: "400px", maxWidth: "500px", padding:"50px" }} src="https://okdiario.com/img/2020/01/30/repartidor-655x368.jpg" alt="repartidor" />
                <div className="col-12 centrar" style={{height:"300px", margin:"10px"}}>
                    <iframe style={{height:"100%"}} src={video} allowFullScreen="1" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                </div>
            </div>
        </div>
    )
}

export default Landing;