import React from 'react';

export default class Player extends React.Component {
   constructor() {
       super()
       this.state = {
           left: 0,
           right: 0,
           top: 40,
           down: 0,
       }
   }

   componentDidMount() {
       document.addEventListener('keydown', (e) => {
           if(e.keyCode === 39) {
               this.setState({
                left: this.state.left + 3
               })
           }

           if(e.keyCode === 38) {
            this.setState({
                top: this.state.top - 3
                })
            }

           if(e.keyCode === 40) {
            this.setState({
                top: this.state.top + 3
                })
            }
            

           if(e.keyCode === 37) {
               this.setState({
                left: this.state.left - 3
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
           right: this.state.right + 'px',
           bottom: this.state.down + 'px',
           top: this.state.top + 'px',
           left: this.state.left + 'px'
       }
       return (
           <div id="player" style={playerMove}></div>
       )
   }
}
