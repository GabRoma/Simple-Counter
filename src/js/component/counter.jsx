import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faClock} />

const Counter = (props) => {
    return (
        <div className="container bg-dark p-4 border-secondary rounded" style={
            {
                height: "150px",
                width: "300px",
                textAlign: "center"
            }
    }>
            <div className="row text-center text-light">
                <h2>Simple Counter</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div id="clockbox" className="m-1 bg-dark border border-secondary rounded"
                    style={
                        {
                            height: "30px",
                            width: "25px",
                            color:"white",
                        }
                }>{element}</div>
                <div id="box6" className="m-1 bg-dark border border-secondary rounded"
                    style={
                        {
                            height: "30px",
                            width: "20px",
                            color:"white",
                        }
                }>{props.numero6}</div>
                <div id="box5" className="m-1 bg-dark border border-secondary rounded"
                    style={
                        {
                            height: "30px",
                            width: "20px",
                            color:"white",
                        }
                }>{props.numero5}</div>
                <div id="box4" className="m-1 bg-dark border border-secondary rounded"
                    style={
                        {
                            height: "30px",
                            width: "20px",
                            color:"white",
                        }
                }>{props.numero4}</div>
                <div id="box3" className="m-1 bg-dark border border-secondary rounded"
                    style={
                        {
                            height: "30px",
                            width: "20px",
                            color:"white",
                        }
                }>{props.numero3}</div>
                <div id="box2" className="m-1 bg-dark border border-secondary rounded"
                    style={
                        {
                            height: "30px",
                            width: "20px",
                            color:"white",
                        }
                }>{props.numero2}</div>
                <div id="box1" className="m-1 bg-dark border border-secondary rounded"
                    style={
                        {
                            height: "30px",
                            width: "20px",
                            color:"white",
                        }
                }>{props.numero1}</div>
            </div>
        </div>
    );
};

export default Counter;
