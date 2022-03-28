import React from 'react';
import MenuCategoriesItem from '../menu-categories-item/menu-categories-item';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useCallback, useState } from 'react';

const MenuCategoriesList = (props) => {
    let { id } = useParams();
    console.log(props)
    const [loading, setLoading] = useState(false);
    const myFunc = useCallback(() => {
        props.onMount(id);
      },[loading])
      
      useEffect(() => {
        myFunc()
      }, [myFunc])

        return(
            <div className='menu-categories-list'>
                {/*<h1>{props.data[id].name ? props.data[id].name : id}</h1>
                <h4>{props.data[id].menuEntryList.length ? props.data[id].menuEntryList.length : props.data.length} производи</h4>
                {
                    props.data[id].menuEntryList.map(m => <MenuCategoriesItem key={m.id} data={m}/>)
                }*/}
            </div>
        )
}
export default MenuCategoriesList;