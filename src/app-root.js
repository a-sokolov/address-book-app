import React, { Component } from "react";
// import { Route, Switch } from 'react-router-dom';

import { createStore} from 'redux';
import rootReducer from './reducers/root';
import { signout } from "./actions/auth/signout";
import { authenticate } from "./actions/auth/authenticate";

const store = createStore(rootReducer);

window.store = store;
window.signout = signout;
window.authenticate = authenticate;

import { Layout } from 'antd';
const { Content } = Layout;

/*import AppHeader from './components/blocks/header';
import AppFooter from './components/blocks/footer';
import Home from './components/blocks/home';

import Operkassa from './components/ascc/root/operkassa';*/

export default class AppRoot extends Component {
    render() {
        return (
            <div>
                Fucking hello!
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
        )
    }
}