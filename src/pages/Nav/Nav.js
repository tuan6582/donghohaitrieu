
import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Gioithieu from '../../pages/Gioithieu/Gioithieu'
import Donghonam from '../../pages/Donghonam/Donghonam'
import Donghonu from '../../pages/Donghonu/Donghonu'
import Blogs from '../../pages/Blogs/Blogs'
import Lienhe from '../../pages/Lienhe/Lienhe'
import Trangchu from '../../pages/Trangchu/Trangchu'
import './Nav.css'

function ScrollToTop() {
    const { pathname } = useLocation(true);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


function Nav() {

    const [backToTop, setBackToTop] = useState(false)

    useEffect(() => {

        const handleGoTop = () => {
            if (window.scrollY > 150) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        }

        window.addEventListener('scroll', handleGoTop)
    }, [])


    const handleScroll = () => {
        if (window.scrollY > 150) {
            document.querySelector('.nav-bottom').classList.add('active-nav-top')
        } else {
            document.querySelector('.nav-bottom').classList.remove('active-nav-top')
        }
    }

    window.addEventListener('scroll', handleScroll)

    const handleSmooth = () => {
        document.querySelector('html').style.scrollBehavior = 'smooth';
        setTimeout(function () {
            document.querySelector('html').style.scrollBehavior = 'unset';
        })
    }

    return (
        <React.Fragment>
            <ScrollToTop />
            <div className="nav-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
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

            {backToTop && (
                <div className="go-top" onClick={handleSmooth}>
                    <a href="#Home"><i className="fa-solid fa-angles-up"></i></a>
                </div>
            )}

            <Routes>
                <Route path="/" element={<Trangchu />} />
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