import Data from "../../data.json"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getBucaramangaRestaurants, getFloridaRestaurants, getGironRestaurants } from "../../common/getRestaurants.js"

const Principal = () => {

    const [bucaramanga, setBucaramanga] = useState([]);
    const [florida, setFlorida] = useState([])
    const [giron, setGiron] = useState([])

    useEffect(() => {
        getBucaramangaRestaurants()
            .then((res) => {
                setBucaramanga(res.data);
            })
        getFloridaRestaurants()
            .then((res) => {
                setFlorida(res.data);
            })
        getGironRestaurants()
            .then((res) => {
                setGiron(res.data);
            })
    }, [])

    // console.log(bucaramanga);
    const [topicSelected, setTopicSelected] = useState(Data.restaurants);
    const [city, setCity] = useState('bucaramanga')

    return (
        <div className="col ">
            <div className="row justify-content-center" style={{ margin: 0 }}>

                <div className="col-12 centrar" style={{ maxWidth: "400px", margin: "10px", marginBottom: "15px" }}>
                    {/* <h4 style={{margin:"5px"}}>Categorias</h4> */}
                    <select className="form-select" aria-label="Default select example">
                        <option>Seleccione una ciudad</option>
                        <option value="1" onClick={() => {
                            setTopicSelected(bucaramanga)
                            setCity('bucaramanga')
                        }}>Bucaramanga</option>
                        <option value="2" onClick={() => {
                            setTopicSelected(florida)
                            setCity('florida')
                        }}>Florida</option>
                        <option value="3" onClick={() => {
                            setTopicSelected(giron)
                            setCity('giron')
                        }}>Giron</option>
                    </select>
                </div>
            </div>
            {/* <h2 className="row centrar blur-in-expand"> Lugares</h2> */}

            <div className="row centrar slide-rotate-horizontal-bottom">
                {topicSelected.map((info, indx) => {
                    return (
                        <Link to={`/restaurant/${city}/${info.id}`} className="col-12 col-sm-10 col-md-5 col-lg-3 home-card" key={indx}>
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
    )
}

export default Principal;