import React from 'react';
import { Menu } from 'antd';
import Logo from '../logo/logo';
import SubMenu from 'antd/lib/menu/SubMenu';
import { UserOutlined } from '@ant-design/icons';
export default function TopMenu() {
    return(
        <Menu className="top-menu" mode="horizontal">
            <Menu.Item>
                <Logo />
            </Menu.Item>
            <Menu.Item>
                Item 1
            </Menu.Item>
            <Menu.Item>
                Item 3
            </Menu.Item>
            <SubMenu icon={<UserOutlined />} title="Profile">
                <Menu.Item>My Profile</Menu.Item>
                <Menu.Item>Log Out</Menu.Item>
            </SubMenu>
        </Menu>
    )
}