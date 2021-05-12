import React, {useState, useEffect} from "react";
import "./style.css";


function Highscores(props) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        setScores(JSON.parse(localStorage.getItem('score')))
    }, []);

    return (
        <div style={{margin: "20px"}}>
            <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Initials</th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score) => (
                    <tr>
                        <th scope="row">{scores.indexOf(score) + 1}</th>
                        <td>{score.initials}</td>
                        <td>{score.score}</td>
                    </tr>
                                
                ))} 
            </tbody>
            </table>
            <button onClick = {props.handleExitViewScores} className="btn btn-danger">X</button>
        </div>
    )
}

export default Highscores;