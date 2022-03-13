import React from 'react';
import './Promotion.css'
import { popular09, popular10, popular11, popular12, popular13, popular14, popular15, popular16 } from '../../Container/asstes/img'
function Promotion() {
    return (
        <div className="popular" >
            <div className="container">
                <div className="row ">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular09} alt="" /></a>
                                <p>Simple 10</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular10} alt="" /></a>
                                <p>Simple 9</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular11} alt="" /></a>
                                <p>Simple 8</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular12} alt="" /></a>
                                <p>Simple 7</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular13} alt="" /></a>
                                <p>Simple 6</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular14} alt="" /></a>
                                <p>Simple 5</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular15} alt="" /></a>
                                <p>Simple 4</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="popular-item" data-aos="fade-left">
                            <div className="box-popular-img">
                                <a href="/"><img src={popular16} alt="" /></a>
                                <p>Simple 3</p>
                                <div className="product-total">
                                    <span>700, 000 đ</span>
                                    <a href="/">Thêm vào giỏ</a>
                                </div>
                            </div>
                            <div className="product-header">
                                <a href="/">
                                    <i className="fa-solid fa-heart"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Promotion;