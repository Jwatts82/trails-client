import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getParks } from '../actions/parkActions'
import { Link } from 'react-router-dom' 
import FilteredParks from './FilteredParks'

class ParkList extends Component {

    state = {
        location: ""
    }

    componentDidMount() {
        this.props.getParksBoundToProps()
    }

    handleSelect = event => {
        this.setState({
            location: event.target.value
        })
        console.log(event.target.value)
    }

    render() {
    console.log("rendering")
        let parksList  

        if (this.state.location !== ""){
            parksList = this.props.parks.filter( park => park.location === this.state.location)
        } else {
            parksList = this.props.parks
        }
        console.log(this.props.parks)
        console.log(parksList)
        const sortedParks = parksList.sort( (a, b) => a.name.localeCompare(b.name))           
            console.log(sortedParks)
        
        
        const parksLis = sortedParks.map( p =>  {
            return ( 
                <Link key={p.id}to={`/parks/${p.id}`}>
                    <li key={p.id}> {p.name}, {p.location} </li>
                </Link>
            )
        })
            
        console.log(parksLis)
                                            
    return (
            <div className="parklist">
                <br/>
                <h1 className="text-center">My Parks</h1>
                <br/>
                <FilteredParks 
                    parks={this.props.parks}
                    handleOnSelect={this.handleSelect}
                    />
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
        loading: state.parkReducer.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
    getParksBoundToProps: () => dispatch(getParks())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ParkList);

