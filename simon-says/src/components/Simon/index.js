import React, {useState} from "react";
import "./style.css";


function Simon() {
    // const [simonCounter, setSimonCounter] = useState(0);

    let simonCounter = 0;
    let colorArray = ["red", "green", "yellow", "blue"];
    let myTurn = 0;
    let simonColor = "";
    let colorArrayIndex = 0;
    let simonsTurnArray = [];
    let simonTurnArrayIndex = 0;
    let simonTimer;
    let simonTurn = 0;

    function onStartClick() {
        myTurn = 1;
        simonTimer = setInterval(onTimerClick, 2000);
        colorArrayIndex = Math.floor(Math.random() * 4);
        simonsTurnArray.push(colorArray[colorArrayIndex]);
    }

    function onTimerClick() {  
        simonTurn++;
        simonCounter++
        simonTurnArrayIndex++;
        simonColor = simonsTurnArray[simonTurnArrayIndex-1];
        console.log(simonsTurnArray);
        determineActiveColor(simonColor);
        setTimeout(function() {
            document.getElementById('red').style.backgroundColor = "red";
            document.getElementById('green').style.backgroundColor = "green";
            document.getElementById('blue').style.backgroundColor = "blue";
            document.getElementById('yellow').style.backgroundColor = "yellow";
        }, 1000);
        clearTimer();
    }

    function clearTimer() {;
        if (simonTurn === myTurn) {
            clearInterval(simonTimer);
            simonTurnArrayIndex = 0;
            setTimeout(function() {
                document.getElementById('red').style.backgroundColor = "red";
                document.getElementById('green').style.backgroundColor = "green";
                document.getElementById('blue').style.backgroundColor = "blue";
                document.getElementById('yellow').style.backgroundColor = "yellow";
            }, 1000);
        } 
    }

    function turnCounter() {
        if (myTurn > 0) {
            colorArrayIndex = Math.floor(Math.random() * 4);
            simonColor = colorArray[colorArrayIndex];
            simonsTurnArray.push(simonColor);
            simonTimer = setInterval(onTimerClick, 2000);
            simonTurn = 0;
            myTurn++;
            document.getElementById('turn').textContent = `turn: ${myTurn}`;
        } else return;
    }

    function determineActiveColor(color) {
        if (color === "red") {
            document.getElementById('red').style.backgroundColor = "pink";
            document.getElementById('green').style.backgroundColor = "green";
            document.getElementById('blue').style.backgroundColor = "blue";
            document.getElementById('yellow').style.backgroundColor = "yellow";
        } else if (color === "green") {
            document.getElementById('red').style.backgroundColor = "red";
            document.getElementById('green').style.backgroundColor = "lightgreen";
            document.getElementById('blue').style.backgroundColor = "blue";
            document.getElementById('yellow').style.backgroundColor = "yellow";
        } else if (color === "yellow") {
            document.getElementById('red').style.backgroundColor = "red";
            document.getElementById('green').style.backgroundColor = "green";
            document.getElementById('blue').style.backgroundColor = "blue";
            document.getElementById('yellow').style.backgroundColor = "lightyellow";
        } else if (color === "blue") {
            document.getElementById('red').style.backgroundColor = "red";
            document.getElementById('green').style.backgroundColor = "green";
            document.getElementById('blue').style.backgroundColor = "lightblue";
            document.getElementById('yellow').style.backgroundColor = "yellow";
        }
    }

    return (
        <div className="App">
            <h1 id="turn"></h1>
            <div className = "row">
                <div className="quarterCircleTopLeft" id="green" onClick={turnCounter}></div>
                <div className="quarterCircleTopRight" id="red" onClick={turnCounter}></div>
            </div>
            <div className = "row">
                <div className="quarterCircleBottomRight" id="blue" onClick={turnCounter}></div>
                <div className="quarterCircleBottomLeft" id="yellow" onClick={turnCounter}></div>
            </div>
            <button type="button" className="btn btn-secondary" onClick={onStartClick}>START</button>
            <h1 id="test"></h1>
        </div>
    );
}

export default Simon;