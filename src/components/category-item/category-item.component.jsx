import React from "react";
import imgHolder from '../assets/hamburger.png'
import './category-item.styles.scss'

const CategoryItem = () => (
    <div className="category-item">
        <div className="img-holder">
            <img src={imgHolder} alt="" />
        </div>
        <h4>Бургери</h4>
    </div>
)

export default CategoryItem;