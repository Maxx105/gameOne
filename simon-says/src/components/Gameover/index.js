import React, {useState} from "react";
import HighscoreModal from "../HighscoreModal";
import Highscores from "../Highscores";
import "./style.css";


function Gameover(props) {
    const [viewScores, setViewScores] = useState(false);

    function handleViewScores() {
        setViewScores(true);
    }

    function handleExitViewScores() {
        setViewScores(false);
    }
    return (
        <div>
            <h3>{props.gameoverMsg}</h3>
            <h3> You Scored <strong>{props.score}</strong>!</h3>
            <form>
                <button className="btn btn-secondary">Start Over</button> 
                <br/>
            </form>
            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#bookSelect" id="submit-score">
                Submit Score
            </button>
            <br/>
            <button className="btn btn-secondary" onClick = {handleViewScores}>View Scores</button>
            {viewScores ? (<Highscores handleExitViewScores = {handleExitViewScores}></Highscores>) : null}
            
           <HighscoreModal score={props.score}></HighscoreModal>
        </div>

    )
}

export default Gameover;