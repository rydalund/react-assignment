import React from 'react';

const Round = ({remainingRounds, roundsOfGame}) => {
   
    if (remainingRounds > 0){
        return (
            <div>
                <h2>Remaining rounds: {remainingRounds} of totally: {roundsOfGame}</h2>
            </div>
        )
   }    
}
export default Round;