import React from 'react';
import './News.css'
import { news01, news02 } from '../../Container/asstes/img'

function News(props) {
    return (
        <div className="news" >
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="news__inner" data-aos="fade-down">
                            <a href="/">
                                <div className="inner__box--image">
                                    <img src={news02} alt="" />
                                </div>
                                <div className="inner__box--text">
                                    <h3>Chiếc đồng hồ của những CEO quyền lực nhất thế giới </h3>
                                    <p>Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là ... </p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="news__inner" data-aos="fade-down">
                            <a href="/">
                                <div className="inner__box--image">
                                    <img src={news01} alt="" />
                                </div>
                                <div className="inner__box--text">
                                    <h3>12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại </h3>
                                    <p>Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai ...	</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="news__inner" data-aos="fade-down">
                            <a href="/">
                                <div className="inner__box--image">
                                    <img src={news02} alt="" />
                                </div>
                                <div className="inner__box--text">
                                    <h3>10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3 </h3>
                                    <p>1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, ...</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;