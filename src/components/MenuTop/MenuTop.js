import React from 'react';
import './MenuTop.css';
import { logoHome } from '../../Container/asstes/img'
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';

function MenuTop() {
    return (
        <div className="MenuTop">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="menu-box-top">
                            <div className="icon-bars">
                                <i className="fa-solid fa-bars"></i>
                            </div>
                            <div className="menu-logo">
                                <Link to="/">
                                    <img src={logoHome} alt="" />
                                </Link>
                            </div>
                            <div className="menu-cart">
                                <a href="/">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Menu />
        </div>
    );
}

export default MenuTop;