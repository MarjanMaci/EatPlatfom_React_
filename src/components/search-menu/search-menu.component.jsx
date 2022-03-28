import React from "react";
import './search-menu.styles.scss'
import Search from '../assets/search.svg'

const SearchMenu = () => (
    <div className="search-menu">
        <div className="input-wrapper">
            <img src={Search} alt="" />
            <input type="text" placeholder="Пребарувај..."/>
        </div>
        <button>Најави се!</button>
    </div>
)

export default SearchMenu;