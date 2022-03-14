import React from 'react';
import BlogsCol9 from '../../ContainerChildPage/PageBlogs/BlogsCol9/BlogsCol9';
import SearchBlogsCol3 from '../../ContainerChildPage/PageBlogs/SearchBlogsCol3/SearchBlogsCol3';
import MenuTop from '../../components/MenuTop/MenuTop'
import Information from '../../Container/Information/Information'
import Footer from '../../Container/Footer/Footer'

function Blogs() {
    return (
        <React.Fragment>
            <MenuTop />
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="blogs-title" style={{
                            textAlign: 'center',
                            margin: '20px 0',
                            fontSize: '2rem',
                            fontWeight: '700'
                        }}>BLOGS</div>
                    </div>
                    <SearchBlogsCol3 />
                    <BlogsCol9 />

                </div>
            </div>
            <Information />
            <Footer />
        </React.Fragment>
    );
}

export default Blogs;