import React from "react";
import './info-holder.styles.scss'

const InfoHolder = (props) => (
    props.change ? (
        <div className="info-holder">
            <div className="wrapp-input">
                <h2>{props.podatoci}</h2>
                <input type="text" placeholder="Име и презиме" value={props.infoname}/>
                <input type="text" placeholder="Телефонски број" value={props.infonum}/>
            </div>
            <p className="change" onClick={props.onChange}>Смени</p>
        </div>
    ) : (
    <div className="info-holder">
        <div className="wrapp">
            <h2>{props.podatoci}</h2>
            <p>{props.infoname + props.infonum}</p>
        </div>
        <p className="change" onClick={props.onChange}>Смени</p>
    </div>
    )
)

export default InfoHolder;
