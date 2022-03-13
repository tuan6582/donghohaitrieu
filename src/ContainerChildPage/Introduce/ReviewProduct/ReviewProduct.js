import React from 'react';
import './ReviewProduct.css'
import { customer01, customer02, customer03 } from '../../../Container/asstes/img'

function ReviewProduct() {
    return (
        <div className="review-product">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box-customer" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="customer-img ">
                                <img src={customer01} alt="" />
                            </div>
                            <div className="customer-text">
                                <p >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                                <h3 >Thúy Kiều</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box-customer" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="customer-img ">
                                <img src={customer02} alt="" />
                            </div>
                            <div className="customer-text">
                                <p >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                                <h3 >Nguyễn Du</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                        <div className="box-customer" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <div className="customer-img ">
                                <img src={customer03} alt="" />
                            </div>
                            <div className="customer-text">
                                <p >Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại ngày nay</p>
                                <h3 >Thúy Vân</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewProduct;