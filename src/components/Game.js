import React from 'react';
import GameState from './GameState';

export default class Game extends React.Component {
   constructor() {
       super()
       this.state = {
           pixel: {
               width: 1200,
               height: 600
           }
       };
   }

   render() {
       return (
           < GameState />
       )
   }
}
