import Header from "../../common/header";
import Footer from "../../common/footer";
import Principal from "./Principal";
import Landing from "./Landing";

const Home = () => {

    const loginStatus = JSON.parse(localStorage.getItem("loged"));

    return (
        <div className="col-12" style={{ margin: 0, padding: 0 }}>
            <Header />
            <div className="body row justify-content-center" style={{ margin: 0 }}>
                <div className="col-1"></div>
                {loginStatus
                    ? <Principal /> //Esta pagina muestra los restaurantes despues ingresar
                    : <Landing /> /*Esta pagina muestra una landing page cuando no se ha ingre */}
                <div className="col-1"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Home