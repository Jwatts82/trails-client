import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrails } from '../actions/trailActions'


class Park extends Component {
    
    render() {
        console.log("rendering")
        const park = this.props.parks.find(p => `${p.id}` === this.props.history.match.params.id )
        const trailLis = park.trails.map(t => 
        <li key={t.id}>{t.name} - Miles: {t.miles} - Difficulty: {t.difficulty}</li>)
        
        return (
            <div>
                <br/>
                <h1>Park Trails For {park.name}  </h1>
                {trailLis}
                <br/>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
        parks: state.parkReducer.parks,
        trails: state.trailReducer.trails
    }
}


export default connect(mapStateToProps, { getTrails })(Park);


//<h1>Park Trails For {park.name}  </h1>
  //              {trailLis}