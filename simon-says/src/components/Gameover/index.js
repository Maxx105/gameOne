import React from "react";
import "./style.css";


function Gameover(props) {
    return (
        <div>
            <h3>{props.gameoverMsg}</h3>
            <form>
                <button className="btn btn-secondary">Start Over</button>
            </form>
        </div>
    )
}

export default Gameover;