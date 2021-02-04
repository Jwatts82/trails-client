import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getParks } from '../actions/parkActions'


class ParkList extends Component {
    componentDidMount() {
        this.props.getParks()
    }

    render() {
    console.log("rendering")
    const parksLis = this.props.parks.map(p => <li key={p.id}>{p.name} - {p.location}</li>)
                                            
    return (
            <div className="parklist">
                <h1>My Parks</h1>
                <br/>
                <ul>
                    {this.props.loading ? <h3>Loading....</h3> :parksLis}
                </ul>
                 
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

export default connect(mapStateToProps, {getParks})(ParkList);

/////wrap in a Link to /parks/trails/:id