import React from 'react';
import './Nav.css'
import { Routes, Route, Link } from 'react-router-dom'
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
                                    <li><a className="bottom__nav--link" href="/">Trang chủ</a></li>
                                    <li><Link className="bottom__nav--link" to="/gioithieu">Giới thiệu</Link></li>
                                    <li><Link className="bottom__nav--link" to="/donghonam">Đồng hồ nam</Link></li>
                                    <li><Link className="bottom__nav--link" to="/donghonu">Đồng hồ nữ</Link></li>
                                    <li><Link className="bottom__nav--link" to="/blogs">Blogs</Link></li>
                                    <li><Link className="bottom__nav--link" to="/lienhe">Liên hệ</Link></li>
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