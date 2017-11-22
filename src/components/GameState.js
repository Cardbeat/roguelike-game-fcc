import React from 'react';
import Map from './Map';

export default class GameState extends React.Component {
    constructor() {
        super()
        this.state = {
            playerPositionX: 0,
            playerPositionY: 0
        }
    }

    render() {
        return (
            <div>
                < Map />
            </div>
        )
    }
}