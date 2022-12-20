import Header from "../common/header";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 1)
    }, [])

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <Header />
            <div className="body row justify-content-center" style={{ margin: 0 }}>
                <div className="col-1"></div>
                <div className="col">
                    <div className="row">
                        <h2 className="col centrar">
                            Contactanos
                        </h2>
                        
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
    )
}

export default About;