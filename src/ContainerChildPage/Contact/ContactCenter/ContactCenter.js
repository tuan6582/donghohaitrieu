import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi'
import './ContactCenter.css'

function ContactCenter() {
    return (
        <div className="contact-center">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="contact-address">
                            <div className="address-icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="address-text">
                                <h3>Địa chỉ:</h3>
                                <p>319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="contact-address">
                            <div className="address-icon">
                                <GiRotaryPhone />
                            </div>
                            <div className="address-text">
                                <h3>Điện thoại:</h3>
                                <a href="tel: 1900636648">1900 636 648</a>
                                <p>Bấm 109 – Phòng kinh doanh</p>
                                <p>Bấm 103 – Phòng kỹ thuật</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="contact-address">
                            <div className="address-icon">
                                <i className="fa-solid fa-envelope-open"></i>
                            </div>
                            <div className="address-text">
                                <h3>Email:</h3>
                                <a href="mailto: demonhunterg@gmail.com" style={{ fontWeight: 500 }}>demonhunterg@gmail.com</a>
                                <a href="mailto: mon@mona.media" style={{ fontWeight: 500 }}>mon@mona.media</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactCenter;