import React from 'react';
import Slider from '../../Container/Slider/Slider'
import Banner from '../../Container/Banner/Banner'
import ProductHighlights from '../../Container/ProductHighlights/ProductHighlights'
import BannerProduct from '../../Container/BannerProduct/BannerProduct'
import ClickTabPanel from '../../Container/ClickTabPanel/ClickTabPanel';
import News from '../../Container/News/News'

function Trangchu() {
    return (
        <div className="wrap">
            <Slider />
            <Banner />
            <ProductHighlights />
            <BannerProduct />
            <ClickTabPanel />
            <News />
        </div>
    );
}

export default Trangchu;

