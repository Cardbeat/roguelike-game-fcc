import React from 'react';



export default class Menu extends React.Component {
   
    render() {
       return (
          <div>
             <h1> DUNGEON CRAWLER </h1>
             <button onClick={this.props.gameStart} > START </button>
          </div>
       );
    }
 }