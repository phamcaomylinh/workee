import React from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import TopMenu from "../../components/menu/TopMenu";
import SideMenu from "../../components/menu/SideMenu";
import SubMenu from 'antd/lib/menu/SubMenu';
import ProjectList from "../../components/project/ProjectList";

export default function AppLayout() {
    const { Header, Content, Sider } = Layout;

    return (
        <Layout>
        <Header className="header">
          <TopMenu />
        </Header>
        <Layout>
          <Sider width={200}>
            <SideMenu />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <ProjectList />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
}
