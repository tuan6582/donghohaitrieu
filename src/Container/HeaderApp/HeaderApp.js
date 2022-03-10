import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop'
import HeaderCenter from './HeaderCenter/HeaderCenter'
import './HeaderApp.css'

function HeaderApp() {
    return (
        <React.Fragment>

            <div className="header">
                <HeaderTop />
                <HeaderCenter />
            </div>

        </React.Fragment>
    );
}

export default HeaderApp;