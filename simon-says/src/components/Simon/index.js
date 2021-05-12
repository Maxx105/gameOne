import React, {useState} from "react";
import Gameover from "../Gameover";
import "./style.css";


function Simon() {

    const [gameover, setGameover] = useState(false);
    const [gameoverMsg, setGameoverMsg] = useState("");
    const [score, setScore] = useState(0);


    let colorArray = ["red", "green", "yellow", "blue"];
    let turn = 0;
    let simonColor = "";
    let colorArrayIndex = 0;
    let simonsTurnArray = [];
    let simonTurnArrayIndex = 0;
    let simonTimer;
    let simonTurn = 0;
    let myTurn = 0;
    let timerDone = false;
    // let score = [];
    

    function onStartClick() {
        turn = 1;
        // document.getElementById('turn').textContent = `turn: ${turn}`;
        simonTimer = setInterval(onTimerClick, 2000);
        colorArrayIndex = Math.floor(Math.random() * 4);
        simonsTurnArray.push(colorArray[colorArrayIndex]);
        document.getElementById('start').style.visibility = "hidden";
    }

    function onTimerClick() {
        timerDone = false;
        simonTurn++;
        simonTurnArrayIndex++;
        simonColor = simonsTurnArray[simonTurnArrayIndex-1];
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
            timerDone = true;
            clearInterval(simonTimer);
            simonTurnArrayIndex = 0;
            // setTimeout(function() {
            //     document.getElementById('red').style.backgroundColor = "red";
            //     document.getElementById('green').style.backgroundColor = "green";
            //     document.getElementById('blue').style.backgroundColor = "blue";
            //     document.getElementById('yellow').style.backgroundColor = "yellow";
            // }, 1000);
        } 
    }

    document.addEventListener('mousedown', e => {
        if (e.target.id === "red") {
            document.getElementById("red").style.backgroundColor = "pink"
        } else if (e.target.id === "yellow") {
            document.getElementById("yellow").style.backgroundColor = "lightyellow"
        }else  if (e.target.id === "blue") {
            document.getElementById("blue").style.backgroundColor = "lightblue"
        } else if (e.target.id === "green") {
            document.getElementById("green").style.backgroundColor = "lightgreen"
        }
    });

    document.addEventListener('mouseup', e => {
        if (e.target.id === "red") {
            document.getElementById("red").style.backgroundColor = "red"
        } else if (e.target.id === "yellow") {
            document.getElementById("yellow").style.backgroundColor = "yellow"
        } else if (e.target.id === "blue") {
            document.getElementById("blue").style.backgroundColor = "blue"
        } else if (e.target.id === "green") {
            document.getElementById("green").style.backgroundColor = "green"
        } else {
            document.getElementById("red").style.backgroundColor = "red"
            document.getElementById("yellow").style.backgroundColor = "yellow"
            document.getElementById("blue").style.backgroundColor = "blue"
            document.getElementById("green").style.backgroundColor = "green"
        }
    });

    function turnCounter(e) {
        if (turn > 0 && timerDone) {
            handleMyTurn(e);
            // console.log(turn)
           
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
            clearInterval(simonTimer);
            setGameover(true);
            setGameoverMsg("GAME OVER!");
            setScore(turn);
            // if (!localStorage.getItem('score')) {
            //     score.push(turn)
            // } else score = localStorage.getItem('score')
            // // score = localStorage.getItem('score');
            // console.log(score)
            // localStorage.setItem('score', score)

            return;
        }
        myTurn++;
        if (myTurn === simonsTurnArray.length) {
            turn++;
            // document.getElementById('turn').textContent = `turn: ${turn}`;
            myTurn = 0;
            handleSimonTurn();
        }
    }

    function determineActiveColor(color) {
        if (color === "red") {
            document.getElementById('red').style.backgroundColor = "pink";
        } else if (color === "green") {
            document.getElementById('green').style.backgroundColor = "lightgreen";
        } else if (color === "yellow") {
            document.getElementById('yellow').style.backgroundColor = "lightyellow";
        } else if (color === "blue") {
            document.getElementById('blue').style.backgroundColor = "lightblue";
        }
    }

    return (
        <div style={{margin: "auto"}}>
            <h1 id="turn" ></h1>
            <div>
                <div className = "row">
                    <div className="quarterCircleTopLeft" id="green" onClick={turnCounter}></div>
                    <div className="quarterCircleTopRight" id="red" onClick={turnCounter}></div>
                </div>
                <div className = "row">
                    <div className="quarterCircleBottomRight" id="blue" onClick={turnCounter}></div>
                    <div className="quarterCircleBottomLeft" id="yellow" onClick={turnCounter}></div>
                </div>
                <button type="button" className="btn btn-secondary" id="start" onClick={onStartClick}>START</button>
                {gameover ? (
                    <Gameover
                        gameoverMsg = {gameoverMsg}
                        score = {score}
                    ></Gameover>
                ) : null}
            </div>
        </div>
    );
}

export default Simon;