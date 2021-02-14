import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTrails } from '../actions/trailActions'
import FilteredTrails from './FilteredTrails'

class TrailList extends Component {
    state = {
        difficulty: ""
    }

    componentDidMount() {
        this.props.getTrails()
    }

    handleSelect = event => {
        this.setState({
            difficulty: event.target.value
        })
        console.log(event.target.value)
    }
    
    render() {
      //  console.log("rendering")
        let trailsList  //this.props.trails.sort()

        if (this.state.difficulty !== ""){
            trailsList = this.props.trails.filter( trail => trail.difficulty === this.state.difficulty)
        } else {
            trailsList = this.props.trails
        }
        console.log(this.props.trails)
        console.log(trailsList)
        const sortedTrails = trailsList.sort( (a, b) => a.name.localeCompare(b.name))           
           console.log(sortedTrails)
        
        
        const trailLis = sortedTrails.map( t =>  {
            return ( 
                <li key={t.id}> {t.name}, {t.miles}, {t.difficulty} </li>
            )
        })
            
            //.name,  t.miles,  t.difficulty )
        console.log(trailLis)
        
        
        
        //return(
        //<li key={t.id}>{t.name} - {t.miles} - {t.difficulty}</li>)
        //})


        return (
            <div className="Traillist">
                <br/>
                <h1 className="text-center">My Trails</h1>
                <br/>
                <br/>
                <FilteredTrails 
                    trails={this.props.trails}
                    handleOnSelect={this.handleSelect}
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
    console.log("I am state", state)
    return {
        trails: state.trailReducer.trails,
        loading: state.parkReducer.loading,
    }
}

export default connect(mapStateToProps, { getTrails })(TrailList)

