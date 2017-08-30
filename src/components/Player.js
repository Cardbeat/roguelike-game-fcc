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
         },
         position: 0
      }
   }

   componentDidMount() {
    // document.querySelector('.player').style.left = `${this.state.position}` + "px"
    document.addEventListener('keydown', (e) => {
        if(e.keyCode == 39) {
            console.log('olá')
           // this.setState({
           //     position: this.state.position + 1
           //  })
        }
    })

   }

   render() {
        let playerColor =  {
            backgroundColor: 'dark blue',
            width: '20px',
            height: '20px',
            position: 'relative',
            top: '50px',
            left: '10px',
        }
    return (
         <div style={playerColor}>
         </div>
      )
   }
}
