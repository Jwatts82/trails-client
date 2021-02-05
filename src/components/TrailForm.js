
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTrail } from '../actions/parkActions'

class TrailForm extends Component {
    state = {
        trail: {
            name: "",
            miles: "",
            difficulty: "",
            //park_id: this.props.park_id
        },
    }

    handleChange = event => {
        this.setState({...this.state,
            trail: {...this.state.trail,
                [event.target.name]: event.target.value
            },

        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        //this.props.addTrail({trail: this.state, park_id: park.id})
        const trail = {...this.state.trail,
        park_id: this.props.history.match.params.id}    ///, park_id: null}
        console.log(trail)
        this.props.addTrail(trail)
        this.setState({
            trail: {
                name: "",
                miles: "",
                difficulty: "",
               // park_id: this.props.park_id

            },
        })

    }

    render() {
        return (
            
            <form onSubmit={this.handleOnSubmit}>
                <br/>
                <h3>Add A Trail</h3>
                <br/>
                <label>Trail Name:</label><br/>
                    <input 
                        name="name"
                        type="text"
                        value={this.state.trail.name}
                        onChange={this.handleChange}/> 
                    <br/>
                <label>Miles:</label><br />
                    <input 
                        name="miles"
                        type="text"
                        value={this.state.trail.miles}
                        onChange={this.handleChange}/> 
                    <br/>
                <label>Difficulty:</label><br />
                    <input 
                        name="difficulty"
                        type="text"
                        value={this.state.trail.difficulty}
                        onChange={this.handleChange}/> <br/><br/>

                <button type="submit">Add Trail</button>       
            </form>
        );
    }
}

export default connect(null, { addTrail })(TrailForm);


