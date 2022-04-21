import React from "react";
import './items-holder.styles.scss'
import MealItem from "./meal-item.component";

const ItemsHolder = (props) => {
    return(
    <div className="items-wrapper">
        <MealItem burgerName='Royal Burger' price='220'/>
        <MealItem burgerName='Royal Burger' price='220'/>
    </div>
    )
}

export default ItemsHolder;