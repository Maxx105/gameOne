import React, { useState } from "react";
import "./style.css";


function HighscoreModal(props) {
    const [initials, setInitials] = useState('');
    const [scores, setScores] = useState([]);

    let scoresObj = {};
    let scoresArray;

    function handleInputChange(e) {
        setInitials(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        scoresObj = {
            initials: initials,
            score: props.score
        }

        if (localStorage.getItem('score')) {
            scoresArray = JSON.parse(localStorage.getItem('score'));
            scoresArray.push(scoresObj)
            localStorage.setItem('score', JSON.stringify(scoresArray))
        } else {
            scores.push(scoresObj)
            localStorage.setItem('score', JSON.stringify(scores))
        }
        
    }

    return (
        <div className="modal fade" id="bookSelect" tabIndex="-1" aria-labelledby="bookSelectLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="bookSelectLabel">Nice! You achieved a score of <strong>{props.score}</strong>!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Enter your Initials:</p>
                        <input onChange={handleInputChange}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick = {handleSubmit}> Submit </button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HighscoreModal;