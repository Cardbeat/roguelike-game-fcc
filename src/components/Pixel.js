import React from 'react'
import Player from './Player'
import Enemy from './Enemy'
import Health from './Health'
import WeaponUpgrade from './WeaponUpgrade'


export default class Pixel extends React.Component {
   
    getInfo(lvl, hp, xp, dmg) {
       this.props.getInfo(lvl,hp,xp,dmg)
    }
    
    
    render() {
       if (this.props.type === "block") {
          if(this.props.local === 'Crystal Labyrinth') {
             return <img src={'https://image.ibb.co/eqG8Dm/crystal.jpg'} alt='crystal'/>
          } else {
             return <img src={'https://image.ibb.co/bOLFtm/pedrateste.jpg'} alt='block' />
          }         
       }
       if (this.props.type === "pillar") {
          return <img src={'https://image.ibb.co/fFW8UR/xesquedeile.jpg'} alt=' pillar' />
       }
       if (this.props.type === "free") {
          return <img src={'https://image.ibb.co/bsxOeR/stone2.jpg'} alt='ground' />;
       }
       if (this.props.type === "player") {
          return < Player getInfo={this.getInfo.bind(this)} />
       }
       if (this.props.type === "door") {
          return <img  src={'https://image.ibb.co/jhqNeR/xatuba.jpg'} alt='door' />;
       }
       if (this.props.type === "enemy") {
          return < Enemy />
       }
       if (this.props.type === "health") {
          return < Health />
       }
       if (this.props.type === "weaponUpgrade") {
          return < WeaponUpgrade />
       }
       // if enemy [ 4 types of enemies and 2 sub-bosses + 1 boss]
    }
 }