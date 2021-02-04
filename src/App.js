import React, { Component } from 'react'
import ParksContainer from './containers/ParksContainer'
import TrailsContainer from './containers/TrailsContainer'

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