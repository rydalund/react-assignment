import React, { Component } from "react";
import Hand from "./components/hand";
import Computer from "./components/computer";
import Round from "./components/round";
import Winner from "./components/winner";
import './App.css';
import rock from "./img/rock.jpg";
import paper from "./img/paper.jpg";
import scissors from "./img/scissors.jpg";
import rock_paper_scissors from "./img/rock-paper-scissors.gif"; 

class App extends Component {
  state = {
    userHand: "",
    computerHand: "",
    winner: "",
    winners: [],
    bool: true,
    roundsOfGame: 0,
    remainingRounds: 0,
  };

  startGame = () => {
    const {roundsOfGame} = this.state;
    if (roundsOfGame > 0){
      this.setState(
        {remainingRounds:roundsOfGame}
      );
      this.setState(
        {bool:false}
      );
    }
  }

  game = () => {

    const {userHand,remainingRounds} = this.state;

    if (userHand === ""){
      alert("You have to choose first!");
    }else{
      if(remainingRounds>0){
        let tempRemainingRounds = remainingRounds;

        this.setState(
          {computerHand: this.randomHand()}, () => this.gameLogic()
        );
        this.setState(
          {remainingRounds: tempRemainingRounds-1}
        );
      }
    }
  }

  randomHand = () => {
    let computerChoice = "";

    switch (Math.floor(Math.random()* 3)) {
      case 0:
        computerChoice = "rock";
        break;
      case 1:
        computerChoice = "paper";
        break;
      case 2:
        computerChoice = "scissors";
        break;
      default:
        computerChoice ="";
    }
    return computerChoice;
  }

  gameLogic = () => {
    const {userHand,computerHand} = this.state;
    let setWinner = "";

    if (userHand === computerHand){
      setWinner = "Tie";
    }
    else if (userHand === "rock") {
      if (computerHand === "scissors") {
        setWinner = "User";
      } else if (computerHand === "paper") {
        setWinner = "Computer";
      }
    }
    else if (userHand === "paper") {
      if (computerHand === "rock") {
        setWinner = "User";
      } else if (computerHand === "scissors") {
        setWinner = "Computer";
      }
    }
    else if (userHand === "scissors") {
      if (computerHand === "paper") {
        setWinner = "User";
      } else if (computerHand === "rock") {
        setWinner = "Computer";
      }
    }
    this.setState(
      {winner: setWinner}, () => this.pushWinner()
    );
  }

  pushWinner = () => {
    const {winner,winners} = this.state;
    let tempWinners = winners;

    tempWinners.push(winner);
    this.setState(
      {winners: tempWinners}
    );
  }
 
  render() {
    const {userHand, computerHand, winner, winners, bool, roundsOfGame, remainingRounds} = this.state;

    if (bool && winner ==="") {
			return (
				<div>
          <h1>Rock Paper Scissors</h1>
          <img src={rock_paper_scissors} alt="Rock, Paper, Scissors"/>
					<h2>Select the number of rounds to play (1-10):</h2>
          <input name="input" type="number" min="1" max="10" onChange={(e) => this.setState({roundsOfGame: parseInt(e.target.value)})}/>
          <button type="button" id = "start" onClick={() => this.startGame()}>Start game</button>
        </div>
			)
		}else if (remainingRounds === 0 && roundsOfGame >0 && !bool){
      return(
        <div>
          <h1>Rock Paper Scissors</h1>
          <img src={rock_paper_scissors} alt="Rock, Paper, Scissors"/>
          <h2>The excitement is unbearable...</h2>
          <button type="button" id = "winner" onClick={() => this.setState({bool: true})}>Who won the game?</button>
        </div>
      )
    }else if (bool && roundsOfGame >0){
      return(
        <div>
          <h1>Rock Paper Scissors</h1>
          <img src={rock_paper_scissors} alt="Rock, Paper, Scissors"/>
          <Winner winners={winners} roundsOfGame={roundsOfGame}/>
          <h2>Have you had enough? Otherwise refresh the browser to play again ;)</h2>
        </div>
      )
    }else{
      return(
        <div>
          <h1>Rock Paper Scissors</h1>
          <Round remainingRounds={remainingRounds} roundsOfGame={roundsOfGame}/>
          <p>Win or lose; make your choice</p>
          <div id ="choice">
            <input type="image" src={rock} className="symbol" alt= "Click to select rock" onClick={() => this.setState({userHand: "rock"})}/>
            <input type="image" src={paper} className="symbol" alt= "Click to select paper" onClick={() => this.setState({userHand: "paper"})}/>
            <input type="image" src={scissors} className="symbol" alt= "Click to select scissors" onClick={() => this.setState({userHand: "scissors"})}/>
          </div>
          <div>
            <Hand props = {userHand}/>
            <button type="button" id = "draw" onClick={() => this.game()}>Make computer draw</button>
            <Computer props ={computerHand}/>
            <h2>Round winner: {winner}</h2>
          </div>
        </div>
      )
    }    
  }
}
export default App;
