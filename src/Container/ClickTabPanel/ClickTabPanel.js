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
            <div className="container" style={{ paddingLeft: 0, paddingRight: 0 }}>
                <div className="row ">
                    <div className="col-xl-12 col-lg-12">
                        <Tabs>
                            <TabList>
                                <Tab>Sản phẩm phổ biến</Tab>
                                <Tab>Sản phẩm khuyến mãi</Tab>
                                <Tab>Sản phẩm mới</Tab>
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
                </div>
            </div>
        </div>
    );
}

export default ClickTabPanel;