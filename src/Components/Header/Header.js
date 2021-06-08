import React from 'react';
import logo from '../../images/manush-tech.jpg';
import './Header.css'
const Header = () => {
    return (
        <div className ='header'>
           <img src={logo} alt="" />
           <nav>
               
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Inventory</a>
                {/* {
                    auth.user && <span style={{color:'yellow'}}>Welcome {auth.user.name}</span>
                }
                {
                    auth.user ? <a href = "/login">Sign out</a>
                    : <a href = "/login">Sign in</a>
                } */}
            </nav>
        </div>
    );
};

export default Header;