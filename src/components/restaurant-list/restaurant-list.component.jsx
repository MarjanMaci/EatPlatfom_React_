import React from "react";
import './restaurant-list.styles.scss'
import RestaurantItem from "../restaurant-item/restaurant-item.component";

const RestaurantList = (props) => (
            <div className="restaurant-list">
                <h1>Нови Ресторани</h1>
                <div className='restaurant-list-overflow'>
                    {
                        props.data.map(r => <RestaurantItem key={r.id} data={r}/>)
                    }
                </div>
            </div>
);
export default RestaurantList;