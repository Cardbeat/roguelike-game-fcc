import React from 'react'
import Pixel from './Pixel'
import { maps } from './data/maps'
import Info from './Info'
import { allEnemies } from './data/allEnemies';

export default class GameState extends React.Component {
    // make a view component to refactor GameState === dont need right now
    constructor() {
        super();
        this.state = {
           playerX: 2,
           playerY: 8,
           Map: [],
           mapName: maps[0].map,
           actualMap: [],
           local: maps[0].name,
           mapLvl: 1,
           life: 100,
           lvl: 0,
           dmg: 30,
           xp: 0,
           enemies: [],
           souls: 0,
           obj: 'Try to find a way out',
           totalXP: 0,
           levelCap: [60,150,240,270]
        };
     }
  
     updateMap(map) {
        this.setState({
           Map: map
        });
     }

 
     componentWillMount() {
         this.setState({
             actualMap: this.state.mapName
          });
     }


     checkLvl() {
         if( this.state.xp >= this.state.levelCap[this.state.lvl]) {
            this.setState({
                lvl: this.state.lvl + 1,
                xp: this.state.xp - this.state.levelCap[this.state.lvl],
                dmg: this.state.dmg + 10,
                life: this.state.life + 80
            })
         }
     }
  
     checkBlock(x, y) {
         console.log(x,y)
        if (this.state.Map[x][y] === 0) {
           return true;
        }
        if (this.state.Map[x][y] === 1) {
           return false;
        }
        if([10,20,30,40,60,70].includes(this.state.Map[x][y])) {
           return "door";
        }
        if(50 === this.state.Map[x][y] ) {
            if(this.state.souls === 2) {
                return "door"
            } else {
                this.setState({
                    obj: 'You need the souls of Ravenos and Aviator to open that door.It looks like a door appeared in the Saloon'
                })
                maps[1].map[14][22] = 40
                return false
            }
        }
        if(this.state.Map[x][y] === 2) {
             // eslint-disable-next-line
            allEnemies.map(enemy => {
                if(enemy.lvl === this.state.mapLvl) {
                    if(enemy.position[0] === x && enemy.position[1] === y ) {
                       this.setState({
                           life: this.state.life - enemy.dmg
                       })
                       if(this.state.life <=0 ) {
                           this.props.gameOver()
                       } else {
                        enemy.hp = enemy.hp - this.state.dmg
                        if(enemy.hp <=0) {
                            // eslint-disable-next-line
                            this.state.Map[x][y] = 0
                            
                            this.setState({
                                xp: this.state.xp + enemy.xp
                            })
                            this.checkLvl()
                            return true
                        } else {
                            return false
                        }

                       }

                    }
                }
            })
        }
        if(this.state.Map[x][y] === 3) {
            this.setState({
                life: this.state.life + 60
            })
            // eslint-disable-next-line
            this.state.Map[x][y] = 0
            return true
        }
        if( this.state.Map[x][y] === 4 ) {
            this.setState({
                dmg: this.state.dmg + 10
            })
            // eslint-disable-next-line
            this.state.Map[x][y] = 0
            return true
        }
     }

    
    mapChanger(keycode, index) {
       switch(index) {
          case 10:
             this.setState({
               mapName: maps[0].map,
               actualMap: maps[0].map,
               playerX: 23,
               local: maps[0].name,
               mapLvl: 1
             })
             this.updateMap(this.state.actualMap)
             break;
          case 20:
             this.setState({
               mapName: maps[1].map,
               actualMap: maps[1].map,
               local: maps[1].name,
               mapLvl: 2
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
               local: maps[2].name,
               mapLvl: 3
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
                local: maps[3].name,
                mapLvl: 4
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
             if(this.state.souls) {
                this.setState({
                    mapName: maps[4].map,
                    actualMap: maps[4].map,
                    playerX: 1,
                    local: maps[4].name,
                 })
                 this.updateMap(this.state.actualMap)
             }
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
         // need to spec playerX/Y and objectX/Y
         let gameMap = [];
            const pixels = this.state.mapName;
         for (let c = 0; c < pixels.length; c++) {
            for (let l = 0; l < pixels[0].length; l++) {
               if (c === this.state.playerY && l === this.state.playerX) {
                  gameMap.push(<Pixel type={"player"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c} />);
               } else if (pixels[c][l] === 0) {
                  gameMap.push(<Pixel type={"free"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c}/>);
               } else if (pixels[c][l] === 1) {
                  gameMap.push(<Pixel type={"block"} key={[c,l]} local={this.state.local} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c}/>);
               }  else if ( pixels[c][l] === 2 ) {
                  gameMap.push(<Pixel type={"enemy"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c}/>);
               } else if( pixels[c][l] === 3 ) {
                  gameMap.push(<Pixel type={"health"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c}/>);
               } else if( pixels[c][l] === 4 ) {
                  gameMap.push(<Pixel type={"weaponUpgrade"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c}/>);
               } else if (pixels[c][l] === 50) {
                gameMap.push(<Pixel type={"boss door"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c} />);
               } else if ([10,20,30,40,50,60,70].includes(pixels[c][l])) {
                  gameMap.push(<Pixel type={"door"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c}/>);
               } else if( pixels[c][l] === 8 ) {
                  gameMap.push(<Pixel type={"pillar"} key={[c,l]} playerX={this.state.playerX} playerY={this.state.playerY} pixelX={l} pixelY={c}/>);
               } 
            }
         }

         return (
            <div>
               <h4>{this.state.local}</h4>
               <div className='flexScreen' >
                <div className="display">
                 <ul className="flex">{gameMap}</ul>
                </div>
               < Info hp={this.state.life} obj={this.state.obj} xp={this.state.xp} lvl={this.state.lvl} dmg={this.state.dmg} />
               </div>
            </div>
         );
      }
 }