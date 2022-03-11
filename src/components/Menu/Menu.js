import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu() {
    return (
        <div>
            <div className="menu">
                <ul className="bottom__nav--menu">
                    <li><Link to="/" >Trang chủ</Link></li>
                    <li><Link to="/gioithieu">Giới thiệu</Link></li>
                    <li><Link to="/donghonam">Đồng hồ nam</Link></li>
                    <li><Link to="/donghonu">Đồng hồ nữ</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/lienhe">Liên hệ</Link></li>
                </ul>
            </div>


        </div>
    );
}

export default Menu;