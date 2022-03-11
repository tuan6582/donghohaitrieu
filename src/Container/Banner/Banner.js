import React from 'react';
import './Banner.css'
import { trend1, trend2 } from '../asstes/img'

function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="banner-item" data-aos="fade-down">
                            <div className="banner-img">
                                <a href="/"><img src={trend1} alt="" /></a>
                            </div>
                            <div className="banner-text">
                                <h3>Xu hướng 2022</h3>
                                <h4>Đồng hồ nam</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                        <div className="banner-item" data-aos="fade-down">
                            <div className="banner-img">
                                <a href="/"><img src={trend2} alt="" /></a>
                            </div>
                            <div className="banner-text">
                                <h3>Xu hướng 2022</h3>
                                <h4>Đồng hồ nữ</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;