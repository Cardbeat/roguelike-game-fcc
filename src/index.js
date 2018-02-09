import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import registerServiceWorker from './registerServiceWorker';
import { maps } from './components/data/maps'



window.onload = function() {
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
                if(Math.floor(Math.random() * (150 - 0) + 0) < 5) {
                maps[index].map[i][j] = 2
                   
                enemy++
                }
             }
             
             if(hpPotion < hp) {
                if(Math.floor(Math.random() * (100 - 0) + 0) < 5) {
                maps[index].map[i][j] = 3
                   hpPotion++
                }
                
                console.log(hpPotion)
             }
             
             if(weaponUpgrade < weapon) {
                if(Math.floor(Math.random() * (100 - 0) + 0) < 20) {
                maps[index].map[i][j] = 4
                   weaponUpgrade++
                }
                
             }
             
          }
       }
    }
 }



 registerServiceWorker()