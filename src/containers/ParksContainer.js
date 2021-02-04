import React, { Component } from 'react'
import ParkForm from '../components/ParkForm'
import { connect } from 'react-redux'
import { getParks } from './actions/parkActions'

class ParksContainer extends Component {
    render() {
        
        return (
            <div className="parksContainer">
                <ParkForm />
            </div>
        )
    }
}


const mapStateToProps = state => {
    console.log("I am state", state)
    return {
        parks: state.parkReducer.parks,
        loading: state.parkReducer.loading
    }
}

export default connect(mapStateToProps, { getParks })(ParksContainer);