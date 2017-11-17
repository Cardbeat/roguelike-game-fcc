import React from 'react';

export default class Player extends React.Component {
   constructor() {
       super()
       this.state = {
           move: 0
       }
   }

   componentDidMount() {
       document.addEventListener('keydown', (e) => {
           if(e.keyCode === 39) {
               this.setState({
                   move: this.state.move + 3 
               })
           }

           if(e.keyCode === 37) {
               this.setState({
                   move: this.state.move - 3
               })
           }
           if(e.keyCode === 37) {
               this.setState({
                   move: this.state.move - 3
               })
           }
           if(e.keyCode === 32) {
               //jump
           }
       })
   }

   render() {
       let playerMove = {
           position: 'relative',
           top: '40px',
           left: this.state.move + 'px'
       }
       return (
           <div id="player" style={playerMove}></div>
       )
   }
}
