import React from 'react';
import './ProductHighlights.css'
import Slider from 'react-slick/lib/slider';
import { product01, product02, product03, product04, product05 } from '../asstes/img'

function ProductHighlights() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div className="product-container">
            <div className="container">
                <div className="row"  >
                    <Slider {...settings}>
                        <div>
                            <div className="product-item" data-aos="fade-left">
                                <div className="box-img">
                                    <a href="/"> <img src={product01} alt="" /></a>
                                </div>
                                <div className="box-text">
                                    <p>Classico</p>
                                    <div className="product-total">
                                        <span>700, 000 đ</span>
                                        <a href="/"> Thêm vào giỏ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-item" data-aos="fade-left">
                                <div className="box-img">
                                    <a href="/"> <img src={product02} alt="" /></a>
                                </div>
                                <div className="box-text">
                                    <p>Classico</p>
                                    <div className="product-total">
                                        <span>700, 000 đ</span>
                                        <a href="/"> Thêm vào giỏ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-item" data-aos="fade-left">
                                <div className="box-img">
                                    <a href="/"> <img src={product03} alt="" /></a>
                                </div>
                                <div className="box-text">
                                    <p>Classico</p>
                                    <div className="product-total">
                                        <span>700, 000 đ</span>
                                        <a href="/"> Thêm vào giỏ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-item" data-aos="fade-left">
                                <div className="box-img">
                                    <a href="/"> <img src={product04} alt="" /></a>
                                </div>
                                <div className="box-text">
                                    <p>Classico</p>
                                    <div className="product-total">
                                        <span>700, 000 đ</span>
                                        <a href="/"> Thêm vào giỏ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-item" data-aos="fade-left">
                                <div className="box-img">
                                    <a href="/"> <img src={product05} alt="" /></a>
                                </div>
                                <div className="box-text">
                                    <p>Classico</p>
                                    <div className="product-total">
                                        <span>700, 000 đ</span>
                                        <a href="/"> Thêm vào giỏ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="product-item" data-aos="fade-left">
                                <div className="box-img">
                                    <a href="/"> <img src={product01} alt="" /></a>
                                </div>
                                <div className="box-text">
                                    <p>Classico</p>
                                    <div className="product-total">
                                        <span>700, 000 đ</span>
                                        <a href="/"> Thêm vào giỏ</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ProductHighlights;