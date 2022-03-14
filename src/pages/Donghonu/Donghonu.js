import React from 'react';
import MenuTop from '../../components/MenuTop/MenuTop'
import Footer from '../../Container/Footer/Footer';
import Information from '../../Container/Information/Information';
import CategoryWomenContainer from '../../ContainerChildPage/WomenWatches/CategoryWomenContainer/CategoryWomenContainer';
import ShopTitleWomen from '../../ContainerChildPage/WomenWatches/ShopTitleWomen/ShopTitleWomen';
function Donghonu() {
    return (
        <div>
            <MenuTop />
            <ShopTitleWomen />
            <CategoryWomenContainer />
            <Information />
            <Footer />
        </div>
    );
}

export default Donghonu;