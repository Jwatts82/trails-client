import React, { Component } from 'react'
import { connect } from 'react-redux'
import parkReducer from '../reducers/parkReducer';

class ParkList extends Component {
    render() {
   //const parksLis = this.props.parks.map(p => <li key={this.props.park.id}>{p.name} - {p.location}</li>)
        return (
            <div>
                <h1>i am a list</h1> 
            </div>
        )
    }
}

export default connect()(ParkList);