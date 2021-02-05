import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { getParks } from '../actions/parkActions'

class TrailsContainer extends Component {
    render() {
        
        return (
            <div className="trialsContainer">
                <h1>All Trails</h1>
            </div>
        )
    }
}


//const mapStateToProps = state => {
  //  console.log("I am state", state)
    //return {
      //  parks: state.parkReducer.parks,
        //loading: state.parkReducer.loading
    //}
//}

export default connect(null)(TrailsContainer);