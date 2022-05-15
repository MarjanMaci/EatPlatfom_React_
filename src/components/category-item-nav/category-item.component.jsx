import React from "react";
import './category-item.styles.scss'
import { Link } from "react-router-dom";
import Burger from '../assets/burger-svgrepo-com.svg'

const CategoryItem = (props) => (
    <Link to={`/menucategories/${props.data.id}`}>
        <div className="category-item">
            <div className="img-holder">
                <img src={props.data.img} alt=""/>
            </div>
            <h4>{props.data.name}</h4>
        </div>
    </Link>
)

export default CategoryItem;