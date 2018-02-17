import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Game from './components/Game'
import registerServiceWorker from './registerServiceWorker'
import { maps } from './components/data/maps'
import  {enemies} from './components/data/enemies'
import {allEnemies} from './components/data/allEnemies'



window.onload = function() {
    // eslint-disable-next-line
    maps.map(function(x,y) {
       switch(y) {
          case 0:
             randomizer(y, 6, 1, 1)
             break;
          case 1:
             randomizer(y, 8, 1, 1)
             break;

          case 2:
             randomizer(y, 8, 1, 1)
             break;
          case 3:
             randomizer(y, 3, 1, 1)
             break;
          default:
       }
    })
    return(
        ReactDOM.render(<Game />, document.getElementById('game'))
    )
 }

 function randomizer(index, enemies, hp, weapon) {
    let enemy = 0;
    let hpPotion = 0;
    let weaponUpgrade = 0;
    for(let i = 0; i < maps[index].map.length; i++ ) {
       for(let j = 0; j < maps[index].map[0].length ; j++) {
          if(maps[index].map[i][j] === 0 ) {
             if(enemy < enemies) {
                if(i > 9 && j >  12 ) {
                   maps[index].map[i][j] = 2
                   enemizer(maps[index].mapLvl, [i,j])
                   enemy++
                } else if(Math.floor(Math.random() * (100 - 0) + 0) < 5) {
                maps[index].map[i][j] = 2
                enemizer(maps[index].mapLvl, [i,j])
                enemy++
                }
             }
             
             if(hpPotion === 0) {
                console.log(hpPotion)
                if( i > 12  && j > 18) {
                   maps[index].map[i][j] = 3
                   hpPotion++
                } else if(Math.floor(Math.random() * (100 - 0) + 0) < 40) {
                maps[index].map[i][j] = 3
                   hpPotion++
                }
                
             }
             
             if(weaponUpgrade < weapon) {
                if( i > 9 && j >  12 ) {
                   maps[index].map[i][j] = 4
                   weaponUpgrade++
                } else if(Math.floor(Math.random() * (100 - 0) + 0) < 40) {
                maps[index].map[i][j] = 4
                   weaponUpgrade++
                }
                
             }
             
          }
       }
    }
 }


 function enemizer(index, [a,b]) {
     // eslint-disable-next-line
     enemies.map( enemy => {
        if(index === enemy.lvl) {
             allEnemies.push({
                lvl: index,
                hp: enemy.hp,
                dmg: enemy.dmg,
                xp: enemy.xp,
                position: [a, b]
            })
        }
     })
 }



 registerServiceWorker()