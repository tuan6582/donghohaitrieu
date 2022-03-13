import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import HeaderApp from '../../Container/HeaderApp/HeaderApp'
import Nav from '../Nav/Nav'


function Home() {

    return (
        <React.Fragment>
            <HeaderApp />
            <BrowserRouter>
                <Nav />
            </BrowserRouter>

        </React.Fragment>
    );
}

export default Home;