import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import fetchAllFruits from './actions/fruitActions'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'
import Fruit from './components/Fruit'


function App() {

  const dispatch = useDispatch()
  
  useEffect(() => 
    dispatch(fetchAllFruits())
  ) 

  return (
    <Router>
      <Navbar />
      <Route exact path='/' render={(props) => <SearchBar {...props} />} />
      <Route exact path='/fruit/:name' component={Fruit}/>
      {/* <Route exact path='/fruit/:name/drinks/:id' component={Drink}/>
      <Route exact path='/fruit/:name/meals/:id' component={Meal}/> */}
    </Router>
  );
}

export default App;
