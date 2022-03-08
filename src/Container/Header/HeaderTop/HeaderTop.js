import React from 'react';
import './HeaderTop.css'
function HeaderTop() {
    return (
        <div className="header-top">
            <div className="container ">
                <div className="row no-gutters">
                    <div className="col-xl-12 col-lg-12">
                        <div className="header__contact">
                            <div className="header__map--top">
                                <ul className="header__left--top">
                                    <li>
                                        <p>
                                            <i className="fa-solid fa-location-dot"></i>
                                            319 - C16 Lý Thường Kiệt, P.15, Q.11, Tp.HCM
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <i class="fa-solid fa-phone"></i>
                                            <a href="tel:076 922 0162">076 922 0162</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="header__icon--top">
                                <ul className="header__right--top">
                                    <li>
                                        <a href="/"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderTop;