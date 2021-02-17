import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrails } from '../actions/trailActions'

class Park extends Component {
    
    render() {
        console.log("rendering")
        const park = this.props.parks.find(p => `${p.id}` === this.props.history.match.params.id )
        const trailLis = park.trails.map(t => 
        <li key={t.id}>{t.name} | Difficulty: {t.difficulty} |  Miles: {t.miles}</li>)
        
        return (
            <div>
                <br/>
                <h3 className="text-center">Park Trails For {park.name}  </h3>
                <br/>
                <h5>You Have Visited {trailLis.length} Trails</h5>
                <hr/>
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


