import React from 'react'

export default class Player extends React.Component {
    constructor() {
       super()
       this.state = {
          life: 100,
          lvl: 1,
          xp:0,
          dmg:5
       }
    }
    
    componentDidMount() {
       this.props.getInfo(this.state.lvl, this.state.life, this.state.xp, this.state.dmg)
    }
    
    
    render() {
       return (
          <img className='items pixel player' src={'https://image.ibb.co/mchLtm/kkkkk.jpg'} alt='player' />
       )
    }
 }