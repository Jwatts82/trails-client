import React from 'react'
import ParkForm from './components/ParkForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import ParkList from './components/ParkList'
import ParkTrailsContainer from './containers/ParkTrailsContainer'
import Navigation from './components/Navigation'
import TrailsContainer from './containers/TrailsContainer'


function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
      <Switch>
      <Route exact path='/' component={Home} />
        <Route exact path='/parks' component={ParkList} />
        <Route exact path='/parks/new' component={ParkForm} />
        <Route path='/parks/:id' component={ParkTrailsContainer} />
        <Route exact path='/trails' component={TrailsContainer} />
      </Switch>
      </div>
    </Router>
  )
}

export default App;