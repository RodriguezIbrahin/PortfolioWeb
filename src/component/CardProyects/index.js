import React from "react";
import "./index.css";
import { proyects } from "../Proyects";
import { Hidden } from "@material-ui/core";
import Link from "../../img/link.png";

function CardProyects({ onclick, set, page, setPage, setChange, setChecked }) {

    const [state, setState] = React.useState(false);

    const handleProyects = () => {

        setState(true);

        onclick(true);

        set(2);

        setTimeout(function() {

            setChecked([true,false]);

        }, 6000);

        setTimeout(function() {

            setChecked([true,true]);

        }, 7000);

    };

    const handleChange = () => {

        setChange(true)

        setTimeout(function() { 

            if(page < proyects.length -1){ setPage(page+1) }

            else setPage(1)

        }, 1500);

        setTimeout(function() {

            setChange(false);

        }, 4000);
    };


    
    return (
        
        <>

            <Hidden smDown>

                <div className={state ? "proyectAnimate" : "proyect"}  onWheel={(e)=> handleChange()}>

                    <div id="name" onClick={() =>  handleProyects()}>
                 
                        <br/>Rodriguez Ibrahin
                
                    </div>

                    <div id="pages" style={{marginBottom: `${80 - 80 *( page - 1) }vh`}} onClick={() => handleChange()}> 
                        
                        {page} | {proyects.length - 1}
                    
                        </div>

                    <div>

                        <div className="img">

                            <a href={proyects[page].url} target="_blank">

                                <img src={proyects[page].img} id="img"/>
                                
                            </a>

                            <div id="description">{proyects[page].description}</div>

                        </div>

                        <p id="title">{proyects[page].title}: <br/> {proyects[page].subtitle} <br/> <span id="subtitle">{proyects[page].subtitle2}</span></p>

                    </div>

                </div>

            </Hidden>

            <Hidden mdUp>

                <div className={state ? "proyectAnimateMovile" : "proyect"}  onWheel={(e)=> handleChange()}>

                    <div id="name" style={{marginTop: "-25vh"}} onClick={() =>  handleProyects()}>
                 
                        <br/>Rodriguez Ibrahin
                
                    </div>

                    <div id="pagesMovil" style={{marginBottom: `${70 - 70 *( page - 1) }vh`}} onClick={() => handleChange()}> 
                    
                        {page}|{proyects.length - 1}

                    </div>

                    <div style={{marginTop: "-30vh"}}>

                        <div>

                            <div id="titleMovile">{proyects[page].title}:</div>
                            
                            <div id="subtitleMovile">{proyects[page].subtitle2}</div>

                        </div>

                        <div>

                            <div className="imgMovil">

                                <img src={proyects[page].img} id="img"/>
                                
                                <div id="descriptionMovil">

                                    <a href={proyects[page].url} target="_blank">

                                        {proyects[page].description} <br/>

                                        <img src={Link} height="40px"/>
                                
                                    </a>
                                
                                </div>  

                            </div>

                        </div>

                    </div>

                    
                </div>    

            </Hidden>
      
        </>
    
    );
}

export default CardProyects;