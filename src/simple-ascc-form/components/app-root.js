import React, {Component} from 'react';
import Auth from '@jetbrains/ring-ui/components/auth/auth';
import AppHeader from './header.js';
import AppFooter from './footer.js';

import Home from './modes/home-mode.js';
import Operkassa from './modes/operkassa/operkassa-mode.js';
import KassaPerescheta from './modes/kassa-perescheta-mode.js';
import BuhDocuments from './modes/buh-documents-mode.js';
import Ledger from './modes/ledger-mode.js';

import styles from '../app.css';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/operkassa' component={Operkassa}/>
            <Route path='/kassa_perescheta' component={KassaPerescheta}/>
            <Route path='/buh_documents' component={BuhDocuments}/>
            <Route path='/ledger' component={Ledger}/>
        </Switch>
    </main>
);

export default class AppRoot extends Component {
    componentDidMount() {
        // this.auth.init();
    }

    auth = new Auth({
        // clientId: <your client id here>
        serverUri: 'https:/hub.localhost:9045' // replace with your Hub server
    });

    render() {
        return (
            <div>
                <AppHeader/>
                <div className={styles.content}>
                    <Main />
                </div>
                <AppFooter/>
            </div>
        );
    }
}
