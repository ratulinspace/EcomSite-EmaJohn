import React, { useState } from 'react';
import menuIcon from '../../images/menu-icon.png'
import { Link } from 'react-router-dom';
import logo from "../../images/Logo.svg"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import './Header.css'
import { signOut } from 'firebase/auth';

const Header = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

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
                    {
                        user ?
                            <button onClick={handleSignOut} className='ml-9 text-indigo-900'>SignOut</button>
                            :
                            <Link to={'/signup'}>SignUp</Link>
                    }
                </div>
                <div id="menu-icon" onClick={() => setToggleMenu(!toggleMenu)}>
                    <img height="40px" width="40px" src={menuIcon} alt="menu bar" />
                </div>
            </nav>
        </div>
    );
};

export default Header;