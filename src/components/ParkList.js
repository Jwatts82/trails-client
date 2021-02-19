import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getParks } from '../actions/parkActions'
import { Link } from 'react-router-dom' 
import { FilteredParks } from './Filtered'
import { Card } from 'react-bootstrap'
import { SearchParks } from './Search'

class ParkList extends Component {

    state = {
        location: "",
        search: "",
        likes: {}
    }

    componentDidMount() {
        this.props.getParks()
    }

    updateSearch = event => {
        console.log(event.target.value, "Searching")
        this.setState({
            search: event.target.value
        })
    }

    handleClick = event => {
        console.log(event.target.dataset.id, "I Like This")
        this.setState ({
            ...this.state,
            likes: {
                ...this.state.likes,
                [event.target.dataset.id]: this.state.likes[event.target.dataset.id] ? this.state.likes[event.target.dataset.id] + 1 : 1
            }
        })
    }

    handleSelect = event => {
        this.setState({
            location: event.target.value
        })
        // console.log(event.target.value)
    }

    render() {
    //console.log("rendering")
        let parksList 

        if (this.state.search !== "") {
            parksList = this.props.parks.filter( park => {
                return park.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
        } else {
            if (this.state.location !== ""){
                parksList = this.props.parks.filter( park => park.location === this.state.location)
            } else {
                parksList = this.props.parks
            }}
        // console.log(parksList)
        const sortedParks = parksList.sort( (a, b) => a.name.localeCompare(b.name))           
            //console.log(sortedParks)
        
        const parksLis = sortedParks.map( p =>  {
            return (

                <Card key={p.id} className="mb-3" bg="light" border="info" style={{ width: '20rem', margin: '20px' }}>
                    <Card.Body>
                        <Link key={p.id}to={`/parks/${p.id}`} >
                            <h4 className="card-title">{p.name} </h4> 
                            <h5 className="card-subtitle"> {p.location}</h5>
                        </Link>
                        <button data-id={p.id} onClick={this.handleClick} >Likes {this.state.likes[p.id] || 0}</button>
                    </Card.Body>
                </Card> 
                    
            )
        })
                                            
    return (
            <div className="parklist">
                <br/>
                <h1 className="text-center">My Parks</h1>
                <br/>
                <h4> Search For a Park: </h4>
                    <SearchParks
                        parks={this.props.parks}
                        updateOnSearch={this.updateSearch}/>
                <br/>
                <h4>OR</h4>
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
   // console.log("I am state", state)
    return {
        parks: state.parkReducer.parks,
        loading: state.parkReducer.loading,
    }
}

export default connect(mapStateToProps, { getParks })(ParkList);

