import React from 'react';
import MenuTop from '../../components/MenuTop/MenuTop';
import IntroduceProduct from '../../ContainerChildPage/Introduce/IntroduceProduct/IntroduceProduct';
import ReviewBanner from '../../ContainerChildPage/Introduce/ReviewBanner/ReviewBanner';
import ReviewProduct from '../../ContainerChildPage/Introduce/ReviewProduct/ReviewProduct';
import SpecialProduct from '../../ContainerChildPage/Introduce/SpecialProduct/SpecialProduct';

function Gioithieu() {

    return (
        <div>
            <MenuTop />
            <IntroduceProduct />
            <SpecialProduct />
            <ReviewBanner />
            <ReviewProduct />
        </div>
    );
}

export default Gioithieu;