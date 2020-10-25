import React from 'react';

const Winner = ({winners, roundsOfGame}) => {
    const userWinnings = winners.filter(winner => winner === "User").length;
    const tie = winners.filter(winner => winner === "Tie").length;
    const computerWinnings = winners.filter(winner => winner === "Computer").length;

    if (userWinnings > computerWinnings){
        return (
            <div>
                <h2>Congratulations, you won this challenging game! :)</h2>
                <p>To clarify, of totally {roundsOfGame} rounds, you won {userWinnings}!</p>
                <p>(Also notable, Computer won {computerWinnings} rounds and there were {tie} ties)</p>
            </div>
        )
    }else if(userWinnings < computerWinnings){
        return (
            <div>
                <h2>Unfortunately, you lost the game :(</h2>
                <p>To clarify, of totally {roundsOfGame} rounds, you won {userWinnings}</p>
                <p>But Computer won {computerWinnings} rounds (and there were {tie} ties)</p>
            </div>
        )
    }else{
        return (
            <div>
                <h2>It's a draw</h2>
                <p>Of totally {roundsOfGame} rounds, you won {userWinnings}</p>
                <p>Computer won {computerWinnings} rounds and there were {tie} ties</p>
            </div>
        )
    }
}
export default Winner;