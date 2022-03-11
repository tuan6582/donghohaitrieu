import React, { useRef } from 'react';
import './MenuTop.css';
import { logoHome } from '../../Container/asstes/img'
import { Link, NavLink } from 'react-router-dom';

function MenuTop() {

    const menuRef = useRef()

    const overlayRef = useRef()

    const addMenu = () => {
        menuRef.current.style.transform = 'translateX(0)';
        menuRef.current.style.opacity = 1;
        overlayRef.current.style.display = 'block';
    }

    const removeMenu = () => {
        menuRef.current.style.transform = 'translateX(-100%)';
        menuRef.current.style.opacity = 0;
        overlayRef.current.style.display = 'none';
    }

    return (
        <div className="MenuTop">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-xs-12">
                        <div className="menu-box-top">
                            <div className="icon-bars" onClick={addMenu}>
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
            <div className="menu" ref={menuRef}>
                <ul className="bottom__nav--menu">
                    <li><NavLink activeclassname="active" to="/" >Trang chủ</NavLink></li>
                    <li><NavLink activeclassname="active" to="/gioithieu">Giới thiệu</NavLink></li>
                    <li><NavLink activeclassname="active" to="/donghonam">Đồng hồ nam</NavLink></li>
                    <li><NavLink activeclassname="active" to="/donghonu">Đồng hồ nữ</NavLink></li>
                    <li><NavLink activeclassname="active" to="/blogs">Blogs</NavLink></li>
                    <li><NavLink activeclassname="active" to="/lienhe">Liên hệ</NavLink></li>
                </ul>
                <div className="close-menu" onClick={removeMenu}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="overlay" ref={overlayRef} onClick={removeMenu}></div>
        </div>
    );
}

export default MenuTop;