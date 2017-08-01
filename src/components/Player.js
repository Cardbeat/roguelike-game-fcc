import React from 'react';

export default class Player extends React.Component {
   constructor() {
      super() 
      this.state = {
         hp: 100,
         lvl: 1,
         dmg:20,
         xp: {
            current: 0,
            total: 100
         }
      }
   }
   render() {
      return (
         <div className={this.props.face? 'playerRight' : 'playerLeft'}></div>
      )
   }
   
}