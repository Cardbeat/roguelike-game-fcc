import React from 'react'
import '../App.css'
import Menu from './Menu'
import GameState from './GameState'


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
       game: true
    };
    this.gameStart = this.gameStart.bind(this);
 }

 gameStart() {
    this.setState({
       game: true
    });
 }

 render() {
    if (this.state.game) {
       return <GameState />;
    } else if (this.state.game === false) {
       return <Menu gameStart={this.gameStart} checkGame={this.state.game} />;
    }
 }
}
