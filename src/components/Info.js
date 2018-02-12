import React from 'react'
import Status from './Status'
import Objective from './Objective'


export default class Info extends React.Component {
    render() {
       return(
          <div className='info'>
             <div className='container'>
                < Status hp={this.props.hp} xp={this.props.xp} lvl={this.props.lvl} dmg={this.props.dmg}/>
                < Objective />
             </div>
          </div>
       )
    }
 }