import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import homeRepository from "../../repo-axios/homeRepository";
import Burger from '../assets/burger.png'
import IngredientItem from "./ingredients-div.component";
import './meal.styles.scss'

const Meal = () => {
    let {id} = useParams();
    const [data, setData] = useState()
    const [ammount, setAmmount] = useState(1)
    const [isLoading, setIsLoading] = useState(true);
    const navigator = useNavigate();

    useEffect(()=>{
        setIsLoading(true)
        homeRepository.fetchMealById(id)
        .then(pod => {
            setData(pod.data)
            setIsLoading(false);
        })
    },[setData])

    const moreAmmount = () => {setAmmount(ammount+1)}
    const lessAmmount = () => {
        if(ammount===1){
            setAmmount(1)
        }else
            setAmmount(ammount-1)
    }

    const addToCart = () => {
        if(localStorage.getItem('user')!=null){
            homeRepository.addCartItem(JSON.parse(localStorage.getItem('user')).username, data.id, ammount)
            navigator('/cart')
        }
    }

        return(
            <div className="meal">
                {isLoading ? (
                    <div className="loader-wrapper">
  
                    <svg className="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                       <circle cx="170" cy="170" r="160" stroke="#E2007C"/>
                       <circle cx="170" cy="170" r="135" stroke="#404041"/>
                       <circle cx="170" cy="170" r="110" stroke="#E2007C"/>
                       <circle cx="170" cy="170" r="85" stroke="#404041"/>
                    </svg>
                    
                  </div>
                ) : (
                <div className="meall">
                    <div className="img-holder">
                        <h1>{data.name}</h1>
                        <img src={Burger} alt="" />
                    </div>
                    <div className="right-wrapper-meal">
                        <h2>Состојки</h2>
                        <div className="sostojki">
                            {data.ingredients.map(i => <IngredientItem key={i.id} name={i.name}/>)}
                        </div>
                        <div className="kosnicka">
                            <div className="price-wrapper">
                                <h2>Цена</h2>
                                <h2>{data.price*ammount}ден</h2>
                            </div>
                            <div className="kolicina">
                                <h2>Избери количина</h2>
                                <div className="kolicina-buttons">
                                    <button onClick={lessAmmount}>-</button>
                                    <h1>{ammount}</h1>
                                    <button onClick={moreAmmount}>+</button>
                                </div>
                                <div className="naracka-buttons">
                                    <button className="first-one" onClick={addToCart}>Додади во кошничка</button>
                                    <button className="second-one">Нарачај</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
                }
            </div>      
    )
}

export default Meal;

{/*<div className="img-holder">
                <h1>Walter White</h1>
                <img src={Burger} alt="" />
            </div>
            <div className="right-wrapper-meal">
                <h2>Состојки</h2>
                <div className="sostojki">
                        data.ingredients.map(i => <IngredientItem key={i.id} name={i.name}/>)
                </div>
                <div className="kosnicka">
                    <div className="price-wrapper">
                        <h2>Цена</h2>
                        <h2>660ден</h2>
                    </div>
                    <div className="kolicina">
                        <h2>Избери количина</h2>
                        <div className="kolicina-buttons">
                            <button>-</button>
                            <h1>3</h1>
                            <button>+</button>
                        </div>
                        <div className="naracka-buttons">
                            <button className="first-one">Додади во кошничка</button>
                            <button className="second-one">Нарачај</button>
                        </div>
                    </div>
                </div>
            </div>
</div>*/}