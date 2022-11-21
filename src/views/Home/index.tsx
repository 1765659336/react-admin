import { Breadcrumb, Layout, Button } from "antd";
import React, { useState } from "react";
import style from "./index.module.less";
import { Outlet } from "react-router-dom";
import MainMenu from "src/components/MainMenu";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const quitLogin = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const items: MenuItem[] = [
    {
      label: "Test",
      key: "/home/col",
      icon: <FileOutlined />,
      children: [
        { label: "col1", key: "/home/col1", icon: <PieChartOutlined /> },
        { label: "col2", key: "/home/col2", icon: <DesktopOutlined /> },
      ],
    },
    {
      label: "Test2",
      key: "/home/manage",
      icon: <FileOutlined />,
      children: [
        {
          label: "系统管理",
          key: "home/manage/system",
          icon: <TeamOutlined />,
          children: [
            { label: "用户管理", key: "/home/users", icon: <UserOutlined /> },
            {
              label: "角色管理",
              key: "/home/roles",
              icon: <DesktopOutlined />,
            },
          ],
        },
      ],
    },
    {
      label: "新闻管理",
      key: "/news/manage",
      icon: <FileOutlined />,
      children: [
        {
          label: "撰写新闻",
          key: "/news/manage/write",
          icon: <TeamOutlined />,
        },
        {
          label: "草稿箱新闻列表",
          key: "/news/manage/draft/list",
          icon: <TeamOutlined />,
        },
        {
          label: "新闻审核列表",
          key: "/news/manage/classification/list",
          icon: <TeamOutlined />,
        },
      ],
    },
  ];
  const breadcrumbArr: Array<string> = [];

  const recursion = (items: MenuItem[]) => {
    for (const iterator of items) {
      if (
        iterator?.key === location.pathname ||
        (iterator &&
          "children" in iterator &&
          iterator.children &&
          iterator.children.length !== 0 &&
          recursion(iterator.children))
      ) {
        breadcrumbArr.push(iterator.label as string);
        return true;
      }
    }
  };

  recursion(items);
  const BreadcrumbItems = breadcrumbArr
    .reverse()
    .map((item) => <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className={style.logo}></div>
        <MainMenu items={items}></MainMenu>
      </Sider>
      <Layout className={style["site-layout"]}>
        <Header className={style["site-layout-header"]}>
          <Button type="link" onClick={quitLogin}>
            退出登录
          </Button>
        </Header>
        <Content style={{ margin: "0 16px" }} className={style.skeletonPostion}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {BreadcrumbItems}
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
