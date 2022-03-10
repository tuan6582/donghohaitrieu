import React from 'react';
import './Popular.css'
import { popular01, popular02, popular03, popular04, popular05, popular06, popular07, popular08 } from '../../Container/asstes/img'


function Popular() {
    return (
        <div className="popular" >
            <div className="container">
                <div className="row ">
                    <div className="popular-flex-1" data-aos="fade-left">
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular01} alt="" /></a>
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
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular02} alt="" /></a>
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
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular03} alt="" /></a>
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
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular04} alt="" /></a>
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
                    </div>
                    <div className="popular-flex-2" data-aos="fade-right">
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular05} alt="" /></a>
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
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular06} alt="" /></a>
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
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular07} alt="" /></a>
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
                        <div className="col-xl-3 col-lg-3 ">
                            <div className="popular-item">
                                <div className="box-popular-img">
                                    <a href="/"><img src={popular08} alt="" /></a>
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
        </div>
    );
}

export default Popular;