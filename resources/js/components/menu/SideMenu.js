import React from 'react';
import { Menu } from 'antd';

export default function SideMenu() {
    return (
        <Menu mode="inline" className="side-menu" style={{ height: "100%", borderRight: 0 }}>
            <Menu.Item>Item 1</Menu.Item>
            <Menu.Item>Item 2</Menu.Item>
            <Menu.Item>Item 3</Menu.Item>
        </Menu>
    )
}