import React from 'react';
import './BlogsCol9.css'
import { blogs04, blogs05 } from '../../../Container/asstes/img';

function BlogsCol9() {
    return (
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="row">
                <div className="col-xl-4 col-lg-4">
                    <div className="blogs-box">
                        <a href="/">
                            <img src={blogs04} alt="" />
                            <div className="box-blogs-text">
                                <h3>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</h3>
                                <p>Đối với một số doanh nhân, một chiếc đồng hồ đeo tay không chỉ là ...</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="blogs-box">
                        <a href="/">
                            <img src={blogs05} alt="" />
                            <div className="box-blogs-text">
                                <h3>12 chiếc đồng hồ dành cho nữ giới đắt giá nhất mọi thời đại</h3>
                                <p>Công nghiệp sản xuất đồng hồ sang trọng có dấu hiệu chững lại trong hai ...</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="blogs-box">
                        <a href="/">
                            <img src={blogs04} alt="" />
                            <div className="box-blogs-text">
                                <h3>10 thương hiệu đồng hồ cao cấp hàng đầu mọi quý ông đều quan tâm, Rolex xếp hạng số 3</h3>
                                <p>1. Audemars Piguet Được thành lập vào năm 1875 bởi Jules-Louis Audemars và Edward-Auguste Piguet, ...</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="blogs-box">
                        <a href="/">
                            <img src={blogs05} alt="" />
                            <div className="box-blogs-text">
                                <h3>6 chiếc đồng hồ ấn tượng tại Oscar 2019: Từ những thương hiệu đình đám với cái giá “cắt cổ”</h3>
                                <p>Bên cạnh những Cartier, IWC và Jaeger-LeCoultre, có nhiều chiếc đồng hồ thuộc các thương ...</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="blogs-box">
                        <a href="/">
                            <img src={blogs04} alt="" />
                            <div className="box-blogs-text">
                                <h3>Casio sẽ ra mắt đồng hồ thông minh thương hiệu G-Shock để cạnh tranh với Apple Watch?</h3>
                                <p>Có tin Casio dự định trình làng smartwatch G-Shock trong vòng 2 năm tới. Chắc ...</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogsCol9;