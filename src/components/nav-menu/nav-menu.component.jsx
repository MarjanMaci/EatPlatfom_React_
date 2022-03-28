import React from 'react'
import list from '../assets/list.svg'
import reservation from '../assets/reservation.svg'
import squares from '../assets/4-squares.svg'
import Maci from '../assets/maci.jpg'
import './nav-menu.styles.scss'

const NavMenu = () => (
    <div className='nav-menu'>
        <h1 className='app-name'>Касни Си</h1>
        <div className='profile-img'>
            <img src={Maci} alt="/" />
        </div>
        <div className='name'>
            <h3>Здраво,</h3>
            <h2>Марјан Марјановски</h2>
        </div>
        <ul className='ul-nav-menu'>
            <li>
                <img src={list} alt="" />
                <h3>Мени</h3>
            </li>
            <li>
                <img src={reservation} alt="" />
                <h3>Резервации</h3>
            </li>
            <li>
                <img src={squares} alt="" />
                <h3>Мој профил</h3>
            </li>
        </ul>
    </div>
)

export default NavMenu;