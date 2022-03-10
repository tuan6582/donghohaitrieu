import React, { Component } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import { slider1 } from "../asstes/img"
import { slider2 } from "../asstes/img"
import './Slider.css'

import AOS from 'aos';
AOS.init();

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };
        return (
            <div className="slider-app">
                <Slider {...settings}>
                    <div className="slider-item">
                        <img src={slider1} alt="" />
                        <div className="slider-text" data-aos="fade-left">
                            <h3>Mona Watch</h3>
                            <h4>Đồng hồ Classico</h4>
                            <p>Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
                            <span className="button-outline">Xem sản phẩm</span>
                        </div>
                    </div>
                    <div className="slider-item">
                        <img src={slider2} alt="" />
                        <div className="slider-text" data-aos="fade-left">
                            <h3>Mona Watch</h3>
                            <h4>Đồng hồ Classico</h4>
                            <p>Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ…</p>
                            <span className="button-outline">Xem sản phẩm</span>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}

