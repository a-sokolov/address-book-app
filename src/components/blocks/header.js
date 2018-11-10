import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Drawer, Divider } from 'antd';
import history from '../history';

const { Header } = Layout;

export default class AppHeader extends Component{
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    toolbarMenuClick = (toolbarItem) => {
        switch (toolbarItem.key) {
           case 'operkassa':
                history.push('/' + toolbarItem.key);
                break;
           case 'user':
                break;
           default:
                history.push('/');
        }
    }

    render() {
        return (
            <div>
                <Header className="header">
                    <Menu onClick={this.toolbarMenuClick}
                          theme="dark"
                          // defaultSelectedKeys={['operkassa']}
                          mode="horizontal"
                          style={{ lineHeight: '64px' }}>
                        <Menu.Item key="home">
                            <Icon type="home" />
                        </Menu.Item>
                        <Menu.Item key="operkassa">Оперкасса</Menu.Item>
                        <Menu.Item key="kassa_pereschta">Касса пересчета</Menu.Item>
                        <Menu.Item key="buh_documnts">Бухгалтерские документы</Menu.Item>
                        <Menu.Item key="card_index">Картотеки</Menu.Item>
                        <Menu.Item key="user" onClick={this.showDrawer}>
                            <Icon type="user" />
                            Соколов А.В.
                        </Menu.Item>
                    </Menu>
                 </Header>
                <Drawer
                    width={320}
                    placement="right"
                    onClose={this.onClose}
                    visible={this.state.visible}
                    maskClosable={false}
                    title="Данные пользователя">
                    <p>Соколов Анатолий Викторович</p>
                    <p>Руководитель разработки IT-направления</p>
                    <Divider />
                </Drawer>
            </div>
        )
    }
}