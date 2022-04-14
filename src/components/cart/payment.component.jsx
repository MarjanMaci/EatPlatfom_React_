import React from "react";
import Select from 'react-select'
import './payment.styles.scss'

const Options = [
    { value: 'pridostava', label: 'При достава' },
    { value: 'online', label: 'Онлајн(Наскоро)', disabled:true }
]

const Payment = () => (
    <div className="payment">
        <h2>Начин на плаќање</h2>
        <Select options={Options} placeholder={'Одбери начин на плаќање'} isOptionDisabled={(option) => option.disabled}></Select>
    </div>  
)

export default Payment;