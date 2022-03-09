import React from 'react';
import './HeaderBottom.css'

function HeaderBottom() {

    return (
        <div className="header-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <div className="header__bottom--nav">
                            <ul className="bottom__nav">
                                <li><a className="bottom__nav--link" href="/">Trang chủ</a></li>
                                <li><a className="bottom__nav--link" href="/">Giới thiệu</a></li>
                                <li><a className="bottom__nav--link" href="/">Đồng hồ nam</a></li>
                                <li><a className="bottom__nav--link" href="/">Đồng hồ nữ</a></li>
                                <li><a className="bottom__nav--link" href="/">Blogs</a></li>
                                <li><a className="bottom__nav--link" href="/">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;