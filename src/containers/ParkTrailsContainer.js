import React, { Component } from 'react'

export default class ParkTrailsContainer extends Component {
    render() {
        return (
            <div>
                <h2>The Parks at {this.props.match.params.name}</h2>
            </div>
        )
    }
}
