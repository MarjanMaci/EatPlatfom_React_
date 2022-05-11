import React from 'react'
import list from '../assets/list.svg'
import reservation from '../assets/reservation.svg'
import squares from '../assets/4-squares.svg'
import PP from '../assets/abstract-user-flat-4.svg'
import './nav-menu.styles.scss'
import { Link } from 'react-router-dom'

const NavMenu = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    return(
        <div className='nav-menu'>
            <h1 className='app-name'>Касни Си</h1>
            <div className='profile-img'>
                <img src={user ? user.img : PP} alt="/" />
            </div>
            <div className='name'>
                <h3>Здраво,</h3>
                {user ? <h2>{user.name + " " + user.surname}</h2> : <h2>Што Ќе Јадеме Денес?</h2>}
            </div>
            <ul className='ul-nav-menu'>
                <Link to={user?'/':'/login'}>
                    <li>
                        <img src={list} alt="" />
                        <h3>Дома</h3>
                    </li>
                </Link>
                <Link to={user?'/cart':'/login'}>
                    <li>
                        <img src={reservation} alt="" />
                        <h3>Мои Нарачки</h3>
                    </li>
                </Link>
                <Link to={user?'/profile':'/login'}>
                    <li>
                        <img src={squares} alt="" />
                        <h3>Профил</h3>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default NavMenu;