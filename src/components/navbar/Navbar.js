import react, {Component, useState, useEffect} from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import LoadingBar from 'react-top-loading-bar'



const Navbar = () => {

    return(
        <div>
        <nav className="NavbarItems">
            {/* <div className="menu-icon" onClick={this.handleClick}> */}
            <div className="menu-icon">
                <i className={false ? 'fas fa-times': 'fas fa-bars'}/>
            </div>
            <ul className={false ? 'nav-menu active': 'nav-menu'}>
                {
                    MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href="">
                                    {item.title}
                                </a>
                            </li>
                    )})
                }
            </ul>
        </nav>
        </div>
    )
}


export default Navbar;