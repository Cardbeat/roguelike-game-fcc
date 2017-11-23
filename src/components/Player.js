import React from 'react';

export default class Player extends React.Component {
   constructor() {
       super()
       this.state = {
           left: 0,
           right: 0,
           top: 40,
           down: 0,
           playerPosition: []
       }
   }

   componentDidMount() {

    let playerPositionX = 0
    let playerPositionY = 0

    let Key = {
        _pressed: {},
      
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        
        isDown: function(keyCode) {
          return this._pressed[keyCode];
        },
        
        onKeydown: function(event) {
          this._pressed[event.keyCode] = true;
        },
        
        onKeyup: function(event) {
          delete this._pressed[event.keyCode];
        }
      };
      

      window.addEventListener('keyup', function(e) { Key.onKeyup(e)}, false)
      window.addEventListener('keydown', function(e) { Key.onKeydown(e); }, false)


       document.addEventListener('keypress', (e) => {
        if(Key.isDown(Key.RIGHT)) {
            this.setState({
             left: this.state.left + 2
            })
            playerPositionX = playerPositionX + 2
        }

        if(Key.isDown(Key.UP)) {
             this.setState({
                 top: this.state.top - 2
             })
             playerPositionY = playerPositionY + 2
            
         }

        if(Key.isDown(Key.DOWN)) {
             this.setState({
                 top: this.state.top + 2
                 })
             playerPositionY = playerPositionY - 2
             
         }
         

        if(Key.isDown(Key.LEFT)) {
             this.setState({
                 left: this.state.left - 2
                })
                playerPositionX = playerPositionX - 2
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
