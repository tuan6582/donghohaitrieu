import React from 'react';
import './CategoryCol3.css'
import { category01, category02, category03, category04, category05, new01, new02, new03, new04, new05, news02, placeholder } from '../../../../Container/asstes/img';

function CategoryCol3() {
    return (
        <div className="col-xl-3 col-lg-3">
            <div className="category-left">
                <h3>SẢN PHẨM</h3>
                <ul className="category-list">
                    <li><a href="/">
                        <img src={placeholder} alt="" />
                        <div className="category__list--info">
                            <span>Dịch vụ tư vấn</span>
                            <p>300,000 ₫</p>
                        </div>
                    </a>
                    </li>
                    <li><a href="/">
                        <img src={category01} alt="" />
                        <div className="category__list--info">
                            <span>Simple 10</span>
                            <p>700,000 ₫</p>
                        </div>
                    </a>
                    </li>
                    <li><a href="/">
                        <img src={category02} alt="" />
                        <div className="category__list--info">
                            <span>Simple 9</span>
                            <p>300,000 ₫</p>
                        </div>
                    </a>
                    </li>
                    <li><a href="/">
                        <img src={category03} alt="" />
                        <div className="category__list--info">
                            <span>Simple 8</span>
                            <p>300,000 ₫</p>
                        </div>
                    </a>
                    </li>
                    <li><a href="/">
                        <img src={category04} alt="" />
                        <div className="category__list--info">
                            <span>Simple 7</span>
                            <p>300,000 ₫</p>
                        </div>
                    </a>
                    </li>
                    <li style={{ border: 'none' }}><a href="/">
                        <img src={category05} alt="" />
                        <div className="category__list--info">
                            <span>Simple 6</span>
                            <p>300,000 ₫</p>
                        </div>
                    </a>
                    </li>
                </ul>
                <h3>BÀI VIẾT MỚI NHẤT</h3>
                <ul className="new-post-list">
                    <li>
                        <a href="/">
                            <img src={new01} alt="" />
                            <p>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={new02} alt="" />
                            <p>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={new03} alt="" />
                            <p>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</p>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <img src={new04} alt="" />
                            <p>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</p>
                        </a>
                    </li>
                    <li style={{ border: 'none' }}>
                        <a href="/">
                            <img src={new05} alt="" />
                            <p>Chiếc đồng hồ của những CEO quyền lực nhất thế giới</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CategoryCol3;