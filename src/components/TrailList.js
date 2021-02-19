import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrails } from '../actions/trailActions'
import { FilteredTrails } from './Filtered'
import { FilteredMiles } from './Filtered'
import { Card } from 'react-bootstrap'
import { SearchTrails } from './Search'

class TrailList extends Component {
    state = {
        difficulty: "",
        miles: "",
        search: "",
        likes: {}
    }

    componentDidMount() {
        this.props.getTrails()
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
            difficulty: event.target.value
        })
        console.log(event.target.value)
    }

    handleMilesSelect = event => {
        this.setState({
            miles: event.target.value
        })
        console.log(event.target.value, "Miles")
    }

    render() {
        let trailsList
        
        if (this.state.search !== "") {
            trailsList = this.props.trails.filter( trail => {
                return trail.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
            })
        } else {
            if (this.state.difficulty !== ""){
                trailsList = this.props.trails.filter( trail => trail.difficulty === this.state.difficulty)
                console.log(trailsList)
                    if (this.state.miles !== ""){
                        trailsList = trailsList.filter( trail => trail.miles === parseInt(this.state.miles))
                    } 
                    console.log(trailsList)
            } else {
                trailsList = this.props.trails
                if (this.state.miles !== ""){
                    trailsList = trailsList.filter( trail => trail.miles === parseInt(this.state.miles))
                } 
        }}
        //console.log(this.props.trails)
        //console.log(trailsList)
        const sortedTrails = trailsList.sort( (a, b) => a.name.localeCompare(b.name))           
        
        const trailLis = sortedTrails.map( t =>  {
            return ( 
                <Card key={t.id} className="mb-3 " bg="light" border="info" style={{ width: '20rem' }}>
                    <Card.Body className="text-center">
                        <h4 className="card-title">{t.name} </h4> 
                        <h5 className="card-text"> {t.difficulty}</h5>
                        <h6 className="card-subtitle"> {t.miles} Miles</h6>
                        <button data-id={t.id} onClick={this.handleClick}>Likes {this.state.likes[t.id] || 0}</button>
                    </Card.Body>
                </Card> 
            )
        })
            
        //console.log(trailLis)

        return (
            <div className="Traillist">
                <br/>
                <h1 className="text-center">My Trails</h1>
                <br/>
                <h4> Search For a Trail: </h4>
                    <SearchTrails 
                        trails={this.props.trails}
                        updateOnSearch={this.updateSearch}/>
                <br/>
                <h4>OR</h4>
                <br/>
                <FilteredTrails 
                    trails={this.props.trails}
                    handleOnSelect={this.handleSelect}
                />
                <FilteredMiles 
                    trails={this.props.trails}
                    handleOnSelect={this.handleMilesSelect}
                />
                <br/>
                <br/>
                <ul>
                {this.props.loading ? <h3>Loading....</h3> : trailLis}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    //console.log("I am state", state)
    return {
        trails: state.trailReducer.trails,
        loading: state.parkReducer.loading,
    }
}

export default connect(mapStateToProps, { getTrails })(TrailList)

