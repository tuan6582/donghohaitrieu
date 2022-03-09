import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop'
import HeaderCenter from '../HeaderCenter/HeaderCenter'
import HeaderBottom from '../HeaderBottom/HeaderBottom'
import './HeaderApp.css'

function HeaderApp() {
    return (
        <div>
            <div className="header">
                <HeaderTop />
                <HeaderCenter />
                <HeaderBottom />
            </div>
        </div>
    );
}

export default HeaderApp;