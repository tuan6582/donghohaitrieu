import React from 'react';
import { productNu01, productNu02, productNu03, productNu04, productCategory05 } from '../../../Container/asstes/img';

function CategoryWomenCol9() {
    return (
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                    <div className="box-product">
                        <a href="/"><img src={productNu01} alt="" /></a>
                        <div className="img-behind">
                            <a href="/"> <img src={productCategory05} alt="" /></a>
                        </div>
                        <div className="box-product-info">
                            <h3>Classico</h3>
                            <span>700,000 đ</span>
                            <a href="/"> Thêm vào giỏ</a>
                        </div>
                        <div className="product-head">
                            <a href="/"><i className="fa-solid fa-heart"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                    <div className="box-product">
                        <a href="/"><img src={productNu02} alt="" /></a>
                        <div className="img-behind">
                            <a href="/"> <img src={productCategory05} alt="" /></a>
                        </div>
                        <div className="box-product-info">
                            <h3>Classico 2</h3>
                            <span>700,000 đ</span>
                            <a href="/"> Thêm vào giỏ</a>
                        </div>
                        <div className="product-head">
                            <a href="/"><i className="fa-solid fa-heart"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                    <div className="box-product">
                        <a href="/"><img src={productNu03} alt="" /></a>
                        <div className="img-behind">
                            <a href="/"> <img src={productCategory05} alt="" /></a>
                        </div>
                        <div className="box-product-info">
                            <h3>Simple 7</h3>
                            <span>700,000 đ</span>
                            <a href="/"> Thêm vào giỏ</a>
                        </div>
                        <div className="product-head">
                            <a href="/"><i className="fa-solid fa-heart"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-6">
                    <div className="box-product">
                        <a href="/"><img src={productNu04} alt="" /></a>
                        <div className="img-behind">
                            <a href="/"> <img src={productCategory05} alt="" /></a>
                        </div>
                        <div className="box-product-info">
                            <h3>Simple 9</h3>
                            <span>700,000 đ</span>
                            <a href="/"> Thêm vào giỏ</a>
                        </div>
                        <div className="product-head">
                            <a href="/"><i className="fa-solid fa-heart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryWomenCol9;