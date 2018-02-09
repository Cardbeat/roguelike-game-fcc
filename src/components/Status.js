import React from 'react'

export default class Status extends React.Component {
    constructor() {
       super()
       this.state = {
          hp: 0,
          lvl: 0,
          xp: 0,
          dmg:0
       }
    }
    
    componentWillMount() {
       console.log(this.props.playerStatus)
       this.setState({
          hp: this.props.playerStatus[0],
          lvl: this.props.playerStatus[1],
          xp: this.props.playerStatus[2],
          dmg:this.props.playerStatus[3]
       })
    }
    
    render () {
       return(
          <ul>
             <li>HP: {this.state.hp}</li>
             <li>level:{this.state.lvl} </li>
             <li>xp: {this.state.xp} </li>
             <li>damage: {this.state.dmg} </li>
          </ul>
       )
    }
 }