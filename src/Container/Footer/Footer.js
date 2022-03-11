import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Blogs from '../../pages/Blogs/Blogs';
import Donghonam from '../../pages/Donghonam/Donghonam';
import Donghonu from '../../pages/Donghonu/Donghonu';
import Gioithieu from '../../pages/Gioithieu/Gioithieu';
import Lienhe from '../../pages/Lienhe/Lienhe';
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="footer-contact">
                            <h2 className="footer-title">THÔNG TIN LIÊN HỆ</h2>
                            <ul className="footer__contact--list">
                                <li className="footer__contact--item">
                                    <i className="fa-solid fa-location-dot"></i>
                                    319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                                </li>
                                <li className="footer__contact--item"><a href="tel:076 922 0162">
                                    <i className="fa-solid fa-phone"></i>
                                    076 922 0162
                                </a></li>
                                <li className="footer__contact--item"><a href="mailto:demonhunterg@gmail.com">
                                    <i className="fa-solid fa-envelope-open-text"></i>
                                    demonhunterg@gmail.com
                                </a></li>
                                <li className="footer__contact--item"><a href="skype:demonhunterp?chat">
                                    <i className="fa-brands fa-skype"></i>
                                    demonhunterp
                                </a></li>
                            </ul>
                            <ul className="fooer__contact--icon">
                                <li className="contact__icon--item"><a href="/" target="_blank" style={{
                                    backgroundColor: '#3a589d'
                                }}>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a></li>
                                <li className="contact__icon--item"><a href="/" target="_blank" style={{
                                    backgroundColor: '#3b6994'
                                }}>
                                    <i className="fa-brands fa-instagram"></i>
                                </a></li>
                                <li className="contact__icon--item"><a href="/" target="_blank" style={{
                                    backgroundColor: '#2478ba'
                                }}>
                                    <i className="fa-brands fa-twitter"></i>
                                </a></li>
                                <li className="contact__icon--item"><a href="/" target="_blank" style={{
                                    backgroundColor: '#fc7600'
                                }}>
                                    <i className="fa-solid fa-rss"></i>
                                </a></li>
                                <li className="contact__icon--item"><a href="/" target="_blank" style={{
                                    backgroundColor: '#0072b7'
                                }}>
                                    <i className="fa-brands fa-linkedin"></i>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="footer-connective">
                            <h2 className="footer-title">LIÊN KẾT</h2>
                            <ul className="connective-list">
                                <div className="connective-item">
                                    <Link to="/gioithieu">Giới thiệu</Link>
                                </div>
                                <li className="connective-item">
                                    <Link to="/donghonam">Đồng hồ nam</Link>
                                </li>
                                <li className="connective-item">
                                    <Link to="/donghonu">Đồng hồ nữ</Link>
                                </li>
                                <li className="connective-item">
                                    <Link to="/blogs">Blogs</Link>
                                </li>
                                <li className="connective-item">
                                    <Link to="/lienhe">Liên hệ</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/gioithieu" element={<Gioithieu />} />
                <Route path="/donghonam" element={<Donghonam />} />
                <Route path="/donghonu" element={<Donghonu />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/lienhe" element={<Lienhe />} />
            </Routes>
        </div>
    );
}

export default Footer;