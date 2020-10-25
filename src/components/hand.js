import React from 'react';
import rock from "../img/rock.jpg";
import paper from "../img/paper.jpg";
import scissors from "../img/scissors.jpg";

const Hand = ({props}) => {
    let srcDirect = "";
    let symbolAlt = "";

    if (props === "rock"){
        srcDirect = rock;
        symbolAlt = "Rock";
    } else if (props === "paper"){
        srcDirect = paper;
        symbolAlt = "Paper";
    } else if (props === "scissors"){
        srcDirect = scissors;
        symbolAlt = "Scissors";
    }

    while (symbolAlt ===""){
        return null;
    }
    return (
        <div>
            <p>You chose: </p>
            <img className = "selectedImage"
                src = {srcDirect}
                alt={symbolAlt} 
            />
        </div>
    )
}
export default Hand;