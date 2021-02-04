import React, { Component } from 'react'
import { connect } from 'react-redux'

class ParkForm extends Component {
    state = {
        park: {
            name: "",
            location: "",
        },
        loading: false
    }

    handleChange = event => {
        this.setState({...this.state,
            park: {...this.state.park,
                 [event.target.name]: event.target.value
            },

            })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const park = {...this.state.park}
        console.log(park)
        //this.props.addPark(park)
        //this.setState({
          //  park: {
            //    name: "",
              //  location: "",
            //},
            //loading: false
        //})

    }

    render() {
        return (
            
            <form onSubmit={this.handleOnSubmit}>
                <br/>
                <label>Park Name:</label><br/>
                <input 
                name="name"
                type="text"
                value={this.state.park.name}
                onChange={this.handleChange}/> 
                <br/>
                <label>Location:</label><br />
                <input 
                name="location"
                type="text"
                value={this.state.park.location}
                onChange={this.handleChange}/> <br/><br/>

                <button type="submit">Add Park</button>       
            </form>
        );
      }
    }


export default connect(null)(ParkForm);
