import React from 'react'
import Heading from './Heading'
import Drinks from './Drinks'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import {Grid } from 'semantic-ui-react'
import uuid from 'react-uuid'

const Fruit = (props) => {

    const [drinks, setDrinks] = useState([])
    const urlArray = props.match.url.split('/')
    const fruitName = urlArray[2]
    console.log("props:", props)

    useEffect(() =>  {
        fetch(`/api/json/v1/1/filter.php?i=${fruitName}`)
        .then(response => response.json())
        .then(data => {
            setDrinks(data)
        })
    }, [])

    return (
        <div>
            
            <Grid>
                <Grid.Row>
                    <Heading>Recipes found for {fruitName}:</Heading>
                </Grid.Row>
                <Grid.Column key={uuid()} width={8}>
                    <Drinks key={uuid()} drinks={props.drinks} url={props.match.url}/> 
                </Grid.Column>
            </Grid>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
      drinks: state.fruitsReducer.drinks
    }
  }

export default connect(mapStateToProps)(Fruit)