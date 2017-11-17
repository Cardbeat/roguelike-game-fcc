import React from 'react';
import Player from './Player';

export default class Map extends React.Component {
   constructor() {
       super()
       let currentMap = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,3,0,0,0,0,0,0,0,0,0,3,0,0,0,0,1],
        [1,0,0,3,3,3,0,0,0,0,0,0,0,3,3,3,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,4,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
     ]

     this.state = {
         actualMap : currentMap,
         tileMap: []
     }
   }

   render() {
       let pixels = this.state.actualMap
       for(let c = 0 ; c < pixels.length; c++) {
           for(let l = 0 ; l < pixels[0].length; l++) {
               if(pixels[c][l] === 0) {
                   this.state.tileMap.push(<li className='items pixel sky'></li>)
               }
               if(pixels[c][l] === 1) {
                   this.state.tileMap.push(<li className='items pixel wall'></li>)
               }
               if(pixels[c][l] === 3) {
                   this.state.tileMap.push(<li className='items pixel clounds'></li>)
               }
               if(pixels[c][l] === 4) {
                   this.state.tileMap.push(<li className='items pixel sky'><Player/></li>)
               }
           }
       }

       return (
           <div className="display">
           <ul className='flex col s12'>{this.state.tileMap}</ul>
           </div>
       )
    }
}
