import React from 'react'
import '../App.css'
import GameOver from './GameOver'
import Menu from './Menu'
import GameState from './GameState'



export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
       game: false
    };
 }

 gameStart() {
    this.setState({
       game: true
    });
 }
  
 gameOver() {
    this.setState({
       game: 'game over'
    })
 }
 
 gameMenu() {
    this.setState({
       game: false
    })
 }

 render() {
    if (this.state.game === true) {
       return <GameState gameOver={this.gameOver.bind(this)} />;
    } else if (this.state.game === false) {
       return <Menu gameStart={this.gameStart.bind(this)} checkGame={this.state.game} />;
    } else if (this.state.game === 'game over') {
       return < GameOver gameMenu={this.gameMenu.bind(this)} />
    }
 }
}