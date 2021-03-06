import React from "react";
import coverImg from '../assets/cover.jpg'
import star from '../assets/price.svg'
import './menu-categories-styles.scss'
import {Link} from 'react-router-dom'

const MenuCategoriesItem = (props) => (
    <Link to={`/meal/${props.data.id}`}>
        <div className="menu-categories-item">
            <img src={coverImg} alt="" />

            <h4>{props.data.name}</h4>

            <div className="bottom">
                    <img src={star} alt="" />
                    <p>{props.data.price}ден</p>
            </div>
        </div>
    </Link>
)

export default MenuCategoriesItem;