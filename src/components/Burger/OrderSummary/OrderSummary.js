import React from "react";
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';
const orderSummary=(props)=>{
    const ingredientSummary=Object.keys(props.ingredients)
    .map(igkey=>{
        return(
            <li key={igkey}>
                <span style={{textTransform:'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}
            </li>
        );
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price:{props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
        </Aux>

    );
}
export default orderSummary;