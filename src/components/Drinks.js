import React from 'react'
import Drink from './Drink'
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux'

const Drinks = ({drinks, url}) => { 
    return (
        <>
            {drinks.drinks.map(drink => ( 
                
            <Item.Group divided>
                <Item>
                    <Item.Image src={drink.strDrinkThumb} />

                    <Item.Content>
                        <Drink key={drink.idDrink} 
                            id={drink.idDrink}
                            name={drink.strDrink}
                        /> 
                    </Item.Content>
                </Item>
            </Item.Group>
            ))}
        </>
)
}

// const mapStateToProps = (state) => {
//     return {
//       drinks: state.fruitsReducer.drinks
//     }
//   }
export default Drinks;