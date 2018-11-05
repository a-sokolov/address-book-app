import React, {Component} from 'react';
import Header, {
    Logo,
    Tray/*,
    SmartProfile,
    SmartServices*/
} from '@jetbrains/ring-ui/components/header/header';
// import Link from '@jetbrains/ring-ui/components/link/link';
import Button from '@jetbrains/ring-ui/components/button/button';
import Dropdown from '@jetbrains/ring-ui/components/dropdown/dropdown';
import PopupMenu from '@jetbrains/ring-ui/components/popup-menu/popup-menu';
import DatePicker from '@jetbrains/ring-ui/components/date-picker/date-picker';
import Text from '@jetbrains/ring-ui/components/text/text';
import Group from '@jetbrains/ring-ui/components/group/group';

import {UserIcon, ArtifactsIcon} from '@jetbrains/ring-ui/components/icon';
// import hubLogo from '../../images/hub.svg';
import {Link} from "react-router-dom";

export default class AppHeader extends Component {
    state = {date: '20.09.14'};

    setDate = date => {
        this.setState({date})
    }

    render() {
        return (
            <div>
                <Header>
                    <a href="/">
                        <ArtifactsIcon
                            className="ring-ico"
                            size={UserIcon.Size.Size32}
                        />
                        {/*<Logo
                            glyph={hubLogo}
                            size={Logo.Size.Size48}
                        />*/}
                    </a>
                    <Link to="/operkassa">Оперкасса</Link>
                    <Link to="/kassa_perescheta">Касса пересчета</Link>
                    <Link to="/buh_documents">Бух. документы</Link>
                    <Link to="/ledger">Картотеки</Link>
                    <Dropdown anchor="Сервисы">
                        <PopupMenu
                            top={-12}
                            closeOnSelect
                            data={[
                                {label: 'Справочники'},
                                {label: 'Отчеты'}
                            ]}
                        />
                    </Dropdown>
                    <Tray>
                        {/*<SmartServices/>*/}
                        {/*<SmartProfile/>*/}
                        <UserIcon
                            className="ring-ico"
                            size={UserIcon.Size.Size18}
                        />
                        <Group>
                            <Link to="/current_user">Соколов А.В.</Link>
                            <Text info>Опер.день</Text>
                            <DatePicker
                                date={this.state.date}
                                onChange={this.setDate}
                            />
                        </Group>
                        <Button primary>Авторизация</Button>
                    </Tray>
                </Header>
            </div>
        );
    }
}
