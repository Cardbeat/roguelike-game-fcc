import React from 'react'

export default class Status extends React.Component {
    
    render () {
       return(
          <ul>
             <li>HP: {this.props.hp}</li>
             <li>level:{this.props.lvl} </li>
             <li>xp: {this.props.xp} </li>
             <li>damage: {this.props.dmg} </li>
          </ul>
       )
    }
 }