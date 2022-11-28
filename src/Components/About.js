import Header from "../common/header";
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        window.scrollTo(0,1)
    },[])

    return(
        <div style={{ margin: 0, padding: 0 }}>
            <Header/>

        </div>
    )
}

export default About;