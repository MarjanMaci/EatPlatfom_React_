import React from 'react'
import './menu-categories.styles.scss'
import CategoryItem from '../category-item/category-item.component';

const MenuCategories = () => (
    <div className='menu-categories'>
        <h1>Најди го најдоброто место</h1>
        <p className='desc'><b>30 ресторани</b>, одбери го омилениот!</p>
        <div className='category-list'>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
            <CategoryItem/>
        </div>
    </div>
)

export default MenuCategories;