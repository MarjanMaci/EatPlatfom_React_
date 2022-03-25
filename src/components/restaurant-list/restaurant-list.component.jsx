import React from "react";
import './restaurant-list.styles.scss'
import RestaurantItem from "../restaurant-item/restaurant-item.component";

const RestaurantList = () => (
    <div className="restaurant-list">
        <h1>Нови Ресторани</h1>
        <div className='restaurant-list-overflow'>
            <RestaurantItem/>
        </div>
    </div>
)

export default RestaurantList;