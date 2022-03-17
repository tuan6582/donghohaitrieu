import React from 'react';
import './HeaderCenter.css'
import { logoHome } from '../../asstes/img';
import { NavLink } from 'react-router-dom';
function HeaderCenter() {
    return (
        <div className="header-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__center--logo">
                            <NavLink to="/"><img src={logoHome} alt="" /></NavLink>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="header__center--seacrh">
                            <div className="header__center--input">
                                <input type="text" placeholder="Tìm kiếm" />
                            </div>
                            <div className="header__center--button">
                                <button><i className="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__center--cart">
                            <ul className="header__center--list">
                                <li className="header__center--item">
                                    <a href="/">
                                        <i className="fa-solid fa-heart"></i>
                                    </a>
                                </li>
                                <li className="header__center--item header__center--item-cart">
                                    <a href="/">
                                        <i className="fa fa-solid fa-cart-shopping"></i>
                                    </a>
                                    <ul className="cart-box">
                                        {/* <li className="cart-box-list">
                                            <div className="cart-info">
                                                <img src={productCart} alt="" />
                                                <div className="info-total">
                                                    <p className="proudct-cart-name">Classico 2</p>
                                                    <p className="proudct-cart-price">700, 000 đ</p>
                                                </div>
                                                <div className="delete-cart">
                                                    <i className="fa-solid fa-xmark"></i>
                                                </div>
                                            </div>
                                            <p className="product-cart-total">Tổng phụ { }</p>
                                            <a href="/" className="to-cart">XEM GIỎ HÀNG</a>
                                        </li> */}
                                        <li className="no-cart">Chưa có sản phẩm trong giỏ hàng.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default HeaderCenter;