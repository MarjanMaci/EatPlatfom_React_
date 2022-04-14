import React, {useState} from "react";
import './cart.styles.scss'
import InfoHolder from "./info-holder.component";
import Payment from "./payment.component";

const Cart = () => {
    const [change1, setChange1] = useState(false)
    const [change2, setChange2] = useState(false)


    return(
        <div className="cart">
            <div className="left-wrapper">
                <h2>Кошничка</h2>
                <InfoHolder podatoci="Податоци" infoname="Марјан Марјановски " infonum="+38978252863" change={change1} onChange={()=>setChange1(!change1)}/>
                <InfoHolder podatoci="Адреса" infoname="ул. Ѓорѓи Сугаре " infonum="бр.12" change={change2} onChange={()=>setChange2(!change2)}/>
                <Payment/>
            </div>
        </div>
    )
}

export default Cart;