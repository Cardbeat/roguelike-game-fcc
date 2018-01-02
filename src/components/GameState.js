import React from 'react'
import View from './View'

export default class GameState extends React.Component {
    constructor() {
       super();
       this.state = {
          playerX: 2,
          playerY: 8,
          Map: [],
          mapIndex: 0
       };
 
       this.updateMap = this.updateMap.bind(this);
    }
 
    updateMap(map) {
       this.setState({
          Map: map
       });
    }
 
    checkBlock(x, y) {
       if (this.state.Map[x][y] === 0) {
          return true;
       } else if (this.state.Map[x][y] === 1) {
          return false;
       } else if (this.state.Map[x][y] === 2) {
          return "door";
       }
    }
 
    componentDidMount() {
       window.addEventListener("keydown", e => {
          switch (e.keyCode) {
             case 37:
                if (
                   this.checkBlock(this.state.playerY, this.state.playerX - 1)
                ) {
                   this.setState({
                      playerX: this.state.playerX - 1
                   });
                }
                break;
             case 39:
                if (
                   this.checkBlock(this.state.playerY, this.state.playerX + 1)
                ) {
                   this.setState({
                      playerX: this.state.playerX + 1
                   });
                }
                if (
                   this.checkBlock(this.state.playerY, this.state.playerX) ===
                   "door"
                ) {
                }
                break;
             case 38:
                if (
                   this.checkBlock(this.state.playerY - 1, this.state.playerX)
                ) {
                   this.setState({
                      playerY: this.state.playerY - 1
                   });
                }
 
                break;
             case 40:
                if (
                   this.checkBlock(this.state.playerY + 1, this.state.playerX)
                ) {
                   this.setState({
                      playerY: this.state.playerY + 1
                   });
                }
                break;
             default:
          }
       });
    }
 
    render() {
       return (
          <View
             playerX={this.state.playerX}
             playerY={this.state.playerY}
             updateMap={this.updateMap}
             mapIndex={this.state.mapIndex}
          />
       );
    }
 }