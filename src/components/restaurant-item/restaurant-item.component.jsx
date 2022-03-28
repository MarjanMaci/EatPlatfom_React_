import React from "react";
import coverImg from '../assets/cover.jpg'
import star from '../assets/star.svg'
import time from '../assets/time.svg'
import map from '../assets/map.svg'
import './restaurant-item.styles.scss'
import { Link } from "react-router-dom";

const RestaurantItem = (props) => (

    <Link to={`/restaurant/${props.data.name}`}>
        <div className="restaurant-item">
            <img src={coverImg} alt="" />

            <h4>{props.data.name}</h4>

            <div className="bottom">
                <div>
                    <img src={time} alt="" />
                    <p>{props.data.avgOrderCompletion}мин</p>
                </div>
                <div>
                    <img src={star} alt="" />
                    <p>5</p>
                </div>
                <div>
                    <img src={map} alt="" />
                    <p>0.5</p>
                </div>
            </div>
        </div>
    </Link>
)

export default RestaurantItem;