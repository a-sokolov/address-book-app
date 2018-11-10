import React, { Component } from 'react';
import { Modal, Button, Icon, Divider } from 'antd';
import { Table } from 'antd';

const ButtonGroup = Button.Group;

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    filters: [{
        text: 'Joe',
        value: 'Joe',
    }, {
        text: 'Jim',
        value: 'Jim',
    }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
            text: 'Green',
            value: 'Green',
        }, {
            text: 'Black',
            value: 'Black',
        }],
    }],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
}, {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
}, {
    title: 'Address',
    dataIndex: 'address',
    filters: [{
        text: 'London',
        value: 'London',
    }, {
        text: 'New York',
        value: 'New York',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
}];

function onChange(pagination, filters, sorter) {
    console.log('params', pagination, filters, sorter);
}

function confirm() {
    Modal.confirm({
        title: 'Удаление сумки',
        content: 'Вы уверены что хотите продолжить операцию?',
        okText: 'Продолжить',
        cancelText: 'Отмена',
    });
}

export default class AcceptVSPBags extends Component {
    state = { visible: false }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    hideModal = () => {
        this.setState({
            visible: false,
        });
    }

    render() {
        return (
            <div>
                <ButtonGroup>
                    <Button type="primary">
                        <Icon type="sync"/>Обновить
                    </Button>
                    <Button><Icon type="filter"/>Фильтр</Button>
                </ButtonGroup>
                <Divider type="vertical" />
                <ButtonGroup>
                    <Button><Icon type="form"/>Принять сумку</Button>
                    <Button disabled><Icon type="calculator"/>Пересчитать</Button>
                    <Button type="danger" onClick={confirm}><Icon type="delete"/>Удалить сумку</Button>
                </ButtonGroup>
                <Divider type="vertical" />
                <Button><Icon type="search"/>Просмотр</Button>
                <p></p>
                <Table columns={columns} dataSource={data} onChange={onChange} />

                <Modal
                    title="Удаление сумки"
                    visible={this.state.visible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                    okText="Продолжить"
                    cancelText="Отмена"
                >
                    <p>Вы уверены что хотите продолжить операцию?</p>
                </Modal>
            </div>
        )
    }
}