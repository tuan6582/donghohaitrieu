import React from 'react';
import Footer from '../../Container/Footer/Footer';
import HeaderApp from '../../Container/HeaderApp/HeaderApp'
import Information from '../../Container/Information/Information';
import Nav from '../Nav/Nav'


function Home() {

    return (
        <div>
            <HeaderApp />
            <Nav />
            <Information />
            <Footer />
        </div>
    );
}

export default Home;