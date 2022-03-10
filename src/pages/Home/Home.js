import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import HeaderApp from '../../Container/HeaderApp/HeaderApp'
import Nav from '../Nav/Nav'

function Home() {
    return (
        <div className="Main">
            <HeaderApp />
            <BrowserRouter>
                <Nav />
            </BrowserRouter>
        </div>
    );
}

export default Home;