import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPark } from '../actions/parkActions'

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

        if  (this.state.park.name !=="" && this.state.park.location !==""){
            this.props.addPark(park)
        this.setState({
            park: {
                name: "",
                location: "",
            },
            loading: false
        })
        this.props.history.push("/parks")
        } else {
            alert("enter park information") 
        }
    }

    render() {
        return (
            
            <form onSubmit={this.handleOnSubmit}>
                <br/>
                <h4>Add A Park</h4>
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


export default connect(null, { addPark })(ParkForm);
