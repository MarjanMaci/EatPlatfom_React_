import React from 'react';
import MenuCategoriesItem from '../menu-categories-item/menu-categories-item';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';
import './menu-categories-list.styles.scss'

const MenuCategoriesList = (props) => {
    let { id } = useParams();
        return(
            <div className='menu-categories-list'>
                <h1>{props.data[id].name}</h1>
                <h4>{props.data[id].menuEntryList.length} производи</h4>
                <div className='menu-categories-overflow'>
                {
                    props.data[id].menuEntryList.map(m => <MenuCategoriesItem key={m.id} data={m}/>)
                }
                </div>
            </div>
        )
}
export default MenuCategoriesList;