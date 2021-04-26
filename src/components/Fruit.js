import React from 'react'
import { connect } from 'react-redux'
import {Grid } from 'semantic-ui-react'
import uuid from 'react-uuid'

const Fruit = (props) => {
   
    const urlArray = props.match.url.split('/')
    const fruitName = urlArray[2]
   

    return (
        <div>
            
            <Grid>
                <Grid.Row>
                    <h1>{fruitName}!</h1>
                </Grid.Row>
                <Grid.Column key={uuid()} width={8}>
                <Drinks key={uuid()} drinks={this.props.drinks} url={props.match.url}/> 
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