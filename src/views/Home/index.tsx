import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import style from "./index.module.scss";
import { useNavigate, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("col1", "/home/col1", <PieChartOutlined />),
  getItem("col2", "/home/col2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  // 设置展开的下拉菜单
  const [openKeys, setOpenKeys] = useState(["sub1"]);

  // 菜单点击事件
  const menuClick = (e: { key: string }) => {
    console.log("点击了菜单", e.key);
    navigate(e.key);
  };

  // 展开/收缩
  const onOpenChange: MenuProps["onOpenChange"] = (keys: string[]) => {
    // 将展开数据的最后一项，也就是刚才点开的那项赋值给展开的数据，实现只能同时展开一个菜单
    setOpenKeys([keys[keys.length - 1]]);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={style.logo} />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/home/col1"]}
          mode="inline"
          items={items}
          openKeys={openKeys}
          onClick={menuClick}
          onOpenChange={onOpenChange}
        />
      </Sider>
      <Layout className={style["site-layout"]}>
        <Header className={style["site-layout-background"]} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <Outlet></Outlet>
        </Content>
        <Footer className={style["layout-footer"]}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
