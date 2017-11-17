import React from 'react';
import Map from './Map';

export default class Game extends React.Component {
   constructor() {
       super();
       this.state = {
           mapState: <Map />,
           pixel: {
               width: 1200,
               height: 600
           }
       };
   }

   render() {
       return (
           <div>
               <Map />
           </div>
       );
   }
}
