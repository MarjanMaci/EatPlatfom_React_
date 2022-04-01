import React from "react";
import coverImg from '../assets/cover.jpg'
import star from '../assets/open.svg'
import time from '../assets/time.svg'
import map from '../assets/close.svg'
import './restaurant-item.styles.scss'
import { Link } from "react-router-dom";

const RestaurantItem = (props) => (

    <Link to={`/restaurant/${props.data.name}`}>
        <div className="restaurant-item">
            <img src={props.data.img} alt="" />

            <h4>{props.data.name}</h4>

            <div className="bottom">
                <div>
                    <img src={time} alt="" />
                    <p>{props.data.avgOrderCompletion}мин</p>
                </div>
                <span className="line"></span>
                <div>
                    <img src={star} alt="" />
                    <p>{props.data.opens}</p>
                </div>
                <span className="line"></span>
                <div>
                    <img src={map} alt="" />
                    <p>{props.data.closes}</p>
                </div>
            </div>
            <Link to={`/restaurant/edit/${props.data.id}`} onClick={()=>{props.onEdit(props.data.id)}}>Edit</Link>
            <Link to={'/'} onClick={()=>props.onDelete(props.data.id)}>Delete</Link>
        </div>
    </Link>
)

export default RestaurantItem;