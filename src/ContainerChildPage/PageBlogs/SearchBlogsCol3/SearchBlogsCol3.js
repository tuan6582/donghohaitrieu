import React from 'react';
import './SearchBlogsCol3.css'
import { new01, new02, new03, new04, new05 } from '../../../Container/asstes/img'

function SearchBlogsCol3() {
    return (
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div className="search-blogs">
                <div className="search-input">
                    <input type="text" placeholder="Tìm kiếm" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
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

export default SearchBlogsCol3;