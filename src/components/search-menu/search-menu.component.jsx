import React from "react";
import './search-menu.styles.scss'
import Search from '../assets/search.svg'

const SearchMenu = () => {
    let authenticate
    if (localStorage.getItem("JWT")) {
        authenticate = "logout";
    } else {
        authenticate = "login";
    }

    const logout = ()=>{
        localStorage.removeItem("JWT")
        localStorage.removeItem("user")
        window.location.reload(false);
    }

    return(
        <div className="search-menu">
            <div className="input-wrapper">
                <img src={Search} alt="" />
                <input type="text" placeholder="Пребарувај..."/>
            </div>
            {
                authenticate==="login" ?  <button><a href="/login">Најави се!</a></button> : <button onClick={()=>logout()}>Одјави се!</button>
            }         
        </div>
    )
}

export default SearchMenu;