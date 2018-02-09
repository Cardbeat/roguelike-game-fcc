import React from 'react'
import Status from './Status'
import Objective from './Objective'


export default class Info extends React.Component {
    render() {
       return(
          <div className='info'>
             <div className='container'>
                < Status playerStatus={this.props.playerStatus}/>
                < Objective />
             </div>
          </div>
       )
    }
 }