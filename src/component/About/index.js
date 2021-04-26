import "./index.css";
import GitHub from "../../img/GitHub.png";
import Linkedin from "../../img/Linkedin.png";

function About({ onclick }) {
    
    return (
        
        <div className="About" onClick={() => onclick()}>
                    
            <div id="name">
                        
                Oriundo de Buenos Aires, Argentina.
                <br/><br/>Graduado de <a href="http://www.soyhenry.com" style={{color: "yellow"}}>Henry </a>
                con mas 500Hs de practica profesional y proyectos reales.
                <br/><br/>En busca de nuevos desafios. . .
            
            </div>

            <div id="icons">

                <a href="https://github.com/RodriguezIbrahin" target="_blank">

                    <img src={GitHub} height="50px"/>

                </a>

                <a href="https://www.linkedin.com/in/rodriguezibrahin" target="_blank">

                    <img src={Linkedin} height="50px"/>
                    
                </a>
            
            </div>

        </div>
    );
}

export default About;