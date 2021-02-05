import React, { Component } from 'react'
import TrailForm from '../components/TrailForm'
import Park from '../components/Park'

class ParkTrailsContainer extends Component {
    render() {
        return (
            <div className="ParkTrailsContainer">
                <TrailForm history={this.props}/>
                <Park />
            </div>
        )
    }
}



export default ParkTrailsContainer
