import React from 'react';
import CategoryCol3 from '../CategoryCol3/CategoryCol3';
import CategoryCol9 from '../CategoryCol9/CategoryCol9';

function CategoryContainer() {
    return (
        <div className="category-container">
            <div className="container">
                <div className="row">
                    <CategoryCol3 />
                    <CategoryCol9 />
                </div>
            </div>
        </div>
    );
}

export default CategoryContainer;