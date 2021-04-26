import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import fetchAllParks from './actions/parkActions'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Region from './components/Region'



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
      {/* <Route exact path='/fruit/:name/drinks/:id' component={Drink}/>
      <Route exact path='/fruit/:name/meals/:id' component={Meal}/> */}
    </Router>
  );
}

export default App;
