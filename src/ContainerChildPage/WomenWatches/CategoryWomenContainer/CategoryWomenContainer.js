import React from 'react';
import CategoryWomenCol3 from '../CategoryWomenCol3/CategoryWomenCol3';
import CategoryWomenCol9 from '../CategoryWomenCol9/CategoryWomenCol9';
function CategoryWomenContainer() {
    return (
        <div className="category-container">
            <div className="container">
                <div className="row" >
                    <CategoryWomenCol3 />
                    <CategoryWomenCol9 />
                </div>
            </div>
        </div>
    );
}

export default CategoryWomenContainer;