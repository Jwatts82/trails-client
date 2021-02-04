import React, { Component } from 'react'
import { connect } from 'react-redux';
import  { Route, Switch } from  'react-router-dom'
//import { getParks } from '../actions/parkAction
import ParkList from '../components/ParkList'
import ParkForm from '../components/ParkForm'
import Park from '../components/Park'
import Home from '../components/Home'
import NavBar from '../components/NavBar'


class ParksContainer extends Component {


    render() {
        return (
            <div>
                <NavBar />
                <div id='wrapper'>
                <Switch> 
                    <Route exact path='/' component={Home} />
                    <Route path='./parks/new' components={ParkForm} />
                    <Route path='./parks/:id' components={Park} />
                    <Route path='./parks' components={ParkList} />
                </Switch>
                </div>
                
            </div>
        )
    }
}

export default connect()(ParksContainer);
