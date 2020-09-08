import React, { useState } from 'react';
import { Typography, Table } from 'antd';
import ProjectItem from './ProjectItem';
import { divide } from 'lodash';

export default function ProjectList() {
    const { Title } = Typography;
    const [state, setState] = useState(
        {
            projects: [{
                id: 1,
                name: 'Project 1',
                key: 'P1',
                owner: 'Linh'
            },
            {
                id: 2,
                name: 'Project 2',
                key: 'P2',
                owner: 'Linh'
            },
            {
                id: 3,
                name: 'Yoyo',
                key: 'YO',
                owner: 'Linh'
            },
            {
                id: 4,
                name: 'Give it up',
                key: 'GI',
                owner: 'Linh'
            },
            {
                id: 5,
                name: 'Hello',
                key: 'HE',
                owner: 'Linh'
            },
            ],
            sortedInfo: null,
        })

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name - b.name,
            sortOrder: state.sortedInfo.columnKey === 'name' && sortedInfo.order,
            ellipsis: true
        },
        {
            title: 'Key',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Owner',
            dataIndex: 'owner',
            key: 'owner',
            ellipsis: true
        },
    ]
    handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setState({
            sortedInfo: sorter,
        });
    };
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <>
            <Title>Projects</Title>
            <Table dataSource={state.projects} rowKey='id' columns={columns} onchange={onChange} />;
        </>
    )
}