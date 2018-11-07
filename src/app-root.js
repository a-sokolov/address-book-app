import React, { Component } from "react";
import AppHeader from './main/header';
import AppFooter from './main/footer';
import Home from './main/home';
import { Route, Switch } from 'react-router-dom';

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
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/operkassa" component={Operkassa}/>
                        </Switch>
                    </Content>
                    <AppFooter/>
                </Layout>
            </div>
        )
    }
}