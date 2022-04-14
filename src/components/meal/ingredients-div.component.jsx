import React, {useCallback} from "react";
import Tick from '../assets/check.svg'
import Cross from '../assets/x.svg'

const IngredientItem = ({name}) => {
    const [bg, changeBGColor] = React.useState(0);
    return(
        <div className="sostojki-item" 
            onClick={() => {bg===0 ? changeBGColor(1) : changeBGColor(0)}}
            style={{backgroundColor: bg === 0 ? "white" : "#313131", color: bg===0 ? "#313131" : "white"}}
        >
            <img src={bg===0 ? Tick : Cross} style={{filter: bg === 0 ? "invert(27%) sepia(26%) saturate(5835%) hue-rotate(99deg) brightness(97%) contrast(102%)" : "invert(11%) sepia(91%) saturate(7252%) hue-rotate(359deg) brightness(91%) contrast(121%)"}} alt=''></img>
            <p>{name}</p>
        </div>
    )
}

export default IngredientItem;