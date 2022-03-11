import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ClickTabPanel.css'
import Popular from '../../components/Popular/Popular'
import Promotion from '../../components/Promotion/Promotion'
import ProductNew from '../../components/ProductNew/ProductNew'

function ClickTabPanel() {
    return (
        <div className="tab-product">
            <Tabs>
                <TabList>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                <Tab>Sản phẩm phổ biến</Tab>
                                <Tab>Sản phẩm khuyến mãi</Tab>
                                <Tab>Sản phẩm mới</Tab>
                            </div>
                        </div>
                    </div>
                </TabList>

                <TabPanel>
                    <Popular />
                </TabPanel>
                <TabPanel>
                    <Promotion />
                </TabPanel>
                <TabPanel>
                    <ProductNew />
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default ClickTabPanel;