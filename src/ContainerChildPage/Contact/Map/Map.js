import React from 'react';
function Map() {

    return (
        <div className="contact-map" style={{ margin: '40px' }} data-aos="zoom-in">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4196183914714!2d106.64810521424609!3d10.77913846209246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed189fa855d%3A0xf63e15bfce46baef!2sC%C3%B4ng%20ty%20TNHH%20-%20MONA%20MEDIA!5e0!3m2!1svi!2s!4v1647270623108!5m2!1svi!2s" width="100%" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Map;