// import "./styles.css";
import axios from 'axios'
import fileDownload from 'js-file-download'

function Menu() {
    const handleClick = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
            .then((res) => {
                fileDownload(res.data, filename)
            })
    }
    return (
        <button className='btn btn-outline-dark ' onClick={() => { handleClick('https://thumbs.dreamstime.com/z/pizzer%C3%ADa-men%C3%BA-con-pizzas-de-pantalla-pizarra-pizza-completa-185071809.jpg', 'menu') }}>
            Descargar Menu
        </button>
    );
}


export default Menu;
