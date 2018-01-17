import React from 'react'
import Pixel from './Pixel'
import { maps } from './data/maps'

export default class View extends React.Component {
   constructor() {
      super();
      this.state = {
         actualMap: []
      };
   }

   componentDidMount() {
      this.props.updateMap(this.state.actualMap);
   }

   componentWillMount() {
      this.setState({
         actualMap: maps[this.props.mapIndex]
      });
   }

   render() {
      let gameMap = [];
      const pixels = this.state.actualMap;
      for (let c = 0; c < pixels.length; c++) {
         for (let l = 0; l < pixels[0].length; l++) {
            if (c === this.props.playerY && l === this.props.playerX) {
               gameMap.push(<Pixel type={"player"} key={[c,l]} />);
            } else if (pixels[c][l] === 0) {
               gameMap.push(<Pixel type={"free"} key={[c,l]} />);
            } else if (pixels[c][l] === 1) {
               gameMap.push(<Pixel type={"block"} key={[c,l]} />);
            } else if (pixels[c][l] === 2) {
               gameMap.push(<Pixel type={"door"} key={[c,l]} />);
            }
         }
      }
      return (
         <div className="display">
            <ul className="flex col s12">{gameMap}</ul>
         </div>
      );
   }
}