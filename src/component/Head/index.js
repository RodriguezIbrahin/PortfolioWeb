import React from 'react';
import Lottie from "lottie-react";
import {Collapse } from '@material-ui/core';
import wave from "../../img/wave.json";
import loadings from "../../img/loading.json"
import arrow from "../../img/flecha.png";
import About from "../About";
import CardProyects from "../CardProyects";
import "./index.css";

function Head() {

    const [checked, setChecked] = React.useState([false, false]);

    const [about, setAbout] = React.useState(3); //1 aparicion 2 desaparicion 3hidden

    const [loading, setLoading] = React.useState(true);

    const [head, setHead] = React.useState(true);

    const [ins, setIns] = React.useState(0);

    const [page, setPage] = React.useState(1);

    const [chagerProyect, setChagerProyect] = React.useState(false);



    React.useEffect(() => {

        setTimeout(function() { 
            setLoading(false);
        }, 3800);

        setTimeout(function() { 
           setChecked([true, false]);
        }, 4300);
        
        setTimeout(function() { 
            setChecked([true, true]);
        }, 5800);

    }, []);

    const handleAbout = (e) => {

        if(checked[0] || checked[1]) {
            setChecked([false,false])
            setAbout(1);
        }
        else {
            setAbout(2);

            setTimeout(function() { 
                setAbout(3);
            }, 3500);

            setTimeout(function() { 
                setChecked([true, false]);
            }, 1000);
    
            setTimeout(function() { 
                setChecked([true, true]);
            }, 2000);
        }
        
    };

    const handleHead = (value) => {

        setChecked([false,false]);

        setIns(1);

        setTimeout(function() { 
            setHead(value);
        }, 2000);

    };

    const handleDown = (e) => {

        setChecked([false,false]);

        setTimeout(function() { 
            handleHead(false);
        }, 500);

        setTimeout(function() { 
            setChecked([true,true]);
        }, 2500);

    };

    return (
        
        <div>   
            
                <div className={`${loading ? "loading" : "hidden" }`}>

                    <Lottie animationData={loadings} style={{height: "100px"}}/>
        
                </div>

                <div className="root">

                    <div className={ins === 1 ? "animationAnimate" : ins === 2 ? "animationAnimateIn" : "animation"} style={head ? {visibility: "visible"} : {visibility: "hidden"}}>
                    
                        <Lottie animationData={wave}/>;

                    </div>

            
                    <div className="bottoms" onClick={handleAbout} >

                        {about === 2 ? "Closed" : "About"}

                    </div>

                    { head ?

                        <div className={ins === 1 ? "centerAnimate" : ins === 2 ? "centerAnimateIn" : "center"}>

                            <div className="containerText">

                                <div className="text" id="title">
                                    
                                    <Collapse in={checked[0]} {...(checked[0] ? { timeout: 1000 } : {})} >
                                        
                                        <div id="name"> Rodriguez Ibrahin</div>
                
                                    </Collapse>
                
                                </div>
                
                                <div className="text" id="subtitle">
                                    
                                    <Collapse in={checked[1]} {...(checked[1] ? { timeout: 100 } : {})}>
                                        
                                        <div id="subname">full stack developer</div>
                
                                    </Collapse>
                
                                </div>
                
                            </div>
                    
                            <div className="arrow">

                                <Collapse in={checked[1]} {...(checked[1] ? { timeout: 2000 } : {})}>

                                    <img src={arrow} height="40xp" style={{transform: "rotate(-90deg)"}} onClick={handleDown}/>

                                </Collapse>

                            </div>
                
                        </div>
                
                    :    
                     
                        <div className={ chagerProyect ? "centerChange" : "center"}>

                            <CardProyects onclick={handleHead} set={setIns} page={page} setPage={setPage} setChange={setChagerProyect} setChecked={setChecked}/>
                          
                        </div>
            
                    }

                    <div className={`${about === 1 ? "centerAbsolute" : about === 2 ? "hiddenAbout" : "hidden" }`}>
                
                        <About onclick={handleAbout}/>

                    </div>

                    <a className="bottoms" href="mailto:rodriguezibrahin3@gmail.com?Subject=Hola%20Ibrahin">
                            
                        RodriguezIbrahin3@gmail.com

                    </a>
                
                </div>
            

        </div>
    
    );
}

export default Head;

