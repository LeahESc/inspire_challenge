import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import fetchAllParks from './actions/parkActions'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Region from './components/Region'
import ParkShow from './components/ParkShow'


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => 
    dispatch(fetchAllParks()) 
  ) 

  return (
    <Router>
      <Navbar />
      <Route exact path='/' render={(props) => <Home {...props} />} />
      <Route exact path='/:region/parks' component={Region}/>
     <Route exact path='/:region/parks/:id' component={ParkShow} />
    </Router>
  );
}

export default App;
