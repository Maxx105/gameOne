import React from "react";
import "./style.css";


function Simon() {
    // const [simonCounter, setSimonCounter] = useState(0);

    let colorArray = ["red", "green", "yellow", "blue"];
    let turn = 0;
    let simonColor = "";
    let colorArrayIndex = 0;
    let simonsTurnArray = [];
    let simonTurnArrayIndex = 0;
    let simonTimer;
    let simonTurn = 0;
    let myTurn = 0;
    let gameOver = false;

    function onStartClick() {
        turn = 1;
        simonTimer = setInterval(onTimerClick, 2000);
        colorArrayIndex = Math.floor(Math.random() * 4);
        simonsTurnArray.push(colorArray[colorArrayIndex]);
        document.getElementById('start').style.visibility = "hidden";
    }

    function onTimerClick() {  
        simonTurn++;
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
        if (simonTurn === turn) {
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

    function turnCounter(e) {
        if (turn > 0) {
            handleMyTurn(e);
        } else return;
    }

    function handleSimonTurn() {
        colorArrayIndex = Math.floor(Math.random() * 4);
        simonColor = colorArray[colorArrayIndex];
        simonsTurnArray.push(simonColor);
        simonTimer = setInterval(onTimerClick, 2000);
        simonTurn = 0;
    }

    function handleMyTurn(e) {
        if (e.target.id !== simonsTurnArray[myTurn]) {
            gameOver = true;
            console.log("GAME OVER!!!");
            document.getElementById('gameover').textContent = "GAME OVER!";
            return;
        }
        myTurn++;
        if (myTurn === simonsTurnArray.length) {
            turn++;
            document.getElementById('turn').textContent = `turn: ${turn}`;
            myTurn = 0;
            handleSimonTurn();
        }
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
            <button type="button" className="btn btn-secondary" id="start" onClick={onStartClick}>START</button>
            <h1 id="gameover"></h1>
        </div>
    );
}

export default Simon;