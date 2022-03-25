import React from "react";
import coverImg from '../assets/cover.jpg'
import star from '../assets/star.png'
import './restaurant-item.styles.scss'

const RestaurantItem = () => (
    <div className="restaurant-item">
        <img src={coverImg} alt="" />

        <h4>Royal Burger</h4>

        <div className="bottom">
            <div>
                <img src={star} alt="" />
                <p>30мин</p>
            </div>
            <div>
                <img src={star} alt="" />
                <p>5</p>
            </div>
            <div>
                <img src={star} alt="" />
                <p>0.5</p>
            </div>
        </div>
    </div>
)

export default RestaurantItem;