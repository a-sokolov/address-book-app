import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar } from 'antd';

const { Header } = Layout;

export default class AppHeader extends Component{
    render() {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }} className="header">
                <Menu onClick={this.handleClick}
                      theme="dark"
                      mode="horizontal"
                      style={{ lineHeight: '64px' }}>
                    <Menu.Item key="home">
                        <Icon type="home" />
                    </Menu.Item>
                    <Menu.Item key="operkassa">Оперкасса</Menu.Item>
                    <Menu.Item key="kassa_pereschta">Касса пересчета</Menu.Item>
                    <Menu.Item key="buh_documnts">Бухгалтерские документы</Menu.Item>
                    <Menu.Item key="card_index">Картотеки</Menu.Item>
                    <Menu.Item key="user">
                        <Icon type="user" />
                        Соколов А.В.
                    </Menu.Item>
                </Menu>
             </Header>
        )
    }

    handleClick = (e) => {
        console.log('click ', e);
    }
}