import React from "react";
import "./style.css";


function Gameover(props) {
    return (
        <div>
            <h1>{props.gameoverMsg}</h1>
            <form>
                <button className="btn btn-secondary">Start Over</button>
            </form>
        </div>
    )
}

export default Gameover;