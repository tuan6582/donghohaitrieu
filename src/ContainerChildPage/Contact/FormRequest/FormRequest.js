import React from 'react';
import './FormRequest.css'

function FormRequest() {

    const handleSubmit = () => {

        if (document.querySelector('.request-name>input').value === '') {
            document.querySelector('.request-name>span').style.display = 'block';
            setTimeout(function () {
                document.querySelector('.request-name>span').style.display = 'none';
            }, 3000)
        }

        if (document.querySelector('.request-email>input').value === '') {
            document.querySelector('.request-email>span').style.display = 'block'
            setTimeout(function () {
                document.querySelector('.request-email>span').style.display = 'none'
            }, 3000)
        }

        if (document.querySelector('.request-phone>input').value === '') {
            document.querySelector('.request-phone>span').style.display = 'block'
            setTimeout(function () {
                document.querySelector('.request-phone>span').style.display = 'none'
            }, 3000)
        }

        if (document.querySelector('.request-address>input').value === '') {
            document.querySelector('.request-address>span').style.display = 'block'
            setTimeout(function () {
                document.querySelector('.request-address>span').style.display = 'none'
            }, 3000)
        }

        if (document.querySelector('.request-message>input').value === '') {
            document.querySelector('.request-message>span').style.display = 'block'
            setTimeout(function () {
                document.querySelector('.request-message>span').style.display = 'none'
            }, 3000)
        }

    }

    return (
        <div className="form-request">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="form-container">
                            <div className="form-request-top">
                                <div className="request-name">
                                    <input type="text" placeholder="Họ và tên" />
                                    <span>Bạn cần điền thông tin được yêu cầu.</span>
                                </div>
                                <div className="request-email">
                                    <input type="text" placeholder="Email" />
                                    <span>Bạn cần điền thông tin được yêu cầu.</span>
                                </div>
                            </div>
                            <div className="form-request-center">
                                <div className="request-phone">
                                    <input type="text" placeholder="Số điện thoại" />
                                    <span>Bạn cần điền thông tin được yêu cầu.</span>
                                </div>
                                <div className="request-address">
                                    <input type="text" placeholder="Địa chỉ" />
                                    <span>Bạn cần điền thông tin được yêu cầu.</span>
                                </div>
                            </div>
                            <div className="form-request-bottom">
                                <div className="request-message">
                                    <input type="text" placeholder="Lời nhắn" />
                                    <span>Bạn cần điền thông tin được yêu cầu.</span>
                                </div>
                            </div>
                            <div className="form-request-submit">
                                <button type="submit" onClick={handleSubmit}>Gửi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormRequest;