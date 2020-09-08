import React from "react";
import { Menu } from "antd";
import Logo from "../logo/logo";
import SubMenu from "antd/lib/menu/SubMenu";
import { UserOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
export default function TopMenu() {
    return (
        <Menu className="top-menu" mode="horizontal">
            <Menu.Item>
                <NavLink to="/">
                    <Logo />
                </NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item>
                <NavLink to="/about">About</NavLink>
            </Menu.Item>

            <SubMenu
                style={{ float: "right" }}
                icon={<UserOutlined />}
                title="Profile"
            >
                <Menu.Item>My Profile</Menu.Item>
                <Menu.Item>Log Out</Menu.Item>
            </SubMenu>
        </Menu>
    );
}
