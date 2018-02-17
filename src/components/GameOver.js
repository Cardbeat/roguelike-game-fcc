import React from 'react'


export default class GameOver extends React.Component {
   
    componentDidMount() {
       window.addEventListener('keydown', e => {
          e.preventDefault()
          if(e.keyCode === 13) {
             window.location.reload();
          }
       })
    }
    
    render() {
       return (
          <div>
          <h1> GAME OVER </h1>
          <h6> press start to reset </h6>
          </div>
       )
    }
 }