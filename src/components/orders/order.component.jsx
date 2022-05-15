import React, { useEffect, useState } from "react";
import homeRepository from "../../repo-axios/homeRepository";
import './order.styles.scss'

const Order = () => {

    const [orders, setOrders] = useState()
    const [isLoading, setIsLoading] = useState(true);

    let user = JSON.parse(localStorage.getItem('user'))
    let userEmail = user.email;
    console.log(userEmail)


    useEffect(()=>{
        setIsLoading(true)
        homeRepository.findOrders(userEmail)
        .then(pod => {
            setOrders(pod.data)
            setIsLoading(false)
        })
    },[setOrders])

    return(
        <>
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
                <div className="orders">
                    <table>
                        <thead>
                            <tr>
                                <td>Време на нарачка</td>
                                <td>Цена на нарачка</td>
                                <td>Испорачана</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(o => 
                                <tr>
                                    <td>{o.dateOfOrder}</td>
                                    <td>{o.orderTotal}ден</td>
                                    <td>{o.delivered===false ? "Не" : "Да"}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
        )}
        </>
    )
}

export default Order;