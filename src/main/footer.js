import React, { Component } from 'react';
import { Layout } from "antd";

const { Footer } = Layout;

export default class AppFooter extends Component{
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                <div>АС Кассовый центр ©2018 ООО Сбербанк (версия 03.000.00-rc5 build 755)</div>
            </Footer>
        )
    }
}