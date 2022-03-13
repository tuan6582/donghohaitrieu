import React from 'react';
import MenuTop from '../../components/MenuTop/MenuTop'
import IntroduceProduct from '../../ContainerChildPage/Introduce/IntroduceProduct/IntroduceProduct'
import SpecialProduct from '../../ContainerChildPage/Introduce/SpecialProduct/SpecialProduct';
import Information from '../../Container/Information/Information'
import Footer from '../../Container/Footer/Footer'
import ReviewBanner from '../../ContainerChildPage/Introduce/ReviewBanner/ReviewBanner';
import ReviewProduct from '../../ContainerChildPage/Introduce/ReviewProduct/ReviewProduct'

function Gioithieu() {

    return (
        <div>
            <MenuTop />
            <IntroduceProduct />
            <SpecialProduct />
            <ReviewBanner />
            <ReviewProduct />
            <Information />
            <Footer />
        </div>
    );
}

export default Gioithieu;