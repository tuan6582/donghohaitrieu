
import { Routes, Route, NavLink } from 'react-router-dom'
import Gioithieu from '../../pages/Gioithieu/Gioithieu'
import Donghonam from '../../pages/Donghonam/Donghonam'
import Donghonu from '../../pages/Donghonu/Donghonu'
import Blogs from '../../pages/Blogs/Blogs'
import Lienhe from '../../pages/Lienhe/Lienhe'
import Trangchu from '../../pages/Trangchu/Trangchu'
import React from 'react';
import './Nav.css'
import { } from 'react-router-dom'



function Nav() {

    return (
        <React.Fragment>
            <div className="nav-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <div className="bottom__block--nav">
                                <ul className="bottom__nav">
                                    <li><NavLink activeclassname="active" to="/" >Trang chủ</NavLink></li>
                                    <li><NavLink activeclassname="active" to="/gioithieu">Giới thiệu</NavLink></li>
                                    <li><NavLink activeclassname="active" to="/donghonam">Đồng hồ nam</NavLink></li>
                                    <li><NavLink activeclassname="active" to="/donghonu">Đồng hồ nữ</NavLink></li>
                                    <li><NavLink activeclassname="active" to="/blogs">Blogs</NavLink></li>
                                    <li><NavLink activeclassname="active" to="/lienhe">Liên hệ</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="///*" element={<Trangchu />} />
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