import React from 'react'
import Pixel from './Pixel'
import { maps } from './data/maps'
import Info from './Info'

export default class GameState extends React.Component {
    constructor() {
        super();
        this.state = {
           playerX: 2,
           playerY: 8,
           Map: [],
           mapName: maps[0].map, // index to mapObject
           actualMap: [],
           local: maps[0].name,
           playerStatus: [ 0,0,0,0 ]
        };
     }
  
     updateMap(map) {
        this.setState({
           Map: map
        });
     }
    
    getInfo(lvl,hp,xp,dmg) {
       this.setState({
          playerStatus: [lvl,hp,xp,dmg]
       })
       
       return (
          < Info playerStatus={this.state.playerStatus}/>
       )
    }
 
 
     componentWillMount() {
         this.setState({
             actualMap: this.state.mapName // index to mapObject
          });
     }
  
     checkBlock(x, y) {
        console.log(this.state.Map[x][y])
        if (this.state.Map[x][y] === 0) {
           return true;
        }
        if (this.state.Map[x][y] === 1) {
           return false;
        }
        if([10,20,30,40,50,60,70].includes(this.state.Map[x][y])) {
           return "door";
        }
     }
    
    mapChanger(keycode, index) {
       switch(index) {
          case 10:
             this.setState({
               mapName: maps[0].map,
               actualMap: maps[0].map,
               playerX: 23,
               local: maps[0].name
             })
             this.updateMap(this.state.actualMap)
             break;
          case 20:
             this.setState({
               mapName: maps[1].map,
               actualMap: maps[1].map,
               local: maps[1].name
             })
             if(keycode === 40) {
                this.setState({
                   playerY: 1
                })
             }
             if(keycode === 39) {
                this.setState({
                   playerX: 1
                })
             }
             if(keycode === 38) {
                this.setState({
                   playerY: 13
                })
             }
             this.updateMap(this.state.actualMap);
             break;
          case 30:
             this.setState({
               mapName: maps[2].map,
               actualMap: maps[2].map,
               local: maps[2].name
             })
             if(keycode === 38) {
                this.setState({
                   playerY: 13
                })
             }
             if(keycode === 37) {
                this.setState({
                   playerX: 23
                })
             }
             this.updateMap(this.state.actualMap);
             break;
          case 40:
             this.setState({
                mapName: maps[3].map,
                actualMap: maps[3].map,
                local: maps[3].name
             })
             if(keycode === 38) {
                this.setState({
                   playerY: 13
                })
             }
             if(keycode === 40) {
                this.setState({
                   playerY: 1
                })
             }
             this.updateMap(this.state.actualMap)
             break;
          case 50:
             this.setState({
                mapName: maps[4].map,
                actualMap: maps[4].map,
                playerX: 1,
                local: maps[4].name
             })
             this.updateMap(this.state.actualMap)
             break;
          case 60:
             this.setState({
                mapName: maps[5].map,
                actualMap: maps[5].map,
                playerY:1,
                local: maps[5].name
             })
             this.updateMap(this.state.actualMap)
             break;
          case 70:
             this.setState({
                mapName: maps[6].map,
                actualMap: maps[6].map,
                playerY:1,
                local: maps[6].name
             })
             this.updateMap(this.state.actualMap)
             break;
          default: 
       }
       
    }
  
     componentDidMount() {
        this.updateMap(this.state.actualMap);
        window.addEventListener("keydown", e => {
           e.preventDefault();
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
                      this.mapChanger(e.keyCode, this.state.Map[this.state.playerY][this.state.playerX])
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
                     this.mapChanger(e.keyCode, this.state.Map[this.state.playerY][this.state.playerX])
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
                    if (
                    this.checkBlock(this.state.playerY, this.state.playerX) ===
                    "door"
                 ) {
                     this.mapChanger(e.keyCode, this.state.Map[this.state.playerY][this.state.playerX])
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
                    if (this.checkBlock(this.state.playerY, this.state.playerX) ===
                    "door") {
                     this.mapChanger(e.keyCode, this.state.Map[this.state.playerY][this.state.playerX])
                 }
                 break;
              default:
           }
        });
     }
  
     render() {
         let gameMap = [];
            const pixels = this.state.mapName;
         for (let c = 0; c < pixels.length; c++) {
            for (let l = 0; l < pixels[0].length; l++) {
               if (c === this.state.playerY && l === this.state.playerX) {
                  gameMap.push(<Pixel type={"player"} key={[c,l]} getInfo={this.getInfo.bind(this)} />);
               } else if (pixels[c][l] === 0) {
                  gameMap.push(<Pixel type={"free"} key={[c,l]} />);
               } else if (pixels[c][l] === 1) {
                  gameMap.push(<Pixel type={"block"} key={[c,l]} local={this.state.local} />);
               }  else if ( pixels[c][l] === 2 ) {
                  gameMap.push(<Pixel type={"enemy"} key={[c,l]} />);
               } else if( pixels[c][l] === 3 ) {
                  gameMap.push(<Pixel type={"health"} key={[c,l]} />);
               } else if( pixels[c][l] === 4 ) {
                  gameMap.push(<Pixel type={"weaponUpgrade"} key={[c,l]} />);
               } else if ([10,20,30,40,50,60,70].includes(pixels[c][l])) {
                  gameMap.push(<Pixel type={"door"} key={[c,l]} />);
               } else if( pixels[c][l] === 8 ) {
                  gameMap.push(<Pixel type={"pillar"} key={[c,l]} />);
               } 
            }
         }
        
         // 
         // display hp/lvl/xp and objective
         // change constructor to game state, idk if its better but... yeah..
         return (
            <div>
               <h4>{this.state.local}</h4>
               <div className='flexScreen' >
                <div className="display">
                 <ul className="flex">{gameMap}</ul>
                </div>
               < Info playerStatus={this.state.playerStatus}/>
               </div>
            </div>
         );
      }
 }