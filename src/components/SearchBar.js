import React from 'react'
import { Form, Button } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import fetchDrinks from '../actions/drinkActions'


const SearchBar = ({fruits}) => {

    const [query , setQuery ] = useState()
    
    // const fruits = useSelector(state => state.fruitsReducer.fruits)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({query})
        console.log({fruits})
        dispatch(fetchDrinks(query))
        // dispatch action to find the fruit and route to fruit show page
    }

    return (
        <Form onSubmit={ handleSubmit }>
            <Form.Field >
            <label>Find your fruit!</label>
            <input 
                type="text"
                name="fruit"
                placeholder="Type in a kind of tropical fruit here"
                onChange={ event => setQuery(event.target.value) } 
                value = {query || ''} 
                />
            </Form.Field> 
            <Button type="submit">Search</Button>
            
        </Form>
    )
}


const mapStateToProps = (state) => {
    return {
      fruits: state.fruitsReducer.fruits
    }
  }

export default connect(mapStateToProps)(SearchBar);