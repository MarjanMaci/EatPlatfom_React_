import React, {useCallback} from "react";
import Tick from '../assets/check.svg'

const IngredientItem = ({name}) => {
    const [bg, changeBGColor] = React.useState(0);
    return(
        <div className="sostojki-item" 
            onClick={() => {bg===0 ? changeBGColor(1) : changeBGColor(0)}}
            style={{backgroundColor: bg === 0 ? "white" : "#313131", color: bg===0 ? "#313131" : "white"}}
        >
            <img src={Tick} style={{filter: bg === 0 ? "invert(27%) sepia(26%) saturate(5835%) hue-rotate(99deg) brightness(97%) contrast(102%)" : "invert(13%) sepia(13%) saturate(0%) hue-rotate(170deg) brightness(103%) contrast(85%)"}} alt=''></img>
            <p>{name}</p>
        </div>
    )
}

export default IngredientItem;