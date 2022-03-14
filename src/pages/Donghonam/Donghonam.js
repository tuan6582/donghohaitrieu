import React from 'react';
import MenuTop from '../../components/MenuTop/MenuTop'
import Footer from '../../Container/Footer/Footer';
import Information from '../../Container/Information/Information';
import CategoryContainer from '../../ContainerChildPage/WatchMen/Category/CategoryContainer/CategoryContainer';
import ShopTitle from '../../ContainerChildPage/WatchMen/ShopTitle/ShopTitle';
function Donghonam() {
    return (
        <div>
            <MenuTop />
            <ShopTitle />
            <CategoryContainer />
            <Information />
            <Footer />
        </div>
    );
}

export default Donghonam;