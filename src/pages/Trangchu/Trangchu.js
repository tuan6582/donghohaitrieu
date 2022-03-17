import React from 'react';
import MenuTop from '../../components/MenuTop/MenuTop';
import Banner from '../../Container/Banner/Banner';
import BannerProduct from '../../Container/BannerProduct/BannerProduct';
import ClickTabPanel from '../../Container/ClickTabPanel/ClickTabPanel';
import News from '../../Container/News/News';
import ProductHighlights from '../../Container/ProductHighlights/ProductHighlights';
import Slider from '../../Container/Slider/Slider';

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
        </div>
    );
}

export default Trangchu;

