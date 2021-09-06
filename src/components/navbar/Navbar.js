import react, {Component, useState, useEffect} from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import LoadingBar from 'react-top-loading-bar'
import { Link, animateScroll as scroll } from "react-scroll";


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
                                
                                <Link activeClass="active" className="nav-bar-scroll" to={item.scroll} spy={true} smooth={true} duration={500}>
                                    <a className={item.cName}>
                                        {item.title}
                                    </a>
                                </Link>
                            </li>
                    )})
                }
            </ul>
        </nav>
        </div>
    )
}


export default Navbar;