import React from 'react';
import GameState from './GameState';

export default class Game extends React.Component {
   constructor() {
      super()
      this.state = {
         map: ['map1','map2','map3','map4'],
         indexMap: 0
      }
   }
   
   
   changeMap() {
      if(this.state.indexMap >= 3) {
         this.setState({
         indexMap: 0
      })
      }else if (this.state.indexMap < 3) {
         this.setState({
         indexMap: this.state.indexMap + 1
      })
      }
   }
   
   render() {
      return(
         <div>
            <h1>{this.state.map[this.state.indexMap]}</h1>
            <div className="container">
               < GameState pixels={this.state.pixels} />
            </div>
            <button onClick={this.changeMap.bind(this)}> change map </button>
         </div>
      )
   }
}
