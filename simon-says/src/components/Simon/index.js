import React, {useState} from "react";
import "./style.css";


function Simon() {
    // const [simonCounter, setSimonCounter] = useState(0);

    let simonCounter = 0;
    let colorArray = ["red", "blue", "yellow", "green"];
    let turn = 0;

    function onStartClick() {
        turn = 1;
        setInterval(onTimerClick, 1000);
    }

    function onTimerClick() {  
        document.getElementById('turn').textContent = `turn: ${turn}`; 
        simonCounter++
        document.getElementById('test').textContent = simonCounter;
    }

    return (
        <div className="App">
            <h1 id="turn"></h1>
            <div className = "row">
                <div className="quarterCircleTopLeft" id="green"></div>
                <div className="quarterCircleTopRight" id="red"></div>
            </div>
            <div className = "row">
                <div className="quarterCircleBottomRight" id="blue"></div>
                <div className="quarterCircleBottomLeft" id="yellow"></div>
            </div>
            <button type="button" className="btn btn-secondary" onClick={onStartClick}>START</button>
            <h1 id="test"></h1>
        </div>
    );
}

export default Simon;