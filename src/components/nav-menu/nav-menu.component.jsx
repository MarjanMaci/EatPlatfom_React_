import React from 'react'
import ReactSvgMenu from '../assets/icons8-restaurant-menu-50.png'
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
                <img src={ReactSvgMenu} alt="" />
                <h3>Мени</h3>
            </li>
            <li>
                <img src={ReactSvgMenu} alt="" />
                <h3>Резервации</h3>
            </li>
            <li>
                <img src={ReactSvgMenu} alt="" />
                <h3>Мој профил</h3>
            </li>
        </ul>
    </div>
)

export default NavMenu;