import React, { Component } from 'react'
import ParksContainer from './containers/ParksContainer'
import TrailsContainer from './containers/TraailsContainer'

class App extends Component {

  render(){
  return (
    <div className="App">
      
     < ParksContainer />
     < TrailsContainer />
     
    </div>
  );}
}

export default App;