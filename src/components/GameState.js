import React from 'react';
import Player from './Player';
import Pixel from './Pixel';

export default class GameState extends React.Component {
   constructor() {
      super()
      let column = []
      let countX = 0
      let countY = 7
      for(let i = 0 ; i < 120 ; i++ ) {
         if(countX > 14) {
            countX = 0
            countY--
         }
         column.push( < Pixel key={i} 
                         id={i} 
                         pixelX={countX} 
                         pixelY={countY}
                         phase={''}
                         />)
         countX++
      }
      
      this.state = {
         playerPosition: {
            x: 0,
            y: 0
         },
         pixels: column,
         face: true
      }
   }
   
   changePosition(X,Y) {
      const maxX = 14
      const maxY = 7
      const minX = 0
      const minY = 0
      let finalX = this.state.playerPosition.x + (X)
      let finalY = this.state.playerPosition.y + (Y)
      
      if (finalX > maxX) {
         finalX = maxX
      } else if (finalX < minX) {
         finalX = minX
      } else if ( finalY > maxY) {
         finalY = maxY
      } else if ( finalY < minY) {
         finalY = minY
      }
      
      
      this.setState({
         playerPosition: {
            x: finalX,
            y: finalY
         }
      })
      
      
      let column = []
      let countX = 0
      let countY = 7
      for(let i = 0 ; i < 120 ; i++ ) {
         if(countX > 14) {
            countX = 0
            countY--
         }
         if(this.state.playerPosition.x === countX && this.state.playerPosition.y === countY) {
            column.push( < Pixel key={i} 
                         id={i} 
                         pixelX={countX} 
                         pixelY={countY}
                         type={<Player face={this.state.face} />}
                         />)
         } else {
            column.push( < Pixel key={i} 
                         id={i} 
                         pixelX={countX} 
                         pixelY={countY}
                         type={''}
                         />)
         }
         countX++
      }
      
      this.setState({
         pixels: column
      })
      
   }
   
   componentDidMount() {
     // this.state.pixels.map(function(pixel) {
     //    if(pixel.props.pixelX === this.state.playerPosition.x && pixel.props.pixelY === this.state.playerPosition.y) {
     //        return pixel.props.type = <Player face={this.state.face} />
     //    }
     // })
      
      document.addEventListener('keydown', (e) => {
         switch(e.keyCode) {
            case 39:
               this.moveRight()
               break
            case 37:
               this.moveLeft()
               break
            case 32:
               this.jump(this.state.playerPosition.x , this.state.playerPosition.y)
               break
            case 40:
               this.moveDown()
               break
            default:
                this.changePosition(0,0)
         }
      })
   }
   
   moveRight() {
      if(this.state.face === true) {
       this.changePosition(1,0)  
      } else {
         this.setState({
            face: true
         })
         this.changePosition(0,0)
      }
   }
   
   moveLeft() {
      if(this.state.face === false) {
       this.changePosition(-1,0)  
      }else {
         this.setState({
            face: false
         })
         this.changePosition(0,0) 
      }
   }
   
   jump(X, Y) {
      this.changePosition(0,1)
      if(this.state.face) {
         this.changePosition(1,0)
      } else {
         this.changePosition(-1,0)
      }
      
      // Physics
     // this.state.pixels.map((pixel) => {
     //   
     //    if(pixel.props.type == '' && (pixel.props.pixelY - 1) == (Y - 1) && pixel.props.pixelX == X) {
     //       this.changePosition(0,-1)
     //       console.log(pixel)
     //    }
     // })
   }
   
   moveDown() {
      this.changePosition(0,-1)
   }
   
   render() {
      return (
         <div>
            <ul className="flex col s12">{this.state.pixels}</ul>
         </div>
      )
   }
}