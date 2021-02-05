import React, { Component } from 'react'
import { connect } from 'react-redux'


class Park extends Component {
    
    render() {
        console.log("rendering")
        //const park = this.props.parks.find((p) => `${p.id}` === this.props.match.params.id)
        //const trailLis = this.props.trails.map(t => 
        //<li key={t.id}>{t.name} - {t.miles} - {t.difficulty}</li>)
        
        
    
        return (
            <div>
                <br/>
                <h1>Park/trails </h1>
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


export default connect(mapStateToProps)(Park);


