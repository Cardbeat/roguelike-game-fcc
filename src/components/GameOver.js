import React from 'react'


export default class GameOver extends React.Component {
    render() {
        return (
           <div>
           <h1> GAME OVER </h1>
           <button onClick={this.props.gameMenu} > back to menu </button>
           </div>
        )
     }
}