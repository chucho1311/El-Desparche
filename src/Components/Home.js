import Header from "../common/header"
import { Link } from "react-router-dom"
import Data from "../data.json"
import Footer from "../common/footer";
import { useState } from "react";

const Home = () => {

    const [topicSelected, setTopicSelected] = useState(Data.restaurants)

    return (
        <div className="col-12" style={{ margin: 0, padding: 0 }}>
            <Header />
            <div className="body row justify-content-center" style={{ margin: 0 }}>
                <div className="col-1"></div>
                <div className="col ">
                    <div className="row justify-content-center" style={{ margin: 0 }}>
                        <h3 className="col-12 centrar">Categorias</h3>
                        <div className="centrar" style={{ maxWidth: "400px", margin: "5px", marginBottom: "15px" }}>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1" onClick={() => setTopicSelected(Data.restaurants)}>Restaurantes</option>
                                <option value="2" onClick={() => setTopicSelected(Data.discotecas)}>Discotecas</option>
                                <option value="3" onClick={() => setTopicSelected(Data.parks)}>Parques</option>
                            </select>
                        </div>
                    </div>
                    <h2 className="row centrar blur-in-expand"> Lugares</h2>

                    <div className="row centrar blur-in-expand">
                        {topicSelected.map((info, indx) => {
                            return (
                                <Link to={`/${info.topic}/${info.id}`} className="col-2 home-card" style={{ width: "250px" }} key={indx}>
                                    <div className=" row" >
                                        <img src={info.photo} alt='place' className="img-card" loading="lazy" />
                                        <div className="col-12" style={{ color: "white" }}>Name: <label>{info.name}</label></div>
                                        <div className="col-12" style={{ color: "white" }}>Dirección: <label>{info.address}</label> </div>
                                        <div className="col-12" style={{ color: "white" }}>Numero: <label>{info.number}</label></div>
                                        <div className="col-12" style={{ color: "white" }}>Instagram: <label>{info.instagram}</label></div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Home