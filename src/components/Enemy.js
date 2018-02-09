import React from 'react'


export default class Enemy extends React.Component {
    constructor() {
       super()
       this.state = {
          life: 0,
          level:0,
          dmg:0
       }
    }
    
    componentWillMount() {
       this.setState({
          level: this.props.lvl
       })
       switch(this.state.level) {
          case 1:
             this.setState({
                life: 30,
                dmg : 15
             })
             break;
          default:
                
       }
    }
    
    render() {
       return (
          <li className="items pixel enemy" />
       )
    }
 }