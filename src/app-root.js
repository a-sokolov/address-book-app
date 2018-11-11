import React, { Component } from "react";
// import { Route, Switch } from 'react-router-dom';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import contextReducer from './reducers/context-reducer';
import authenticateReducer from './reducers/auth-reducer';

import { Version } from './components/context';

/*import { signout } from "./actions/auth/signout";
import { authenticate } from "./actions/auth/authenticate";*/

const store = createStore(
    combineReducers({contextReducer, authenticateReducer})
);

window.store = store;
/*window.signout = signout;
window.authenticate = authenticate;*/

import { Layout } from 'antd';
const { Content } = Layout;

/*import AppHeader from './components/blocks/header';
import AppFooter from './components/blocks/footer';
import Home from './components/blocks/home';

import Operkassa from './components/ascc/root/operkassa';*/

export default class AppRoot extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <p>Fucking hello!</p>
                    <Version/>
                     {/*<Layout>
                        <AppHeader/>
                        <Content>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/operkassa" component={Operkassa}/>
                            </Switch>
                        </Content>
                        <AppFooter/>
                    </Layout>*/}
                </div>
            </Provider>
        )
    }
}