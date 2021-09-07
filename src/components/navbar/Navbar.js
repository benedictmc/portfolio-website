import react, {Component, useState, useEffect} from 'react'
// import {MenuItems} from './MenuItems'
import {MenuItems, MenuItemsMobile} from './MenuItems'
import './Navbar.css'
import LoadingBar from 'react-top-loading-bar'
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
    // let bars = false
    
    const [menuOptions, setMenuOptions] = useState(MenuItems);
    const [bars, setBars] = useState(false);

    const handleClick = () =>{
        console.log("Click", bars)
        setBars(!bars)
        console.log(menuOptions)
        setMenuOptions(MenuItemsMobile)
        // bars = true
    }

    return(
        <div>
        <nav className="NavbarItems">
            {/* <div className="menu-icon" onClick={this.handleClick}> */}
            <div className="menu-icon" onClick={handleClick}>
                <i className={bars ? 'fas fa-times': 'fas fa-bars'}/>
            </div>
            <ul className={bars ? 'nav-menu active': 'nav-menu'}>
                {
                    MenuItems.map((item, index) => {
                        if(bars && item.title === "Home"){
                            console.log("Yoo bars")
                            console.log(item)
                            return
                        }

                        return(
                            <div>
                               <li key={index}>
                                    <Link activeClass="active" className="nav-bar-scroll" to={item.scroll} spy={true} smooth={true} duration={500}>
                                        <a className={item.cName}>
                                            {item.title}
                                        </a>
                                    </Link>
                                </li> 
                            </div>
                            // {bars ? 'nav-menu active': 'nav-menu'}
               
                    )})
                }
            </ul>
        </nav>
        </div>
    )
}


export default Navbar;