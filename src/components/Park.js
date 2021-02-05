import React, { Component } from 'react'
import { connect } from 'react-redux'


class Park extends Component {
    
    render() {
        console.log("rendering")

        return (
            <div>
                <br/>
                <h1>Trails for </h1>
                <br/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
        parks: state.parkReducer.parks,
        loading: state.parkReducer.loading,
        trails: state.trailReducer.trials
    }
}


export default connect(mapStateToProps)(Park);


//<h1>Trails for ${park.id}</h1>
//<TrailForm />