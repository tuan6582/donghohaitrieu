import React from 'react';
import './SpecialProduct.css'
import { IoWatch } from 'react-icons/io5'
import { MdFiberNew, MdLocalShipping } from 'react-icons/md'
import { AiFillSecurityScan } from 'react-icons/ai'
import { GiAnticlockwiseRotation, GiMoneyStack } from 'react-icons/gi'

function SpecialProduct() {
    return (
        <div className="special">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="box-special" data-aos="fade-left">
                            <div className="special-icon">
                                <IoWatch />
                            </div>
                            <div className="special-text">
                                <h3>Hàng chính hãng</h3>
                                <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="box-special" data-aos="fade-left">
                            <div className="special-icon">
                                <MdFiberNew />
                            </div>
                            <div className="special-text">
                                <h3>Sản phẩm mới 100%</h3>
                                <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="box-special" data-aos="fade-left">
                            <div className="special-icon">
                                <AiFillSecurityScan />
                            </div>
                            <div className="special-text">
                                <h3>Bảo hành 12 tháng</h3>
                                <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="box-special" data-aos="fade-left">
                            <div className="special-icon">
                                <GiAnticlockwiseRotation />
                            </div>
                            <div className="special-text">
                                <h3>Đổi trả trong vòng 7 ngày</h3>
                                <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="box-special" data-aos="fade-left">
                            <div className="special-icon">
                                <MdLocalShipping />
                            </div>
                            <div className="special-text">
                                <h3>Miễn phí giao hàng</h3>
                                <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="box-special" data-aos="fade-left">
                            <div className="special-icon">
                                <GiMoneyStack />
                            </div>
                            <div className="special-text">
                                <h3>Giá cả hợp lý</h3>
                                <p>Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialProduct;