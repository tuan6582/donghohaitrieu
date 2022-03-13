import React from 'react';
import { banner1, banner2 } from '../../Container/asstes/img'
function BannerProduct() {
    return (
        <div id="down" className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="banner-item" data-aos="fade-up">
                            <div className="banner-img">
                                <a href="/"><img src={banner1} alt="" /></a>
                            </div>
                            <div className="banner-text">
                                <h3>Xu hướng 2022</h3>
                                <h4>Đồng hồ nam</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ">
                        <div className="banner-item" data-aos="fade-down">
                            <div className="banner-img">
                                <a href="/"><img src={banner2} alt="" /></a>
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

export default BannerProduct;