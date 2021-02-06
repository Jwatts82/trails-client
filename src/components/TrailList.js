import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrails } from '../actions/trailActions'

class TrailList extends Component {
    componentDidMount() {
        this.props.getTrails()
    }
    
    render() {
        console.log("rendering")

        /////////defeine trails
        const trailLis = this.props.trails.map(t => { 
        return(
        <li key={t.id}>{t.name} - {t.miles} - {t.difficulty}</li>)
        })


        return (
            <div className="Traillist">
                <br/>
                <h1>My Trails</h1>
                <br/>
                <ul>
                {this.props.loading ? <h3>Loading....</h3> : trailLis}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("I am state", state)
    return {
        trails: state.trailReducer.trails,
        loading: state.parkReducer.loading,
    }
}

export default connect(mapStateToProps, { getTrails })(TrailList)

