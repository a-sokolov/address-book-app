import React, {Component} from 'react';
import ContentLayout from '@jetbrains/ring-ui/components/content-layout/content-layout';
import Sidebar from '@jetbrains/ring-ui/components/content-layout/sidebar';
// import Link from '@jetbrains/ring-ui/components/link/link';
// import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
// import Button from '@jetbrains/ring-ui/components/button/button';
// import {ChevronDownIcon} from "@jetbrains/ring-ui/components/icon";

import '../mode.css';

import Switch from "react-router-dom/es/Switch";
import {Link} from "react-router-dom";
import Route from "react-router-dom/es/Route";

import VSPAccept from './forms/vsp-accept.js';
import ATMAccept from './forms/atm-accept.js';
import KIAccept from './forms/ki-accept.js';

export default class Operkassa extends Component {
    render() {
        return (
            <div>
                <div>
                    <h4>ОПЕРКАССА</h4>
                </div>

                <ContentLayout>
                    <Sidebar className="sidebar">
                        <Link to="/operkassa/vsp_accept">Прием сумок от ВСП/КЦ/КУ/ЦБ</Link>
                        <Link to="/operkassa/ki_accept">Прием сумок от КИ</Link>
                        <Link to="/operkassa/atm_accept">Прием кассет банкоматов</Link>
                    </Sidebar>
                    <div>
                        <Route path='/operkassa/vsp_accept' component={VSPAccept}/>
                        <Route path='/operkassa/ki_accept' component={KIAccept}/>
                        <Route path='/operkassa/atm_accept' component={ATMAccept}/>
                    </div>
                </ContentLayout>
            </div>
        )
    }
}