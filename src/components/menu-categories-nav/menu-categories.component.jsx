import React from 'react'
import './menu-categories.styles.scss'
import CategoryItem from '../category-item-nav/category-item.component';

const MenuCategories = (props) => (
    <div className='menu-categories'>
        <h1>Најди го најдоброто место</h1>
        <p className='desc'><b>30 ресторани</b>, одбери го омилениот!</p>
        <div className='category-list'>
            {props.data.map(m => <CategoryItem key={m.id} data={m}/>)}
        </div>
    </div>
)

export default MenuCategories;