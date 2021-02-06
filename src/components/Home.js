import React, { Component } from 'react'
import Carousel from './Carousel'
import { getParks } from '../actions/parkActions'
import { getTrails } from '../actions/trailActions'
import { connect } from 'react-redux'


 class Home extends Component {
    componentDidMount() {
        this.props.getParks()
        this.props.getTrails()
    }

    render() {
        return (
                <div>
                    <br/>
                    <h2 className="text-center">Track All Your Parks Here!</h2>
                    <br/>
                    <br/>
                    <Carousel />
                </div>
            )
    }
   
}

 


export default connect(null, { getTrails, getParks })(Home);

