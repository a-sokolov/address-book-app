import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import history from '../../history';

import { Layout, Menu, Icon, Breadcrumb} from 'antd';
const { Sider, Content } = Layout;
const { SubMenu } = Menu;

import AcceptVSPBags from '../incoming/accept-vsp-bags';

export default class Operkassa extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    menuItemClick = (menuItem) => {
        switch (menuItem.key) {
            case 'accept_vsp_bags':
                history.push('/operkassa/accept_vsp_bags'); // + menuItem.key);
                break;
            default:
                history.push('/operkassa');
        }
        console.log('clicked', menuItem);
    }

    render() {
        return (
            <Layout style={{ minHeight: '80vh' }}>
                <Sider collapsible
                       collapsed={this.state.collapsed}
                       onCollapse={this.onCollapse}
                       theme="light">
                    <Menu theme="light"
                          // defaultSelectedKeys={['1']}
                          mode="inline"
                          onClick={this.menuItemClick}>
                        <Menu.Item key="accept_vsp_bags">
                            <Icon type="pie-chart" />
                            <span>Прием сумок от ВСК/КЦ/КУ/ЦБ</span>
                        </Menu.Item>
                        <Menu.Item key="accept_from_ki">
                            <Icon type="desktop" />
                            <span>Прием сумок от КИ</span>
                        </Menu.Item>
                        <Menu.Item key="accept_from_atm">
                            <Icon type="file" />
                            <span>Прием касст от банкоматов</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>АС КЦ</Breadcrumb.Item>
                        <Breadcrumb.Item>Оперкасса</Breadcrumb.Item>
                        <Breadcrumb.Item>Прием сумок от ВСК/КЦ/КУ/ЦБ</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                       <Route exact strict path="/operkassa/accept_vsp_bags" component={AcceptVSPBags}/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}