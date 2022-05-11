import React, { useEffect, useState } from "react";
import './cart.styles.scss'
import InfoHolder from "./info-holder.component";
import homeRepository from "../../repo-axios/homeRepository";
import Payment from "./payment.component";
import ItemsHolder from "./items-holder.component";

const Cart = () => {
    const [change1, setChange1] = useState(false)
    const [change2, setChange2] = useState(false)
    const [cartItems, setCartItems] = useState()
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true)
        homeRepository.getCartItems()
        .then(pod => {
            setCartItems(pod.data)
            setIsLoading(false)
        })
    },[setCartItems])

    let user = JSON.parse(localStorage.getItem('user'))

    const ammountChange = (p) => {
        for(const c of cartItems){
            if(c.id==p){
                c.ammount=sessionStorage.getItem(p)
            }
        }
    }

    const sendOrder = () => {
        
    }

    return(
        <div className="cart">
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
                <>
                    <div className="left-wrapper">
                        <h2>Кошничка</h2>
                        <InfoHolder podatoci="Податоци" infoname={user.name + " " + user.surname } infonum={user.phoneNumber} change={change1} onChange={()=>setChange1(!change1)}/>
                        <InfoHolder podatoci="Адреса" infoname={user.address} change={change2} onChange={()=>setChange2(!change2)}/>
                        <Payment/>
                        <button className="naracka" onClick={sendOrder}>Нарачај</button>
                    </div>
                    <div className="right-wrapper">
                        <h2>Производи</h2>
                        <ItemsHolder ammountChange={ammountChange} items={cartItems} />
                    </div>
                </>
                )}
        </div>
    )
}

export default Cart;