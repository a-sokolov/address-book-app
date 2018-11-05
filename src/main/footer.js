import React, { Component } from 'react';
import { Layout } from "antd";

const { Footer } = Layout;

export default class AppFooter extends Component{
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                <div>
                    АС Кассовый центр ©2018 <a href="https://www.sberbank.ru" target="_blank">ООО Сбербанк</a> (версия 03.000.00-rc5 build 755)
                </div>
            </Footer>
        )
    }
}