import React from 'react';
import Player from './Player';


export default class Pixel extends React.Component {
    constructor() {
        super()
        this.state = {
            width: 20,
            heigth: 20
        }
    }

    render() {
        if(this.props.type === 'block') {
            return (
                <li className='items pixel wall'></li>
            )
        }
        if(this.props.type === 'sky') {
            return (
                <li className='items pixel sky'></li>
            )
        }
        if(this.props.type === 'clound') {
            return (
                <li className='items pixel clounds'></li>
            )
        }
        if( this.props.type === 'player') {
            return (
                <li className='items pixel sky'><Player/></li>
            )
        }
    }
}