import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop'
import HeaderCenter from '../HeaderCenter/HeaderCenter'
import './HeaderApp.css'

function HeaderApp() {
    return (
        <div>
            <div className="header">
                <HeaderTop />
                <HeaderCenter />
            </div>
        </div>
    );
}

export default HeaderApp;