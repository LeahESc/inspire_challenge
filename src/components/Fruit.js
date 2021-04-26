import React from 'react'
import Heading from './Heading'
import Drinks from './Drinks'
import { connect } from 'react-redux'
import { useEffect, useState } from 'react'
import {Grid } from 'semantic-ui-react'
import uuid from 'react-uuid'

const Fruit = (props) => {
    
    let drinkCollection = []
    
    const [isLoading, setLoading] = useState(true)
    const [drinks, setDrinks] = useState({})

    const urlArray = props.match.url.split('/')
    const fruitName = urlArray[2]
    console.log("props:", props)

    useEffect(() => { 
        fetch(`/api/json/v1/1/filter.php?i=${fruitName}`)
        .then(resp => resp.json())
        .then(data => { 
            let dataIds = data.drinks.map(d => d.idDrink)
            drinkCollection = props.allDrinks.drinks.filter(dr => dr.idDrink === dataIds[0] || dr.idDrink === dataIds[1] || dr.idDrink === dataIds[2] )
            setLoading(false)
            })
            
            // setDrinks(data.drinks.map(drink => [drink.strDrink, drink.strDrinkThumb, drink.idDrink]))
            //  include second fetch call to specific drinks using the ids from data
        }, [])

    // const matchDrinks = () => { 
    //    return drinkCollection = drinks.forEach(d => {
    //         return props.allDrinks.drinks.filter(dr => dr.idDrink == d)
    //     })
       
    // }

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            
            <Grid>
                <Grid.Row>
                    <Heading>Recipes found for {fruitName}:</Heading>
                </Grid.Row>
                <Grid.Column key={uuid()} width={8}>
                    <p>`Drinks go here: {drinkCollection}`</p>
                    
                    {/* <Drinks key={uuid()} drinks={drinks} url={props.match.url}/>  */}
                </Grid.Column>
            </Grid>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      allDrinks: state.fruitsReducer.drinks
    }
  }

export default connect(mapStateToProps)(Fruit)