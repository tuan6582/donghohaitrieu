import React from 'react';
import './Nav.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import Gioithieu from '../pages/Gioithieu/Gioithieu'
import Donghonam from '../pages/Donghonam/Donghonam'
import Donghonu from '../pages/Donghonu/Donghonu'
import Blogs from '../pages/Blogs/Blogs'
import Lienhe from '../pages/Lienhe/Lienhe'





function Nav() {



    return (
        <React.Fragment>
            <div className="nav-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="bottom__block--nav">
                                <ul className="bottom__nav">
                                    <li><NavLink activeClassName="active" to="/">Trang chủ</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/gioithieu">Giới thiệu</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/donghonam">Đồng hồ nam</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/donghonu">Đồng hồ nữ</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/blogs">Blogs</NavLink></li>
                                    <li><NavLink activeClassName="active" to="/lienhe">Liên hệ</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/gioithieu" element={<Gioithieu />} />
                <Route path="/donghonam" element={<Donghonam />} />
                <Route path="/donghonu" element={<Donghonu />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/lienhe" element={<Lienhe />} />
            </Routes>
        </React.Fragment>


    );
}

export default Nav;