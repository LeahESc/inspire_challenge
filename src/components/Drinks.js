import React from 'react'
import Drink from './Drink'
import { Item } from 'semantic-ui-react'

const Drinks = (props) => { 
    return (
        <>
            {props.drinks.map(drink => ( 
                
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
export default Drinks;