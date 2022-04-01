import React from "react";
import imgHolder from '../assets/hamburger.png'
import './category-item.styles.scss'
import { Link } from "react-router-dom";

const CategoryItem = (props) => (
    <Link to={`/menucategories/${props.data.id}`}>
        <div className="category-item">
            <div className="img-holder">
                <img src={imgHolder} alt=""/>
            </div>
            <h4>{props.data.name}</h4>
        </div>
    </Link>
)

export default CategoryItem;