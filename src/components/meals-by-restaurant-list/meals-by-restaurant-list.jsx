import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import homeRepository from "../../repo-axios/homeRepository";
import MealsByRestaurantItem from "../meals-by-restaurant-item/meals-by-restaurant-item";
import './meals-by-restaurant.styles.scss'

const MealsByRestaurantList = () => {
    let { id } = useParams();
    const [data, setData] = useState({list:[]})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
        homeRepository.fetchMealsByRestaurant(id)
        .then(pod => {
            setData(pod.data)
            setIsLoading(false);
        })
    },[setData])

    console.log(data)
        return(
            <div className="menu-categories-list">
                {isLoading ? (
                    <div class="loader-wrapper">
  
                        <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                        <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
                        <circle cx="170" cy="170" r="135" stroke="#404041"/>
                        <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
                        <circle cx="170" cy="170" r="85" stroke="#404041"/>
                        </svg>
                    
                    </div>
                ) : (
                    <div>
                    <h1>{id}</h1>
                    <h4>{data.length} производи</h4>
                        <div className='menu-categories-overfloww'>
                        {
                            data.map(i => <MealsByRestaurantItem key={i.id} data={i}/> )
                        }
                        </div>
                    </div>
                )
                }
            </div>
        )
}
export default MealsByRestaurantList;