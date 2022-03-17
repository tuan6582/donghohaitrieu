import React from 'react';
import MenuTop from '../../components/MenuTop/MenuTop';
import ContactCenter from '../../ContainerChildPage/Contact/ContactCenter/ContactCenter';
import FormRequest from '../../ContainerChildPage/Contact/FormRequest/FormRequest';
import Map from '../../ContainerChildPage/Contact/Map/Map';


function Lienhe() {
    return (
        <React.Fragment>
            <MenuTop />
            <div className="Contact">
                <Map />
                <ContactCenter />
                <FormRequest />
            </div>
        </React.Fragment>
    );
}

export default Lienhe;