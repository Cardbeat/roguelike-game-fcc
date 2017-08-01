import React from 'react';

export default class Pixel extends React.Component {
   constructor() {
      super()
      this.state = {
         type: []
      }
   }
   
   componentDidMount() {
      this.setState({
         phase: this.props.type
      })
   }
   
   render() {
      return (
            <li className="items">
         <div className="pixel">
            <div>{this.props.type}</div>
            </div>
          </li>
      )
   }
}