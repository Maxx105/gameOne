import React from "react";
import HighscoreModal from "../HighscoreModal";
import "./style.css";


function Gameover(props) {
    return (
        <div>
            <h3>{props.gameoverMsg}</h3>
            <form>
                <button className="btn btn-secondary">Start Over</button> <br/>
            </form>
            <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#bookSelect" id="submit-score">
                Submit Score
            </button>
           <HighscoreModal score={props.score}></HighscoreModal>
        </div>

    )
}

export default Gameover;