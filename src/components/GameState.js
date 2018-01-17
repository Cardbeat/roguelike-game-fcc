import React from 'react'
import Pixel from './Pixel'
import { maps } from './data/maps'

export default class GameState extends React.Component {
    constructor() {
       super();
       this.state = {
          playerX: 2,
          playerY: 8,
          Map: [],
          mapIndex: 0,
          actualMap: []
       };
    }
 
    updateMap(map) {
       this.setState({
          Map: map
       });
    }


    componentWillMount() {
        this.setState({
            actualMap: maps[this.state.mapIndex]
         });
    }
 
    checkBlock(x, y) {
       if (this.state.Map[x][y] === 0) {
          return true;
       }
       if (this.state.Map[x][y] === 1) {
          return false;
       }
       if (this.state.Map[x][y] === 2) {
          return "door";
       }
    }
 
    componentDidMount() {
        this.updateMap(this.state.actualMap);
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
                if (
                    this.checkBlock(this.state.playerY, this.state.playerX ) ===
                    "door"
                 ) {
                     this.setState({
                         mapIndex: 0,
                         actualMap: maps[0],
                         playerX: 24
                     })
                     this.updateMap(this.state.actualMap);
                     console.log([this.state.playerX, this.state.playerY])
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
                    this.setState({
                        mapIndex: 1,
                        actualMap: maps[1],
                        playerX: 0
                    })
                    this.updateMap(this.state.actualMap);
                    console.log([this.state.playerX, this.state.playerY])
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
        let gameMap = [];

        if(this.state.mapIndex === 0) {
            const pixels = maps[this.state.mapIndex];
        for (let c = 0; c < pixels.length; c++) {
           for (let l = 0; l < pixels[0].length; l++) {
              if (c === this.state.playerY && l === this.state.playerX) {
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
        }
        else if (this.state.mapIndex === 1) {
            const pixels = maps[this.state.mapIndex];
        for (let c = 0; c < pixels.length; c++) {
           for (let l = 0; l < pixels[0].length; l++) {
              if (c === this.state.playerY && l === this.state.playerX) {
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
        }
        return (
           <div className="display">
              <ul className="flex col s12">{gameMap}</ul>
           </div>
        );
     }
 }