import React from 'react'
import Player from './Player'
import Enemy from './Enemy'
import Health from './Health'
import WeaponUpgrade from './WeaponUpgrade'


export default class Pixel extends React.Component {
    
    
    render() {
       if( 
       [this.props.playerX + 1, this.props.playerX - 1, this.props.playerX].includes(this.props.pixelX) && 
       [this.props.playerY + 1, this.props.playerY - 1, this.props.playerY].includes(this.props.pixelY) ) {
        if (this.props.type === "block") {
            if(this.props.local === 'Crystal Labyrinth') {
               return <img src={'https://image.ibb.co/eqG8Dm/crystal.jpg'} alt='crystal'/>
            } else {
               return <img src={'https://image.ibb.co/bOLFtm/pedrateste.jpg'} alt='block' />
            }         
         }
         else if (this.props.type === "pillar") {
            return <img src={'https://image.ibb.co/fFW8UR/xesquedeile.jpg'} alt=' pillar' />
         }
         else if (this.props.type === "free") {
            return <img src={'https://image.ibb.co/bsxOeR/stone2.jpg'} alt='ground' />;
         }
         else if (this.props.type === "player") {
            return < Player  />
         }
         else if (this.props.type === "door") {
            return <img  src={'https://image.ibb.co/jhqNeR/xatuba.jpg'} alt='door' />;
         }
         else if (this.props.type === "enemy") {
            return < Enemy />
         }
         else if (this.props.type === "boss door") {
            return <img  src={'https://image.ibb.co/jQYUbS/bossdoor.jpg'} alt='door' />;
         }
         else if (this.props.type === "health") {
            return < Health />
         }
         else if (this.props.type === "weaponUpgrade") {
            return < WeaponUpgrade />
         }
       } else {
           return <div className='pixel fog'> </div>
       }
    }
 }