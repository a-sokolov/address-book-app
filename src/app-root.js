import React, { Component } from "react";
import AppHeader from './main/header';
import AppFooter from './main/footer';

import { Layout } from 'antd';
const { Content } = Layout;

import Operkassa from './components/modes/operkassa';

export default class AppRoot extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <AppHeader/>
                    <Content>
                        <Operkassa/>
                    </Content>
                    <AppFooter/>
                </Layout>
            </div>
        )
    }
}