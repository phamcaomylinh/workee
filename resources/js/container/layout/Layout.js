import React from "react";
import { Breadcrumb } from "antd";



export default function Layout() {
    const { Header, Content, Sider } = Layout;

    return (
        <Layout>
            <Header></Header>
            <Layout>
                <Sider></Sider>
                <Layout>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
