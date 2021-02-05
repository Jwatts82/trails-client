import React from 'react'
import ParksContainer from './containers/ParksContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import ParkList from './components/ParkList'
import ParkTrailsContainer from './containers/ParkTrailsContainer'
import Navigation from './components/Navigation'
import TrailList from './components/TrailList'

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">


        <Route exact path='/' component={Home} />
        <Route exact path='/parks' component={ParkList} />
        <Route path='/parks/:id' component={ParkTrailsContainer} />
        <Route exact path='/parks/new' component={ParksContainer} />
        <Route exact path='/trails' component={TrailList} />
      </div>
    </Router>
  )
}

export default App;