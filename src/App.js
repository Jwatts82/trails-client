import React from 'react'
import ParksContainer from './containers/ParksContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
import ParkList from './components/ParkList'
import Park from './components/Park'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">



        <Route exact path='/' component={Home} />
        <Route exact path='/parks' component={ParkList} />
        <Route path='/parks/:id' component={Park} />
        <Route exact path='/parks/new' component={ParksContainer} />
      
      </div>
    </Router>
  )
}

export default App;