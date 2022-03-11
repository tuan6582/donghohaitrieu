import React, { useRef } from 'react';
import './Information.css'



function Information() {

    const inputInformationRef = useRef()

    const spanAlert = useRef()


    const handleSubmit = () => {
        if (inputInformationRef.current.value === '') {
            spanAlert.current.style.display = 'block';
            setTimeout(() => {
                spanAlert.current.style.display = 'none';
            }, 3000)
        } if (inputInformationRef.current.value !== '@') {
            spanAlert.current.style.display = 'block';
            setTimeout(() => {
                spanAlert.current.style.display = 'none';
            }, 3000)
        }

    }
    return (
        <div className="information">
            <div className="container">
                <div className="information-app">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="information-left">
                                <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <div className="information-right">
                                <div className="information-check">
                                    <input type="text" placeholder="Email..." ref={inputInformationRef} />
                                    <span className="alert-check" ref={spanAlert}>Bạn cần điền thông tin được yêu cầu.</span>
                                </div>
                                <div className="information-submit">
                                    <button className="btn-submit-email" onClick={handleSubmit}>ĐĂNG KÝ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Information;