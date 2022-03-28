import React from "react";
import coverImg from '../assets/cover.jpg'
import star from '../assets/star.svg'
import time from '../assets/time.svg'
import map from '../assets/map.svg'

const MenuCategoriesItem = (props) => (
    <div className="menu-categories-item">
        <img src={coverImg} alt="" />

        <h4>{props.data.name}</h4>

        <div className="bottom">
            <div>
                <img src={star} alt="" />
                <p>{props.data.price}</p>
            </div>
        </div>
    </div>
)

export default MenuCategoriesItem;