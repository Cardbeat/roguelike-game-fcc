import React from 'react'

export default class Pixel extends React.Component {
    render() {
       if (this.props.type === "block") {
          return <li className="items pixel block" />;
       }
       if (this.props.type === "free") {
          return <li className="items pixel free" />;
       }
       if (this.props.type === "player") {
          return <li className="items pixel player" />;
       }
       if (this.props.type === "door") {
          return <li className="items pixel door" />;
       }
    }
 }