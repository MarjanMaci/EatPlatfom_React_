import React, { useState } from "react";
import './info-holder.styles.scss'

const InfoHolder = (props) => {
    function useForm(defaults) {
        const [values, setValues] = useState(defaults);
      
        function updateValue(e) {
          if (e.target.type === 'number') {
            e.target.value = parseInt(e.target.value);
          }
          setValues({ ...values, [e.target.name]: e.target.value });
        }
      
        return { values, updateValue };
    }

    const { values, updateValue } = useForm({
        valName: props.infoname,
        valNum: props.infonum
    });    
    return(
    props.change ? (
        <div className="info-holder">
            <div className="wrapp-input">
                <h2>{props.podatoci}</h2>
                <input type="text" placeholder="Име и презиме" value={values.valName} onChange={updateValue}/>
                <input type="text" placeholder="Телефонски број" value={values.valNum} onChange={updateValue}/>
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
}

export default InfoHolder;
