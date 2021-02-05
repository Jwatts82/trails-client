import React, { Component } from 'react'
import  TrailList from '../components/TrailList'

class TrailsContainer extends Component {
    render() {
        
        return (
            <div className="trialsContainer">
                <TrailList />
            </div>
        )
    }
}

export default TrailsContainer;