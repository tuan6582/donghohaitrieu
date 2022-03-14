import React from 'react';
import MenuTop from '../../components/MenuTop/MenuTop';
import Footer from '../../Container/Footer/Footer';
import Information from '../../Container/Information/Information';
import Map from '../../ContainerChildPage/Contact/Map/Map';


function Lienhe() {
    return (
        <React.Fragment>
            <MenuTop />
            <div className="Contact">
                <Map />
            </div>
            <Information />
            <Footer />
        </React.Fragment>
    );
}

export default Lienhe;