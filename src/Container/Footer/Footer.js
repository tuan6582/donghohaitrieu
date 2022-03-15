import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppStore, GooglePlay } from '../asstes/img';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
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
                                    <i className="fa-brands fa-facebook-messenger"></i>
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
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
                        <div className="footer-connective">
                            <h2 className="footer-title">LIÊN KẾT</h2>
                            <ul className="connective-list">
                                <li className="connective-item">
                                    <NavLink activeclassname="active" to="/gioithieu">Giới thiệu</NavLink>
                                </li>
                                <li className="connective-item">
                                    <NavLink activeclassname="active" to="/donghonam">Đồng hồ nam</NavLink>
                                </li>
                                <li className="connective-item">
                                    <NavLink activeclassname="active" to="/donghonu">Đồng hồ nữ</NavLink>
                                </li>
                                <li className="connective-item">
                                    <NavLink activeclassname="active" to="/blogs">Blogs</NavLink>
                                </li>
                                <li className="connective-item">
                                    <NavLink activeclassname="active" to="/lienhe">Liên hệ</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
                        <div className="footer-support">
                            <h2 className="footer-title">HỖ TRỢ</h2>
                            <ul className="footer-support-list">
                                <li className="footer-support-item"><a href="/">Hướng dẫn mua hàng</a></li>
                                <li className="footer-support-item"><a href="/">Hướng dẫn thanh toán</a></li>
                                <li className="footer-support-item"><a href="/">Chính sách bảo hành</a></li>
                                <li className="footer-support-item"><a href="/">Chính sách đổi trả</a></li>
                                <li className="footer-support-item"><a href="/">Tư vấn khách hàng
                                </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-12">
                        <div className="footer-app">
                            <h2 className="footer-title">TẢI ỨNG DỤNG TRÊN</h2>
                            <p>Ứng dụng Mona Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay.</p>
                            <div className="footer-app-dowload">
                                <img src={GooglePlay} alt="" />
                                <img src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;