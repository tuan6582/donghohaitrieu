import React from 'react';
import { NavLink } from 'react-router-dom'
function ShopTitleWomen() {
    return (
        <div>
            <div className="shop-title">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="shop-navigation">
                                <NavLink activeclassname="active" to="/">TRANG CHỦ</NavLink>
                                <span>/</span>
                                <p > ĐỒNG HỒ NỮ</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div className="shop-display">
                                <p>Hiển thị một kết quả duy nhất </p>
                                <select name="" id="" className="from-select">
                                    <option value="menu_order">Thứ tự mặc định</option>
                                    <option value="popularity">Thứ tự theo mức độ phổ biến</option>
                                    <option value="rating">Thứ tự theo điểm đánh giá</option>
                                    <option value="date">Mới nhất</option>
                                    <option value="price">Thứ tự theo giá: thấp đến cao</option>
                                    <option value="price-desc">Thứ tự theo giá: cao xuống thấp</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopTitleWomen;