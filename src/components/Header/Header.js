import React, { useState } from 'react';
import menuIcon from '../../images/menu-icon.png'
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import './Header.css'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div>
            <nav className='header'>
                <Link to={"/"}><img id='logo' src={logo} alt="logo" /></Link>
                {toggleMenu && <div className='nav-items-sm'>
                    <Link to={'/shop'}>Shop</Link>
                    <Link to={'/orders'}>Orders</Link>
                    <Link to={'/inventory'}>Inventory</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>SignUp</Link>
                </div>}
                <div className='nav-items-lg'>
                    <Link to={'/shop'}>Shop</Link>
                    <Link to={'/orders'}>Orders</Link>
                    <Link to={'/inventory'}>Inventory</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>SignUp</Link>
                </div>
                <div id="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
                    <img height="40px" width="40px" src={menuIcon} alt="menu bar" />
                </div>
            </nav>
        </div>
    );
};

export default Header;