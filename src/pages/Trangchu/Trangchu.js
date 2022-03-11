import React from 'react';
import Slider from '../../Container/Slider/Slider'
import Banner from '../../Container/Banner/Banner'
import ProductHighlights from '../../Container/ProductHighlights/ProductHighlights'
import BannerProduct from '../../Container/BannerProduct/BannerProduct'
import ClickTabPanel from '../../Container/ClickTabPanel/ClickTabPanel';
import News from '../../Container/News/News'
import Footer from '../../Container/Footer/Footer';
import Information from '../../Container/Information/Information'
import MenuTop from '../../components/MenuTop/MenuTop'

function Trangchu() {
    return (
        <div className="wrap">
            <MenuTop />   {/** Menu Tablet Mobile */}
            <Slider />      {/** Slider */}
            <Banner />      {/** banner top */}
            <ProductHighlights />     {/** product slick */}
            <BannerProduct />   {/** banner bottom */}
            <ClickTabPanel />    {/** product chuyển tab */}
            <News />     {/** tin tức về đồng hồ */}
            <Information />  {/** đăng ký nhận thông tin*/}
            <Footer />     {/** Footer */}
        </div>
    );
}

export default Trangchu;

