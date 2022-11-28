import Header from "../common/header"
import { Link } from "react-router-dom"
import Data from "../data.json"

const Home = () => {

    const allPlaces = Data.data;

    return (
        <div className="col-12" style={{ margin: 0, padding: 0}}>
            <Header />
            <div className="body row justify-content-center" style={{ margin: 0}}>
                <div className="col-1"></div>
                <div className="col">
                    <h2 className="row centrar"> Lugares</h2>

                    <div className="row centrar">
                        {allPlaces.map((info, indx) => {
                            return (
                                <Link to={`/place/${info.id}`} className="col-2 home-card" style={{ width: "250px" }} key={indx}>
                                    <div className=" row" >
                                        <img src={info.photo} alt='place' className="img-card" />
                                        <div className="col-12 " style={{ color: "#4d8076" }}>Name: <label>{info.name}</label></div>
                                        <div className="col-12" style={{ color: "#4d8076" }}>Dirección: <label>{info.address}</label> </div>
                                        <div className="col-12" style={{ color: "#4d8076" }}>Numero: <label>{info.number}</label></div>
                                        <div className="col-12" style={{ color: "#4d8076" }}>Instagram: <label>{info.instagram}</label></div>

                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
            {/* <div className="footer row centrar" style={{ margin: 0, padding: 0 }}>
                Footer
            </div> */}
        </div>
    )
}

export default Home