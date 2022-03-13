import React from 'react';
import './IntroduceProduct.css'
import { image01 } from '../../../Container/asstes/img';

function IntroduceProduct(props) {
    return (
        <div className="introduce-product">
            <div className="container">
                <div className="row align-items-xl-center align-items-lg-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="introduce-image" data-aos="fade-right">
                            <img src={image01} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="introduce-text" data-aos="fade-left">
                            <h2>Giới thiệu về Watch Mona</h2>
                            <p>“Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroduceProduct;