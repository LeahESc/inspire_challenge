import React from 'react'
import { Form, Button, Input } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import fetchDrinks from '../actions/drinkActions'


const SearchBar = ({fruits, history, match}) => {

    const [query , setQuery ] = useState()
    
    // const fruits = useSelector(state => state.fruitsReducer.fruits)

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        const matchedFruit = fruits.find(fruit => fruit.name.toLowerCase() === query.toLowerCase())
        if (!matchedFruit) {
            alert("I'm sorry we couldn't find any recipes for that fruit")
        } else { 
            dispatch(fetchDrinks(query))
            history.push(`/fruit/${query}`)    
        }
        console.log(history)
        console.log({query})
        console.log({fruits})
        // dispatch action to find the fruit and route to fruit show page
    }

    return (
        <Form >
            <Form.Field >
            <label>Find your fruit!</label>
         
            <Input
                fluid type="text"
                name="fruit"
                placeholder="Type in a kind of tropical fruit here"
                onChange={ event => setQuery(event.target.value) } 
                value = {query || ''} 
                />
            <Button onClick={handleClick} color='pink' padding='15px'>
                Search
            </Button>
            </Form.Field> 
        </Form>
    )
}


const mapStateToProps = (state) => {
    return {
      fruits: state.fruitsReducer.fruits
    }
  }

export default connect(mapStateToProps)(SearchBar);