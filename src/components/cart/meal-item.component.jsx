import React, {useState} from "react";
import './meal-item.styles.scss'
import burger from '../assets/burger2.jpg'

const MealItem = (props) => {
    const [ammount, setAmmount] = useState(1)
    const moreAmmount = () => {setAmmount(ammount+1)}
    const lessAmmount = () => {
        if(ammount===1){
            setAmmount(1)
        }else
            setAmmount(ammount-1)
    }

    return(
        <div className="meal-item-cart">
            <img src={burger} alt="" />
            <div className="desc-m">
                <h4>{props.burgerName}</h4>
                <p>{props.price}ден</p>
            </div>
            <div className="kolicina-buttons">
                <button onClick={lessAmmount}>-</button>
                <h1>{ammount}</h1>
                <button onClick={moreAmmount}>+</button>
            </div>
        </div>
    )
}

export default MealItem;