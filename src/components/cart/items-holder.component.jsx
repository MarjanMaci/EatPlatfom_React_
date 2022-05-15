import React,{useState} from "react";
import './items-holder.styles.scss'
import MealItem from "./meal-item.component";

const ItemsHolder = (props) => {

    return(
    <div className="items-wrapper">
        {
            props.items.map(c => <MealItem key={c.id} whole={c} id={c.id} onAmmountChange={props.ammountChange} burgerName={c.menuEntry.name} price={c.menuEntry.price} ammount={c.ammount}/>)
        }
        <h2>Вкупно: {props.totalP}ден</h2>
    </div>
    )
}

export default ItemsHolder;