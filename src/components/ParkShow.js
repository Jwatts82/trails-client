import React, { Component } from 'react'
import { connect } from 'react-redux'


class Park extends Component {
    
    render() {
        console.log("rendering")

        return (
            <div>
                <br/>
                <h1>I am a park</h1>
                <br/>
                
            </div>
        )
    }
}


export default connect()(Park);


//<h1>Trails for ${park.id}</h1>
//<TrailForm />